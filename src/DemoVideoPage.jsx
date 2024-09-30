import { useState } from "react";
import ReactPlayer from "react-player";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { FaEnvelope, FaGithub } from "react-icons/fa";

const FeatureCard = ({ title, description, icon }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      className="bg-gray-800 rounded-lg p-6 shadow-lg cursor-pointer"
      whileHover={{ scale: 1.05 }}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="flex items-center mb-2">
        {icon}
        <h3 className="text-xl font-semibold ml-2">{title}</h3>
      </div>
      {isExpanded && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-gray-300"
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
};

FeatureCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

const DemoVideoPage = () => {
  const features = [
    {
      title: "AI-Powered Transcription",
      description:
        "Automatically transcribe parliamentary sessions with advanced speech recognition technology.",
      icon: "🎙️",
    },
    {
      title: "Real-Time Editing",
      description:
        "Edit transcripts in real-time or post-session with intuitive tools for maximum accuracy.",
      icon: "✏️",
    },
    {
      title: "Comprehensive Archiving",
      description:
        "Easily access and export past sessions in multiple formats (PDF, DOCX, MP4, etc.).",
      icon: "🗄️",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Hansard+</h1>
        <p className="text-xl">Revolutionizing Parliamentary Documentation</p>
      </div>

      <main className="container mx-auto px-4 py-8">
        <div className="aspect-w-16 aspect-h-9 mb-8 relative">
          <ReactPlayer
            url="your-video-url-here"
            width="100%"
            height="100%"
            controls
            light="path-to-your-thumbnail-image.jpg"
          />
          <div className="absolute top-0 left-0 w-full h-1 bg-gray-700">
            <div className="h-full bg-blue-500" style={{ width: "50%" }}></div>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mb-4">Hansard+ Demo Video</h2>

        <p className="mb-8">
          Hansard+ is an AI-powered transcription software designed specifically
          for government parliaments. It automates the transcription, editing,
          and archiving of parliamentary sessions, enhancing transparency,
          accuracy, and workflow efficiency. With real-time audio and video
          feeds, advanced speaker identification, and comprehensive archiving
          capabilities, Hansard+ is the future of parliamentary documentation.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>

        <section className="mb-8">
  <h3 className="text-2xl font-semibold mb-4 ">Development Roadmap</h3>
  <div className="roadmap-container flex flex-col lg:flex-row justify-center items-center lg:space-x-8 space-y-6 lg:space-y-0 relative">
    {/* Line before Hansard+ */}
    <div className="absolute h-1 bg-gray-400 w-full top-1/2 left-0 roadmap-line lg:block hidden">
      <motion.div
        className="h-full bg-blue-500"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />
    </div>

    {/* Starting point: Hansard+ */}
    <motion.div
      className="roadmap-card flex items-center space-x-4 bg-gray-800 text-white p-4 rounded-lg shadow-md z-10 w-full lg:w-auto"
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <h4 className="text-lg font-bold">Hansard+</h4>
      </div>
    </motion.div>

    {/* Phase 1 */}
    <motion.div
      className="roadmap-card flex items-center space-x-4 bg-gray-800 text-white p-4 rounded-lg shadow-md z-10 w-full lg:w-auto"
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay: 0.2 }}
    >
      <div className="bg-blue-500 w-12 h-12 rounded-full flex justify-center items-center">
        <span className="text-lg font-bold">1</span>
      </div>
      <div>
        <h4 className="text-lg font-bold">Early Development Stage</h4>
        <p>Current milestone: Establishing core functionalities.</p>
      </div>
    </motion.div>

    {/* Phase 2 */}
    <motion.div
      className="roadmap-card flex items-center space-x-4 bg-gray-800 text-white p-4 rounded-lg shadow-md z-10 w-full lg:w-auto"
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.9, delay: 0.4 }}
    >
      <div className="bg-green-500 w-12 h-12 rounded-full flex justify-center items-center">
        <span className="text-lg font-bold">2</span>
      </div>
      <div>
        <h4 className="text-lg font-bold">AI Algorithm Refinement</h4>
        <p>Next steps: Improving accuracy and NLP capabilities.</p>
      </div>
    </motion.div>

    {/* Phase 3 */}
    <motion.div
      className="roadmap-card flex items-center space-x-4 bg-gray-800 text-white p-4 rounded-lg shadow-md z-10 w-full lg:w-auto"
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.1, delay: 0.6 }}
    >
      <div className="bg-purple-500 w-12 h-12 rounded-full flex justify-center items-center">
        <span className="text-lg font-bold">3</span>
      </div>
      <div>
        <h4 className="text-lg font-bold">
          Parliamentary Voting System Integration
        </h4>
        <p>Future plans: Seamless integration with voting systems.</p>
      </div>
    </motion.div>
  </div>
</section>


        <section className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">Get Involved</h3>
          <p className="mb-4">
            We're always looking for feedback from parliamentary staff and
            government officials to improve Hansard+. If you're interested in
            being a beta tester or have ideas to share, we'd love to hear from
            you!
          </p>
          <div className="flex space-x-4">
            {/* Email Contact Button */}
            <a
              href="mailto:thetimortech@gmail.com?subject=Hansard+ Feedback&body=Hi Hansard+ team, I would like to share some feedback or be involved..."
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded flex items-center space-x-2"
            >
              <FaEnvelope /> {/* Email Icon */}
              <span>Email Us</span>
            </a>

            {/* GitHub Profile Button */}
            <a
              href="https://github.com/Timor-Tech" // replace with the actual GitHub link
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded flex items-center space-x-2"
            >
              <FaGithub /> {/* GitHub Icon */}
              <span>GitHub Profile</span>
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-center py-4 mt-8">
        <p>&copy; 2024 Hansard+ by Timor Tech. All rights reserved.</p>
        {/* TODO: Add social media links and other footer content */}
      </footer>
    </div>
  );
};

export default DemoVideoPage;
