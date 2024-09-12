import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Contact Us</h2>
      <div className="contact-container">
        <div className="contact-left">
          <div className="contact-info">
            <p>Give us a call, send us an email, stop by the store, or fill out the form to reach us!</p>
            <p>Address: 1 Frink Street, Montclair, NJ 07042</p>
            <p>Phone: (123) 456-7890</p>
            <p>Email: info@frinkstreetframes.com</p>
          </div>
          <form className="contact-form">
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <input type="text" placeholder="Phone" required />
            <textarea placeholder="Message" required></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="contact-right">
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.6079070488475!2d-74.21280058461094!3d40.813849479319795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f62f2d1a9987%3A0xc1a62e94b40c90c7!2s1%20Frink%20St%2C%20Montclair%2C%20NJ%2007042%2C%20USA!5e0!3m2!1sen!2sus!4v1694635359428!5m2!1sen!2sus"
              width="600"
              height="450"
              allowFullScreen=""
              loading="lazy"
              title="Frink Street Frames Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
