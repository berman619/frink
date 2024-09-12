import React from 'react';
import { FaPaintBrush, FaRulerCombined, FaImage } from 'react-icons/fa';
import '../styles/Services.css';

const Services = () => {
  return (
    <section id="services" className="services">
      <h2>Our Services</h2>
      <div className="service-cards">
        <div className="service-card">
          <FaPaintBrush size={50} />
          <h3>Custom Framing</h3>
          <p>
            Our custom framing service offers a wide variety of high-quality frame options to suit any artwork. From contemporary to classic designs, we ensure your piece is beautifully showcased. Whether it's a cherished photograph, a concert poster, or a piece of fine art, our expert craftsmen will help you find the perfect frame to enhance your artwork.
          </p>
        </div>
        <div className="service-card">
          <FaRulerCombined size={50} />
          <h3>Art Installation</h3>
          <p>
            Frink Street Frames provides professional art installation services to ensure your pieces are displayed perfectly. Our team has extensive experience in handling and installing art of all types and sizes, ensuring secure and aesthetically pleasing placement in your home or gallery. We take the hassle out of installation, giving you peace of mind that your artwork is in good hands.
          </p>
        </div>
        <div className="service-card">
          <FaImage size={50} />
          <h3>Restoration & Conservation</h3>
          <p>
            Our restoration and conservation services are designed to preserve and restore your valuable artworks. With expertise in handling delicate and antique pieces, we use the latest techniques and materials to ensure the longevity and integrity of your art. Whether it's repairing a damaged frame or conserving a fragile painting, our meticulous process will bring new life to your treasured pieces.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
