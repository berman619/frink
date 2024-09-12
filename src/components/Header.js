import React, { useState, useEffect } from 'react';
import '../styles/Header.css';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Add scroll event listener to check when the user scrolls past a certain threshold
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <h1>Frink Street <span>Frames</span></h1>
        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          <a href="#about" onClick={toggleMenu}>About</a>
          <a href="#services" onClick={toggleMenu}>Services</a>
          <a href="#samples" onClick={toggleMenu}>Samples</a>
          <a href="#contact" onClick={toggleMenu}>Contact</a>
        </nav>
        <div className="menu-icon" onClick={toggleMenu}>
          {menuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
      </div>
    </header>
  );
};

export default Header;
