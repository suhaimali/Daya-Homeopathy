import React, { useState } from 'react';
import { Calendar, Phone, Mail, Menu, X } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Why Choose Us', href: '#why-choose-us' },
    { name: 'Specialties', href: '#expertise' },
    { name: 'Doctors' , href: '#doctors' }
  ];

  const socialLinks = [
    { icon: <FaFacebookF size={18} color="#1877F2" />, href: 'https://www.facebook.com/profile.php?id=100095537707367&rdid=gnC4ilNycH4087l9&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1Ct9yp5Ezb%2F', bg: '#e8f1fd', label: 'Facebook' },
    { icon: <FaInstagram size={18} color="#E1306C" />, href: 'https://www.instagram.com/dayahomeopathypathappiriyam', bg: '#fcecf1', label: 'Instagram' },
    { icon: <FaWhatsapp size={18} color="#25D366" />, href: 'https://wa.me/919947576123?text=Hello%20Daya%20Homeopathy', bg: '#ebf9f0', label: 'WhatsApp' },
    { icon: <Mail size={18} color="#EA4335" />, href: 'mailto:dayahomeoppm@gmail.com', bg: '#fdedec', label: 'Email' },
    { icon: <Phone size={18} color="#00C1A3" />, href: 'tel:+919544354655', bg: '#e6f9f6', label: 'Phone' },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo Section */}
        <a href="#home" className="navbar-logo" onClick={() => setIsMobileMenuOpen(false)}>
          <div className="logo-icon">DH</div>
          <div className="logo-text">
            <span className="logo-title">Daya</span>
            <span className="logo-subtitle">Homeopathy</span>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="navbar-menu">
          {navLinks.map((link, index) => (
            <a key={index} href={link.href} className="nav-link">
              {link.name}
            </a>
          ))}
        </div>

        {/* Actions & Social */}
        <div className="navbar-actions">
          <a href="#booking" className="book-btn" style={{textDecoration: 'none'}}>
            <Calendar size={18} />
            <span>Book Appointment</span>
          </a>
          
          <div className="social-icons">
            {socialLinks.map((social, index) => (
              <a 
                key={index} 
                href={social.href} 
                className="social-icon"
                style={{ backgroundColor: social.bg }}
                aria-label={social.label}
                target={social.href.startsWith('http') ? '_blank' : undefined}
                rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="mobile-menu-toggle" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="mobile-menu">
          {navLinks.map((link, index) => (
            <a key={index} href={link.href} className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
              {link.name}
            </a>
          ))}
          <div className="mobile-actions">
            <a href="#booking" className="book-btn mobile-book-btn" style={{textDecoration: 'none', display: 'flex'}} onClick={() => setIsMobileMenuOpen(false)}>
              <Calendar size={18} />
              <span>Book Appointment</span>
            </a>
            <div className="social-icons mobile-social-icons">
              {socialLinks.map((social, index) => (
                <a 
                  key={index} 
                  href={social.href} 
                  className="social-icon"
                  style={{ backgroundColor: social.bg }}
                  aria-label={social.label}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
