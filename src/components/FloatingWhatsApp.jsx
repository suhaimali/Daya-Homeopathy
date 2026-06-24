import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './FloatingWhatsApp.css';

const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/919947576123?text=Hello%20Daya%20Homeopathy"
      className="floating-whatsapp"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
    >
      <div className="whatsapp-icon-container">
        <FaWhatsapp className="whatsapp-icon" />
      </div>
      <div className="whatsapp-tooltip">Chat with us</div>
    </a>
  );
};

export default FloatingWhatsApp;
