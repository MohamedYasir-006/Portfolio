// src/components/FloatingContactButton.js
import React from 'react';
import { Link } from 'react-router-dom';
import './FloatingContactButton.css';

function FloatingContactButton() {
  return (
    <Link to="/contact" className="floating-contact-button">
      📩 Contact
    </Link>
  );
}

export default FloatingContactButton;
