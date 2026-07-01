import React from 'react';
import { MapPin, Phone, Mail, ArrowRight, Clock } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        
        <div className="footer-top">
          <div className="footer-brand">
            <h2 className="footer-logo">Daya Homeopathy</h2>
            <p className="footer-desc">
              Your trusted destination for classical and advanced homeopathic care. We focus on holistic healing, treating the root cause rather than just the symptoms.
            </p>
            <div className="footer-socials">
              <a href="https://www.facebook.com/profile.php?id=100095537707367&rdid=gnC4ilNycH4087l9&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1Ct9yp5Ezb%2F" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebookF size={18} />
              </a>
              <a href="https://www.instagram.com/dayahomeopathypathappiriyam" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram size={18} />
              </a>
              <a href="https://wa.me/919947576123?text=Hello%20Daya%20Homeopathy" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <FaWhatsapp size={18} />
              </a>
              <a href="mailto:dayahomeoppm@gmail.com" aria-label="Email">
                <FaEnvelope size={18} />
              </a>
              <a href="tel:+919947576123" aria-label="Phone">
                <Phone size={18} />
              </a>
            </div>
          </div>

          <div className="footer-links">
            <h3 className="footer-heading">Quick Links</h3>
            <ul>
              <li><a href="#home"><ArrowRight size={14} /> Home</a></li>
              <li><a href="#about"><ArrowRight size={14} /> About Us</a></li>
              <li><a href="#expertise"><ArrowRight size={14} /> Specialties</a></li>
              <li><a href="#doctors"><ArrowRight size={14} /> Meet Our Doctors</a></li>
              <li><a href="#location"><ArrowRight size={14} /> Location</a></li>
              <li><a href="#booking"><ArrowRight size={14} /> Book Appointment</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h3 className="footer-heading">Contact Us</h3>
            <ul className="contact-list">
              <li>
                <MapPin size={18} className="contact-icon" />
                <span>
                  <strong>Daya Homeopathic Clinic</strong><br />
                  Pathappiriyam, Edavanna<br />
                  Malappuram, Kerala
                </span>
              </li>
              <li>
                <Phone size={18} className="contact-icon" />
                <span><a href="tel:+919947576123" style={{ color: 'inherit', textDecoration: 'none' }}>+91 99475 76123</a></span>
              </li>
              <li>
                <Mail size={18} className="contact-icon" />
                <span>dayahomeoppm@gmail.com</span>
              </li>
              <li>
                <Clock size={18} className="contact-icon" />
                <span>
                  Mon-Sat: 09:30 AM - 02:00 PM<br />
                  Sunday: Holiday
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Daya Homeopathy. All rights reserved. Designed by <a href="https://suhaimsoft.com" target="_blank" rel="noopener noreferrer" className="designer-tag">Suhaim Soft</a></p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
