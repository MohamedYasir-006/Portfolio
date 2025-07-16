import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import './Contact.css';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_jigq4hv',     // 🔁 Replace with your actual values
      'template_t9vye5c',
      form.current,
      'dnIGazCiCvTZQu7Ul'
    )
    .then(() => {
      alert('✅ Message sent!');
      form.current.reset();
    })
    .catch((err) => {
      alert('❌ Failed to send message.');
      console.error(err);
    });
  };

  return (
    <div className="contact-page">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Let's Connect!
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        I’d love to hear from you. Send a message or reach out through the platforms below.
      </motion.p>

      {/* Form Section */}
      <motion.form
        ref={form}
        onSubmit={sendEmail}
        className="contact-form"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <input type="text" name="user_name" placeholder="Your Name" required />
        <input type="email" name="user_email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" rows="5" required />
        <motion.button whileTap={{ scale: 0.95 }} type="submit">
          Send Message
        </motion.button>
      </motion.form>

      {/* Social Links */}
      <motion.div
        className="social-links"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8 }}
      >
        <a href="https://github.com/MohamedYasir-006" target="_blank" rel="noreferrer">
          <FaGithub size={40} />
        </a>
        <a href="https://www.linkedin.com/in/mohamed-yasir-718063329/" target="_blank" rel="noreferrer">
          <FaLinkedin size={40} />
        </a>
        <a href="https://www.instagram.com/yazzy.solonist/?__pwa=1" target="_blank" rel="noreferrer">
          <FaInstagram size={40} />
        </a>
      </motion.div>
    </div>
  );
}

export default Contact;
