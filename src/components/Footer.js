import React from 'react';
import { FaInstagram, FaFacebook } from 'react-icons/fa';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-links">
        <a
          href="https://www.instagram.com/frinkstreetframes"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={30} />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=61558120799146"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook size={30} />
        </a>
      </div>
      <p>Designed by Zach Berger</p>
    </footer>
  );
};

export default Footer;
