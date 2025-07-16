import React from 'react';
import './Certifications.css'; // Optional styling

const Certifications = () => {
  const certs = [
    {
      title: "HTML & CSS Fundamentals",
      issuer: "freeCodeCamp",
      year: "2023",
    },
    {
      title: "JavaScript Basics",
      issuer: "HackerRank",
      year: "2024",
    },
    {
      title: "Python for Everybody",
      issuer: "Coursera",
      year: "2024",
    },
    {
      title: "Responsive Web Design",
      issuer: "freeCodeCamp",
      year: "2023",
    },
    {
      title: "MySQL Beginner Course",
      issuer: "SoloLearn",
      year: "2024",
    },
  ];

  return (
    <div className="cert-page">
      <h1>Certifications</h1>
      <div className="cert-list">
        {certs.map((cert, index) => (
          <div className="cert-card" key={index}>
            <h3>{cert.title}</h3>
            <p><strong>Issued by:</strong> {cert.issuer}</p>
            <p><strong>Year:</strong> {cert.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
