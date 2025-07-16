import React, { useState } from 'react';
import './FirebaseLogin.css';
import { motion } from 'framer-motion';
import { FaUserAlt, FaLock } from 'react-icons/fa';

function FirebaseLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Firebase login logic here
    console.log('Email:', email, 'Password:', password);
  };

  return (
    <motion.div 
      className="login-container"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="login-title">Login to Portfolio</h2>
      <form onSubmit={handleLogin} className="login-form">
        <div className="input-group">
          <FaUserAlt className="input-icon" />
          <input 
            type="email" 
            placeholder="Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>

        <div className="input-group">
          <FaLock className="input-icon" />
          <input 
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>

        <motion.button 
          whileHover={{ scale: 1.05 }} 
          className="login-button" 
          type="submit"
        >
          Login
        </motion.button>
      </form>
    </motion.div>
  );
}

export default FirebaseLogin;
