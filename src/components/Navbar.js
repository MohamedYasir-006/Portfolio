import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const closeMenu = () => setMenuOpen(false);

  const links = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/dashboard', label: 'Dashboard' },
  { path: '/certifications', label: 'Certifications' },
  { path: '/contact', label: 'Contact' },
  { path: '/resume', label: 'Resume' }, // ✅ Add this
  { path: '/login', label: 'Login' }
];


  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap"
        rel="stylesheet"
      />

      <motion.nav
        initial={{ y: -70, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="navbar"
      >
        <motion.h1 className="logo" whileHover={{ scale: 1.05 }}>
          HEY! WELCOME
        </motion.h1>

        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="nav-link"
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="menu-icon" onClick={toggleMenu}>
          <div className={menuOpen ? 'bar change' : 'bar'}></div>
          <div className={menuOpen ? 'bar change' : 'bar'}></div>
          <div className={menuOpen ? 'bar change' : 'bar'}></div>
        </div>
      </motion.nav>
    </>
  );
}

export default Navbar;
