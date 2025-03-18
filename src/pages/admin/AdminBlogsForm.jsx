import React, { useState, useRef } from 'react';
import { database, ref, push } from '../../firebase';
import { ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles

// Workaround component to fix the findDOMNode warning
const QuillWrapper = ({ value, onChange, modules, formats, placeholder, className }) => {
  const wrapperRef = useRef(null);
  
  return (
    <div ref={wrapperRef} className={className}>
      <ReactQuill
        value={value}
        onChange={onChange}
        modules={modules}
        formats={formats}
        placeholder={placeholder}
        theme="snow"
      />
    </div>
  );
};

const AdminBlogsForm = () => {
  // Blog form state with extended fields from Admin component
  const [blogForm, setBlogForm] = useState({
    title: '',
    url: '',
    metaTitle: '',
    metaDescription: '',
    metaTags: '',
    focusKeyPhrase: '',
    subKeyPhrases: '',
    description: '',
    category: 'Industry Insights',
    imageUrl: '',
    author: '',
    date: new Date().toISOString().split('T')[0],
    content: '',
    relatedBlogs: '',
  });
  
  // File handling states
  const [selectedFile, setSelectedFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  
  // Loading and feedback states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitFeedback, setSubmitFeedback] = useState({ type: '', message: '' });
  
  // Available blog categories
  const blogCategories = [
    'Industry Insights',
    'Case Studies',
    'Technical Tutorials',
    'AI Applications',
    'Product Updates',
    'Ethics and AI',
    'Company News',
    'Research & Development',
    'FAQs'
  ];

  // Quill editor modules and formats configuration
  const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'color': [] }, { 'background': [] }],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      [{ 'indent': '-1' }, { 'indent': '+1' }],
      [{ 'align': [] }],
      ['link', 'image', 'blockquote', 'code-block'],
      ['clean']
    ],
  };
  
  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike',
    'color', 'background',
    'list', 'bullet',
    'indent',
    'align',
    'link', 'image', 'blockquote', 'code-block',
  ];

  // Handle blog form changes for regular inputs
  const handleBlogChange = (e) => {
    const { name, value } = e.target;
    setBlogForm(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  // Handle rich text editor changes
  const handleEditorChange = (content, name) => {
    setBlogForm(prev => ({
      ...prev,
      [name]: content
    }));
  };
  
  // Handle file selection
  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };
  
  // Upload image to storage
  const uploadImage = async (file) => {
    if (!file) return null;
    setIsUploading(true);
    try {
      const fileName = `blog_images/${Date.now()}_${file.name}`;
      const fileRef = storageRef(storage, fileName); // Make sure 'storage' is correctly imported
      await uploadBytes(fileRef, file);
      const url = await getDownloadURL(fileRef);
      setBlogForm(prev => ({ ...prev, imageUrl: url }));
      setSubmitFeedback({ type: 'success', message: 'Image uploaded successfully!' });
      return url;
    } catch (error) {
      console.error('Error uploading image:', error);
      setSubmitFeedback({ type: 'error', message: `Failed to upload image: ${error.message}` });
      return null;
    } finally {
      setIsUploading(false);
    }
  };
  
  // Submit blog form
  const handleBlogSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitFeedback({ type: '', message: '' });
    
    try {
      // Upload image if selected
      let imageUrl = blogForm.imageUrl;
      if (selectedFile) {
        const uploadedUrl = await uploadImage(selectedFile);
        if (uploadedUrl) {
          imageUrl = uploadedUrl;
        }
      }
      
      // Reference to the blogs collection in Realtime Database
      const blogsRef = ref(database, 'blogs');
      
      // Add timestamp and imageUrl to blog data
      const blogData = {
        ...blogForm,
        imageUrl,
        timestamp: Date.now(),
      };
      
      // Push data to Firebase
      await push(blogsRef, blogData);
      
      // Reset form and show success message
      setBlogForm({
        title: '',
        url: '',
        metaTitle: '',
        metaDescription: '',
        metaTags: '',
        focusKeyPhrase: '',
        subKeyPhrases: '',
        description: '',
        category: 'Industry Insights',
        imageUrl: '',
        author: '',
        date: new Date().toISOString().split('T')[0],
        content: '',
        relatedBlogs: '',
      });
      setSelectedFile(null);
      
      setSubmitFeedback({
        type: 'success',
        message: 'Blog post created successfully!'
      });
    } catch (error) {
      console.error('Error creating blog post:', error);
      setSubmitFeedback({
        type: 'error',
        message: `Failed to create blog post: ${error.message}`
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Add New Blog Post</h2>
      
      {/* Feedback message */}
      {submitFeedback.message && (
        <div className={`p-4 mb-4 rounded ${
          submitFeedback.type === 'success' 
            ? 'bg-green-100 text-green-800' 
            : 'bg-red-100 text-red-800'
        }`}>
          {submitFeedback.message}
        </div>
      )}
      
      <form onSubmit={handleBlogSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Post Title</label>
          <input
            type="text"
            name="title"
            value={blogForm.title}
            onChange={handleBlogChange}
            required
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Post URL</label>
          <input
            type="text"
            name="url"
            value={blogForm.url}
            onChange={handleBlogChange}
            required
            className="w-full px-3 py-2 border rounded-md"
            placeholder="e.g. /blogs/post-title"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Meta Title</label>
            <input
              type="text"
              name="metaTitle"
              value={blogForm.metaTitle}
              onChange={handleBlogChange}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Meta Description</label>
            <input
              type="text"
              name="metaDescription"
              value={blogForm.metaDescription}
              onChange={handleBlogChange}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Meta Tags</label>
            <input
              type="text"
              name="metaTags"
              value={blogForm.metaTags}
              onChange={handleBlogChange}
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Comma separated tags"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Focus Key-phrase</label>
            <input
              type="text"
              name="focusKeyPhrase"
              value={blogForm.focusKeyPhrase}
              onChange={handleBlogChange}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Sub-Key-phrases</label>
            <input
              type="text"
              name="subKeyPhrases"
              value={blogForm.subKeyPhrases}
              onChange={handleBlogChange}
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Comma separated phrases"
            />
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Short Description</label>
          <div className="border rounded-md">
            <QuillWrapper
              value={blogForm.description}
              onChange={(content) => handleEditorChange(content, 'description')}
              modules={modules}
              formats={formats}
              placeholder="Enter a short description..."
              className="h-40"
            />
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Blog Category</label>
          <select
            name="category"
            value={blogForm.category}
            onChange={handleBlogChange}
            className="w-full px-3 py-2 border rounded-md"
          >
            {blogCategories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
        
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Upload Image</label>
              <div className="flex items-center space-x-2">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="w-full px-3 py-2 border rounded-md"
                />
                {selectedFile && (
                  <button
                    type="button"
                    onClick={() => uploadImage(selectedFile)}
                    disabled={isUploading}
                    className={`px-3 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 ${
                      isUploading ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                  >
                    {isUploading ? 'Uploading...' : 'Upload'}
                  </button>
                )}
              </div>
              {selectedFile && (
                <p className="mt-1 text-sm text-gray-500">Selected: {selectedFile.name}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Image URL (Optional)</label>
              <input
                type="url"
                name="imageUrl"
                value={blogForm.imageUrl}
                onChange={handleBlogChange}
                placeholder="https://example.com/image.jpg"
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
          </div>
          {blogForm.imageUrl && (
            <div className="mt-2">
              <img
                src={blogForm.imageUrl}
                alt="Preview"
                className="h-32 w-auto object-cover rounded-md"
              />
            </div>
          )}
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Author</label>
          <input
            type="text"
            name="author"
            value={blogForm.author}
            onChange={handleBlogChange}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Published Date</label>
          <input
            type="date"
            name="date"
            value={blogForm.date}
            onChange={handleBlogChange}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Main Content</label>
          <div className="border rounded-md">
            <QuillWrapper
              value={blogForm.content}
              onChange={(content) => handleEditorChange(content, 'content')}
              modules={modules}
              formats={formats}
              placeholder="Write your blog content here..."
              className="h-72"
            />
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Related Blogs</label>
          <input
            type="text"
            name="relatedBlogs"
            value={blogForm.relatedBlogs}
            onChange={handleBlogChange}
            placeholder="Comma separated blog IDs or URLs"
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className={`px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 ${
            isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
          }`}
        >
          {isSubmitting ? 'Submitting...' : 'Add Blog Post'}
        </button>
      </form>

      <style jsx>{`
        .quill {
          height: 100%;
        }
        .ql-container {
          min-height: 120px; 
          height: calc(100% - 42px);
          font-size: 16px;
        }
        .ql-editor {
          min-height: 120px;
          height: 100%;
        }
      `}</style>
    </div>
  );
};

export default AdminBlogsForm;