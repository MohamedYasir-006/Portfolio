import React from 'react';
import './Dashboard.css';
import { motion } from 'framer-motion';
import projectImg from '../assets/project.jpg'; // Replace with your actual image

const skills = [
  'HTML', 'CSS', 'JavaScript', 'React', 'Python', 'MySQL', 'Bootstrap', 'Tailwind', 'Firebase', 'Material UI'
];

const languages = ['English', 'Tamil', 'German', 'Japanese'];

function Dashboard() {
  return (
    <div className="dashboard-container">
      <motion.h2
        className="dashboard-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        👨‍💻 Developer Dashboard
      </motion.h2>

      <motion.div
        className="skills-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <h3>⚒️ Skills</h3>
        <div className="skills-list">
          {skills.map(skill => (
            <motion.button whileHover={{ scale: 1.1 }} className="skill-badge" key={skill}>
              {skill}
            </motion.button>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="languages-section"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <h3>🈺 Languages</h3>
        <div className="languages-list">
          {languages.map(lang => (
            <motion.button whileHover={{ scale: 1.1 }} className="language-button" key={lang}>
              {lang}
            </motion.button>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="projects-section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
      >
        <h3>🚀 Projects Showcase</h3>
        <div className="project-card">
          <img src={projectImg} alt="Project" />
          <div>
            <h4>AI Interview Bot</h4>
            <p>An intelligent bot that answers interview questions using OpenAI API + Firebase.</p>
            <a href="https://github.com/MohamedYasir-006" target="_blank" rel="noreferrer">
              <button className="view-btn">View on GitHub</button>
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Dashboard;
