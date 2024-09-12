import React from 'react';
import '../styles/AboutUs.css';

const AboutUs = () => {
  return (
    <section id="about" className="about-us">
      <div className="about-image">
      <img src={`${process.env.PUBLIC_URL}/about-us.png`} alt="About Us" />
      </div>
      <div className="about-text">
        <h2>About Us</h2>
        <p>
          Frink Street Frames has been a staple in the Montclair, NJ community for over 25 years, offering unparalleled expertise in custom framing, art installation, restoration, and consultation services. Our commitment to quality craftsmanship and attention to detail ensures that every piece we handle is treated with the utmost care and respect.
        </p>
        <p>
          We specialize in museum-quality, conservation and preservation framing, perfect for everything from concert posters to fine art and photography. Our diverse selection of frames and unique artisanal designs are tailored to complement your artwork, meeting the individual needs and tastes of our customers.
        </p>
        <p>
          At Frink Street Frames, we believe that a frame should do more than just hold a piece of art – it should enhance and elevate it. With competitive pricing and a passion for hands-on craftsmanship, we strive to exceed the standard black frame, offering framing solutions that genuinely complement your work.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
