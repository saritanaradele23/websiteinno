import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { database, ref, get, child } from "../../firebase";
import Navbar from "../../layout/NavBar";
import Contact from "../../layout/Contact";
import TestimonialSlider from "../../layout/TestimonialSlider";
import Newsletter from "../../layout/NewsLetter";
import Footer from "../../layout/Footer";

const Blogs = () => {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 4;
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    { id: "all", name: "All" },
    { id: "industry-insights", name: "Industry Insights" },
    { id: "case-studies", name: "Case Studies" },
    { id: "technical-tutorials", name: "Technical Tutorials" },
    { id: "ai-applications", name: "AI Applications" },
    { id: "product-updates", name: "Product Updates" },
    { id: "ethics-and-ai", name: "Ethics and AI" },
    { id: "company-news", name: "Company News" },
    { id: "research-development", name: "Research & Development" },
    { id: "faqs", name: "FAQs" },
  ];

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const dbRef = ref(database);
        const snapshot = await get(child(dbRef, "blogs"));

        if (snapshot.exists()) {
          const blogsData = [];
          snapshot.forEach((childSnapshot) => {
            blogsData.push({
              id: childSnapshot.key,
              ...childSnapshot.val(),
            });
          });

          setBlogs(blogsData);
        } else {
          console.log("No blogs available");
          setBlogs([]);
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
      setLoading(false);
    };

    fetchBlogs();
  }, []);

  useEffect(() => {
    let results = blogs;
    if (searchTerm) {
      results = results.filter(
        (blog) =>
          blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          (typeof blog.description === 'string' && 
           blog.description.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    if (selectedCategory !== "All") {
      results = results.filter((blog) => blog.category === selectedCategory);
    }
    setFilteredBlogs(results);
    setCurrentPage(1);
  }, [searchTerm, selectedCategory, blogs]);

  // Function to safely extract text from HTML for preview
  const extractTextFromHTML = (html) => {
    if (!html) return '';
    
    // Create a temporary div element to parse HTML
    const temp = document.createElement('div');
    temp.innerHTML = html;
    
    // Get the text content
    return temp.textContent || temp.innerText || '';
  };

  // Function to create a short preview of description
  const createPreview = (description, maxLength = 150) => {
    if (!description) return '';
    
    let text = typeof description === 'string' ? description : '';
    
    // If it contains HTML, extract just the text
    if (description.includes('<') && description.includes('>')) {
      text = extractTextFromHTML(description);
    }
    
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const handleSearch = (e) => e.preventDefault();

  const handleBlogClick = (blogId) => {
    navigate(`/blog/${blogId}`);
  };

  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8 text-black">Blogs</h1>
        <div className="max-w-md mx-auto mb-8">
          <form onSubmit={handleSearch} className="flex">
            <input
              type="text"
              placeholder="Search"
              className="flex-grow px-4 py-2 bg-gray-200 rounded-l-md focus:outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              type="submit"
              className="bg-gray-400 text-white px-4 py-2 rounded-r-md hover:bg-gray-500"
            >
              Search
            </button>
          </form>
        </div>
        <div className="flex flex-col md:flex-row gap-8">
          {/* --- Category Section --- */}
          <div className="md:w-1/4 bg-white p-4 rounded-lg shadow-lg border border-gray-300">
            <h2 className="text-lg font-bold text-black mb-4">Categories</h2>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category.id}>
                  <button
                    onClick={() => setSelectedCategory(category.name)}
                    className={`w-full text-left px-4 py-2 rounded-md transition-all duration-300 
                      ${
                        selectedCategory === category.name
                          ? "bg-gray-300 text-black font-semibold"
                          : "text-gray-700 hover:bg-gray-200 hover:text-black"
                      }`}
                  >
                    {category.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* --- Blog Cards --- */}
          <div className="md:w-3/4">
            {loading ? (
              <p className="text-gray-500">Loading blogs...</p>
            ) : currentBlogs.length > 0 ? (
              currentBlogs.map((blog) => (
                <div
                  key={blog.id}
                  className="border border-gray-600 p-5 rounded-lg shadow-lg bg-gray-600 mb-4 cursor-pointer 
                    hover:shadow-xl transition-shadow duration-300"
                  onClick={() => handleBlogClick(blog.id)}
                >
                  <h3 className="text-lg font-semibold text-white">{blog.title}</h3>
                  <p className="my-2 text-gray-200">{createPreview(blog.description)}</p>
                  <div className="flex justify-between items-center mt-3">
                    <p className="text-sm text-gray-300">{blog.date}</p>
                    {blog.category && (
                      <span className="inline-block bg-gray-700 rounded px-2 py-1 text-xs text-gray-300">
                        {blog.category}
                      </span>
                    )}
                  </div>
                  <p className="text-gray-300 text-sm mt-3 hover:text-white transition-all duration-300">
                    Read more →
                  </p>
                </div>
              ))
            ) : (
              <p className="text-gray-500">No blogs found.</p>
            )}
          </div>
        </div>

        {/* --- Pagination --- */}
        <div className="mt-4 flex justify-center space-x-2">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => paginate(i + 1)}
              className={`px-3 py-1 rounded-md ${
                currentPage === i + 1
                  ? "bg-gray-600 text-white"
                  : "bg-gray-200 text-black hover:bg-gray-400"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>

      <Contact />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Blogs;