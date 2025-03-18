import React from "react";
import NavBar from "../../layout/NavBar";
import Contact from "../../layout/Contact";
import NewsLetter from "../../layout/NewsLetter";
import Footer from "../../layout/Footer";

const videoData = [
  {
    id: 1,
    title: "GenAI",
    description: "How it works?",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", // Demo video URL
  },
  {
    id: 2,
    title: "Introduction",
    description: "Discover the basics of GenAI.",
    videoUrl: "https://www.w3schools.com/html/movie.mp4", // Demo video URL
  },
  {
    id: 3,
    title: "Future Projects",
    description: "What’s next in GenAI?",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", // Demo video URL
  },
];

const Videos = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* NavBar */}
      <NavBar />

      {/* Hero Section */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Our Videos</h1>
          <p className="text-gray-600 text-lg">
            Dive into our collection of informative and inspiring videos.
          </p>
        </div>

      </section>
      <div class="absolute w-full h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500"></div>



      {/* Videos Section */}
      <section className="py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4">
          {videoData.map((video) => (
            <div
              key={video.id}
              className="bg-white rounded-lg shadow-md overflow-hidden relative hover:shadow-lg hover:scale-105 transition-transform duration-200 ease-in-out"
            >
              {/* Video */}
              <div className="relative">
                <video
                  className="w-full h-48 object-cover rounded-t-lg hover:opacity-80 transition-opacity duration-200 ease-in-out"
                  src={video.videoUrl}
                  controls
                ></video>
              </div>

              {/* Card Content */}
              <div className="text-center p-4">
                <h2 className="text-xl font-semibold mb-2">{video.title}</h2>
                <p className="text-gray-500">{video.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact,
       Newsletter, and Footer */}
               <div class="absolute w-full h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500"></div>

      <Contact />
      <div class="absolute w-full h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500"></div>

      <NewsLetter />
    
      <Footer />
    </div>
  );
};

export default Videos;
