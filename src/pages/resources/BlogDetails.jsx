/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { database, ref, get, child } from '../../firebase';
import Navbar from '../../layout/NavBar';
import Footer from '../../layout/Footer';

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogDetails = async () => {
      try {
        const dbRef = ref(database);
        const snapshot = await get(child(dbRef, `blogs/${id}`));
        
        if (snapshot.exists()) {
          setBlog({
            id: snapshot.key,
            ...snapshot.val(),
          });
        } else {
          setError('Blog not found');
        }
      } catch (err) {
        console.error('Error fetching blog details:', err);
        setError('Failed to load blog details');
      } finally {
        setLoading(false);
      }
    };

    fetchBlogDetails();
  }, [id]);

  // Function to render HTML content safely
  const renderHTML = (htmlContent) => {
    return { __html: htmlContent || '' };
  };

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="flex justify-center items-center h-64">
            <p className="text-xl">Loading blog content...</p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  if (error) {
    return (
      <>
        <Navbar />
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="bg-red-50 border border-red-200 rounded-md p-4 mb-6">
            <p className="text-red-600">{error}</p>
            <button 
              onClick={() => navigate('/blogs')}
              className="mt-4 text-blue-600 hover:underline"
            >
              Back to blogs
            </button>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Back button */}
        <button 
          onClick={() => navigate('/blogs')}
          className="mb-6 flex items-center text-blue-600 hover:underline"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to Blogs
        </button>
        
        {/* Blog Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">{blog.title}</h1>
          <div className="flex flex-wrap gap-2 items-center text-sm text-gray-600">
            <span>{blog.date}</span>
            {blog.author && (
              <>
                <span>•</span>
                <span>By {blog.author}</span>
              </>
            )}
            {blog.category && (
              <>
                <span>•</span>
                <span className="inline-block bg-gray-100 rounded px-2 py-1 text-xs text-gray-700">
                  {blog.category}
                </span>
              </>
            )}
          </div>
        </div>
        
        {/* Featured Image */}
        {blog.imageUrl && (
          <div className="mb-8">
            <img 
              src={blog.imageUrl} 
              alt={blog.title}
              className="w-full h-auto rounded-lg shadow-md" 
            />
          </div>
        )}
        
        {/* Blog Content */}
        <div className="prose max-w-none">
          {/* Short description - Render as HTML if it contains HTML */}
          {blog.description && (
            <div 
              className="text-lg font-medium text-gray-700 mb-6"
              dangerouslySetInnerHTML={renderHTML(blog.description)}
            />
          )}
          
          {/* Main content - Render as HTML */}
          {blog.content && (
            <div 
              className="blog-content"
              dangerouslySetInnerHTML={renderHTML(blog.content)}
            />
          )}
        </div>
        
        {/* Related blogs section could be added here */}
      </div>

      {/* Add CSS for the blog content from ReactQuill */}
      <style jsx>{`
        .blog-content {
          line-height: 1.6;
        }
        .blog-content h1, 
        .blog-content h2, 
        .blog-content h3, 
        .blog-content h4, 
        .blog-content h5, 
        .blog-content h6 {
          margin-top: 1.5em;
          margin-bottom: 0.5em;
          font-weight: 600;
        }
        .blog-content h1 { font-size: 1.875rem; }
        .blog-content h2 { font-size: 1.5rem; }
        .blog-content h3 { font-size: 1.25rem; }
        .blog-content p {
          margin-bottom: 1rem;
        }
        .blog-content ul, .blog-content ol {
          margin-left: 1.5rem;
          margin-bottom: 1rem;
        }
        .blog-content ul { list-style-type: disc; }
        .blog-content ol { list-style-type: decimal; }
        .blog-content blockquote {
          border-left: 4px solid #e2e8f0;
          padding-left: 1rem;
          font-style: italic;
          margin: 1rem 0;
        }
        .blog-content a {
          color: #3182ce;
          text-decoration: underline;
        }
        .blog-content img {
          max-width: 100%;
          height: auto;
          border-radius: 0.25rem;
          margin: 1rem 0;
        }
        .blog-content pre {
          background: #f7fafc;
          padding: 1rem;
          border-radius: 0.25rem;
          overflow-x: auto;
          margin: 1rem 0;
        }
        .blog-content code {
          background: #edf2f7;
          padding: 0.2rem 0.4rem;
          border-radius: 0.25rem;
          font-size: 0.875rem;
        }
      `}</style>
      <Footer />
    </>
  );
};

export default BlogDetails;