import React from 'react';
import './About.css';
import { FaGraduationCap, FaCode, FaGlobe } from 'react-icons/fa';
import { motion } from 'framer-motion';

function About() {
  return (
    <div className="about-container">
      <motion.h1
        className="about-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <FaGraduationCap /> About Me
      </motion.h1>

      <motion.p
        className="about-text"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        I'm <strong>Mohamed Yasir</strong>, a passionate and self-driven B.Tech student in <strong>Artificial Intelligence and Data Science</strong> at <strong>Dhaanish Ahamed College of Engineering</strong>. I specialize in frontend development using <span className="highlight">HTML</span>, <span className="highlight">CSS</span>, <span className="highlight">JavaScript</span>, <span className="highlight">Bootstrap</span>, and <span className="highlight">ReactJS</span>.
      </motion.p>

      <motion.p
        className="about-text"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        I also work with backend tools like <span className="highlight">Firebase</span> and <span className="highlight">MySQL</span>. I use <span className="highlight">Tailwind CSS</span>, <span className="highlight">Material UI</span>, and <span className="highlight">Vite</span> to build dynamic web applications.
      </motion.p>

      <motion.div
        className="languages-section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <h2><FaGlobe /> Languages I Know</h2>
        <div className="language-tags">
            <button>English</button>
            <button>Tamil</button>
            <button>Hindi</button>
            <button>German</button>
            <button>Japanese</button>
        </div>
        <div className="clothing-section">
  <motion.h3 
    initial={{ opacity: 0, x: -40 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6 }}
  >
    👕 My Clothing Brand
  </motion.h3>

  <motion.p 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ delay: 0.3, duration: 0.6 }}
  >
    Apart from coding, I also run a small-scale clothing page on Instagram where I showcase creative designs, trending styles, and custom-made fashion. It’s my way of expressing design outside the screen!
  </motion.p>

  <motion.a 
  href="https://www.instagram.com/mensarc.in?utm_source=ig_web_button_share_sheet&igsh=MXBjMjhvam1mOGtweQ=="
  target="_blank"
  rel="noopener noreferrer"
  whileHover={{ scale: 1.05 }}
  className="fashion-link"
>
  📸 Visit My Fashion Page — <span className="click-it">Click it</span>
</motion.a>


</div>

      </motion.div>
     
      <motion.div
        className="icon-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <FaCode size={50} color="#3498db" />
      </motion.div>
    </div>
  );
}

export default About;
