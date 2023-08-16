import React from 'react';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa'; // Import icons
import '../../styles/Footer.css'; // Import Footer-specific styles

const Footer = () => (
  <footer className="site-footer">
    <div className="footer-container">
      <div className="social-icons">
        <a
          href="https://github.com/Shivam150"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="icon" />
        </a>
        <a
          href="https://twitter.com/ShivamS96168034"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter className="icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/shivamsingh150/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="icon" />
        </a>
      </div>
      <div className="footer-text">
        <p>
          Designed and developed by Shivam Singh ||
          Copyright@2023 CB
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
