/* eslint-disable no-unused-vars */
import { ArrowRight } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import Contact from '../../layout/Contact';
import Footer from '../../layout/Footer';
import Navbar from '../../layout/NavBar';
import Newsletter from '../../layout/NewsLetter';
 
const newsData = [
  {
    title: "OpenAI Unveils Sora: A Game-Changer in AI-Generated Video",
    date: "February 2025",
    description:
      "<h2 class='text-xl font-semibold'>How Sora Works</h2>\n\n" +
      "Sora leverages deep generative modeling and reinforcement learning to understand and synthesize complex video elements such as:\n" +
      "- Realistic character movements\n" +
      "- Dynamic lighting and shadows\n" +
      "- Depth perception and scene continuity\n" +
      "- Detailed textures and natural motion\n\n" +
      "Unlike previous AI video models, which often struggled with scene consistency and object permanence, Sora delivers cohesive, multi-second clips with enhanced stability and detail.\n\n" +
      "<h2 class='text-xl font-semibold'>Applications of Sora</h2>\n\n" +
      "- **Marketing & Advertising**: Brands can generate high-quality promotional videos without expensive production costs.\n" +
      "- **Film & Animation**: Filmmakers can prototype scenes, create visual effects, or develop full short films.\n" +
      "- **Education & Training**: AI-generated explainer videos can enhance online learning and corporate training programs.\n" +
      "- **Gaming & Virtual Worlds**: Developers can generate animated sequences and interactive cutscenes.\n\n" +
      "<h2 class='text-xl font-semibold'>Ethical Considerations</h2>\n\n" +
      "While Sora opens new possibilities in AI-generated content, it raises concerns about deepfakes, misinformation, and copyright issues. OpenAI has assured that safeguards, such as watermarking and AI content detection tools, are in place to prevent misuse.\n\n" +
      "As AI-driven video production gains traction, businesses and creators must adopt ethical AI practices while leveraging this powerful technology.\n\n" +
      "Stay tuned for more updates on how AI is revolutionizing media production!"
  },
  {
    title: "AI in Healthcare: Google DeepMind's Gemini AI Enhances Disease Detection",
    date: "February 2025",
    description:
      "Google DeepMind's Gemini AI is making waves in healthcare by enhancing disease detection and medical diagnostics. With its multimodal AI capabilities, Gemini is helping radiologists and medical professionals analyze complex medical data more accurately and efficiently than traditional diagnostic tools.\n\n" +
      "<h2 class='text-xl font-semibold'>Gemini AI's Role in Healthcare</h2>\n\n" +
      "Google DeepMind has integrated Gemini AI into radiology, pathology, and clinical decision-making, enabling it to:\n\n" +
      "- Analyze medical images (X-rays, MRIs, CT scans) with superior accuracy\n" +
      "- Identify early signs of diseases like cancer, heart conditions, and neurological disorders\n" +
      "- Assist doctors in diagnosing rare or hard-to-detect diseases\n" +
      "- <span class='font-semibold'>Reduce human error and streamline hospital workflows</span>\n\n" +
      "By leveraging advanced deep learning algorithms, Gemini AI learns from vast datasets of medical records and imaging scans, making it a powerful tool for early disease detection and personalized treatment planning.\n\n" +
      "<h2 class='text-xl font-semibold'>Key Benefits of AI-Powered Diagnostics</h2>\n\n" +
      "- **Improved Accuracy**: AI-driven analysis reduces diagnostic errors and improves patient outcomes.\n" +
      "- **Faster Diagnoses**: Gemini AI speeds up detection, allowing doctors to intervene earlier.\n" +
      "- **Scalability**: AI can support overburdened healthcare systems by automating routine diagnostic tasks.\n" +
      "- **Cost Reduction**: AI-powered diagnostics can lower healthcare costs by optimizing resource allocation.\n\n" +
      "<h2 class='text-xl font-semibold'>Challenges & Ethical Considerations</h2>\n\n" +
      "While AI in healthcare is promising, it also comes with challenges such as:\n\n" +
      "- **Data Privacy & Security**: Ensuring patient data remains confidential and secure.\n" +
      "- **Bias in AI Models**: AI must be trained on diverse datasets to avoid biased medical recommendations.\n" +
      "- **Regulatory Compliance**: AI models must meet strict medical guidelines before being deployed in hospitals.\n\n" +
      "Google DeepMind collaborates with leading hospitals and healthcare institutions to refine Gemini AI, ensuring it meets global medical standards and addresses ethical concerns.\n\n" +
      "With AI transforming healthcare at an unprecedented pace, the future of medicine is set to be smarter, faster, and more efficient than ever."
  }
];
 
const NewsCard = ({ news, onClick }) => {
  return (
    <div className="relative rounded-lg bg-gradient-to-r from-gray-700 to-gray-600 p-4 sm:p-6 text-white shadow-md h-full flex flex-col">
      <div className="flex-1">
        <h2 className="text-xl sm:text-2xl font-bold line-clamp-2">{news.title}</h2>
        <p className="text-xs sm:text-sm text-gray-300 mt-1">Date: {news.date}</p>
        <a 
          onClick={() => onClick(news)} 
          className="flex items-center text-xs sm:text-sm text-gray-300 hover:text-white mt-2 cursor-pointer"
          aria-label={`Read more about ${news.title}`}
        >
          <span>Read more</span>
          <ArrowRight className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4" />
        </a>
      </div>
    </div>
  );
};
 
const NewsDetails = ({ news, onBack }) => {
  // Scroll to top when opening a news article
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto p-4 sm:p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl sm:text-3xl font-bold">{news.title}</h2>
      <p className="text-xs sm:text-sm text-black-600 mb-4">Date: {news.date}</p>
      <div 
        className="text-black text-sm sm:text-base prose max-w-none"
        dangerouslySetInnerHTML={{ __html: news.description }}
      ></div>
      <button 
        onClick={onBack} 
        className="mt-4 px-3 py-1 sm:px-4 sm:py-2 bg-gray-700 text-white text-sm rounded-lg hover:bg-gray-900 transition duration-200"
        aria-label="Go back to news list"
      >
        Back
      </button>
    </div>
  );
};
 
export default function NewsPage() {
  const [selectedNews, setSelectedNews] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check viewport size on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
 
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow w-full px-4 py-6">
        <div className="max-w-6xl mx-auto">
          {selectedNews ? (
            <NewsDetails news={selectedNews} onBack={() => setSelectedNews(null)} />
          ) : (
            <section className="mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Recent News</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {newsData.map((news, index) => (
                  <NewsCard key={index} news={news} onClick={setSelectedNews} />
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
      <Contact />
      <Newsletter />
      <Footer />
    </div>
  );
}