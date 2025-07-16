import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Home.css';
import profilePic from '../assets/mohamed-yasir.jpg';

function Home() {
  return (
    <div className="home-container">
      <motion.img 
        src={profilePic}
        alt="Mohamed Yasir"
        className="profile-image"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      />

      <motion.h1 
        className="title"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Mohamed Yasir
      </motion.h1>

      <motion.p 
        className="subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        I'm Mohamed Yasir, a passionate and self-driven B.Tech student in Artificial Intelligence and Data Science at Dhaanish Ahamed College of Engineering. I specialize in front-end development with HTML, CSS, JavaScript, Bootstrap, ReactJS, and backend tools like Firebase & MySQL.
      </motion.p>

      <motion.div 
        className="content-section"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <p className="about-text">
          My interest lies in creating intelligent digital solutions that solve real-world problems. I’ve built projects showcasing AI integration, responsive design, and UI development. I constantly explore new tools to stay ahead in tech.
        </p>

        <p className="about-text">
          I love sharing my work on GitHub & LinkedIn. This portfolio highlights my skills, certifications, and progress. I'm curious about AI and creative design, aiming to grow into a full-stack or AI developer.
        </p>

        <p className="closing-message">
          Let’s connect and build something great together!
        </p>

        <a
          href="https://www.linkedin.com/in/mohamed-yasir-718063329/"
          target="_blank"
          rel="noopener noreferrer"
          className="linkedin-button"
        >
          Connect on LinkedIn
        </a>

        <Link to="/contact" className="contact-button-link">
          <motion.button
            className="contact-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            📬 Contact Me
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
}

export default Home;
