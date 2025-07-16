import React from 'react';
import './Dashboard.css';
import { motion } from 'framer-motion';

const skills = [
  'HTML', 'CSS', 'JavaScript', 'React', 'Python', 'MySQL', 'Bootstrap', 'Tailwind CSS', 'Material UI', 'Vite'
];

const languages = ['English', 'Tamil', 'German', 'Japanese'];

function Dashboard() {
  return (
    <div className="dashboard-container">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
        className="dashboard-title"
      >
        🚀 My Dashboard
      </motion.h2>

      <motion.div 
        className="skills-section"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 0.3 }}
      >
        <h3>Skills</h3>
        <div className="skills-list">
          {skills.map(skill => (
            <motion.span 
              whileHover={{ scale: 1.1 }} 
              className="skill-badge" 
              key={skill}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </motion.div>

      <motion.div 
        className="languages-section"
        initial={{ opacity: 0, y: 30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ delay: 0.5 }}
      >
        <h3>Languages I Know</h3>
        <div className="languages-list">
          {languages.map(lang => (
            <motion.button 
              whileHover={{ scale: 1.1 }} 
              className="language-button" 
              key={lang}
            >
              {lang}
            </motion.button>
          ))}
        </div>
      </motion.div>

      <motion.div 
        className="progress-section"
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ delay: 0.7 }}
      >
        <h3>📈 Current Progress</h3>
        <ul>
          <li>🔥 Building a professional portfolio</li>
          <li>🤖 AI integration projects</li>
          <li>💻 Working towards full-stack development</li>
        </ul>
      </motion.div>
    </div>
  );
}

export default Dashboard;
