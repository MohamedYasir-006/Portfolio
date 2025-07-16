import React from 'react';
import './Resume.css';

function Resume() {
  return (
    <div className="resume-container">
      <h1>📄 My Resume</h1>
      <p>Download or view my resume below:</p>

      <a 
        href="/my-resume.pdf" 
        download 
        className="download-btn"
        target="_blank"
        rel="noopener noreferrer"
      >
        ⬇️ Download Resume
      </a>

      <iframe 
        src="/my-resume.pdf" 
        title="Resume PDF"
        className="resume-pdf"
      />
    </div>
  );
}

export default Resume;
