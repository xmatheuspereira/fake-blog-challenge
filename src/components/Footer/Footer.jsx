import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  return (
    <footer className="bg-light d-flex align-items-center">
      <p className="footer-text">Developed by Matheus Pereira</p>
      <div className="container p-4">
        <ul className="list-unstyled">
          <a
            href="https://github.com/xmatheuspereira/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="footer-icons" />
          </a>
          <a
            href="https://www.linkedin.com/in/xmatheuspereira/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="footer-icons" />
          </a>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
