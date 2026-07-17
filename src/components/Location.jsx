import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaClock, FaMapMarkerAlt, FaDirections, FaCheckCircle } from 'react-icons/fa';
import './Location.css';

const Location = () => {
  return (
    <section className="location-section" id="location">
      {/* Background Glow Blobs */}
      <div className="loc-glow loc-glow-1"></div>
      <div className="loc-glow loc-glow-2"></div>
      
      <div className="container">
        
        {/* Header */}
        <div className="section-header">
          <span className="section-eyebrow">CLINIC LOCATION</span>
          <h2 className="section-title">Visit Daya <span>Homeopathy</span></h2>
          <p className="section-desc">
            Conveniently located in Pathappiriyam, Edavanna. We invite you for peaceful, personalized, and root-cause homeopathic consultation.
          </p>
        </div>

        {/* Responsive Content Grid */}
        {/* ALL-IN-ONE MASTER BOX MODEL UI REDESIGN (`Interactive Map · Pathappiriyam, Malappuram District`) */}
        <div className="location-master-box">
          
          {/* Top Section: Clinic Brand & Directions Button */}
          <div className="master-box-header">
            <div className="master-header-left">
              <div className="brand-pin-icon"><FaMapMarkerAlt /></div>
              <div>
                <h3 className="brand-title">Daya Homeopathy Clinic</h3>
                <p className="brand-address">Pathappiriyam, Edavanna · Malappuram, Kerala</p>
              </div>
            </div>
            <a 
              href="https://www.google.com/maps/place/Daya+Homeopathy+Pathappiriyam/@11.198112,76.134073,17z" 
              target="_blank" 
              rel="noopener noreferrer"
              className="map-directions-btn master-directions-btn"
            >
              <FaDirections /> Get Directions
            </a>
          </div>

          {/* Badges Section */}
          <div className="brand-badge-row master-badge-row">
            <span className="live-status-pill">
              <span className="status-dot"></span> Direct WhatsApp Booking Open
            </span>
            <span className="feature-pill"><FaCheckCircle /> 45+ Years Clinical Excellence</span>
            <span className="feature-pill"><FaCheckCircle /> Root-Cause Constitutional Care</span>
          </div>

          {/* Quick Contact Bar (Sleek 4-Column Responsive Grid) */}
          <div className="contact-master-grid">
            
            <a href="tel:+919544354655" className="contact-item-flat">
              <div className="contact-icon-box green"><FaPhoneAlt /></div>
              <div className="contact-card-content">
                <span className="contact-label">Call For Appointment</span>
                <strong className="contact-value phone-val">+91 95443 54655</strong>
                <span className="contact-sub">Tap to call directly</span>
              </div>
            </a>

            <a href="mailto:dayahomeopathyclinic@gmail.com" className="contact-item-flat">
              <div className="contact-icon-box blue"><FaEnvelope /></div>
              <div className="contact-card-content">
                <span className="contact-label">Official Email</span>
                <strong className="contact-value email-val">dayahomeopathyclinic@gmail.com</strong>
                <span className="contact-sub">Tap to send us a message</span>
              </div>
            </a>

            <div className="contact-item-flat">
              <div className="contact-icon-box teal"><FaClock /></div>
              <div className="contact-card-content">
                <span className="contact-label">Clinic Hours</span>
                <strong className="contact-value">Mon–Sat: 9:30 AM – 2:00 PM</strong>
                <span className="contact-sub">Sunday: Holiday</span>
              </div>
            </div>

          </div>

          {/* Integrated Panoramic Interactive Map Section (`All In One Section Box Model`) */}
          <div className="master-map-section">
            <div className="master-map-banner">
              <div className="map-banner-left">
                <FaMapMarkerAlt className="banner-pin" />
                <div>
                  <h4 className="banner-title">Interactive Map</h4>
                  <p className="banner-subtitle">Pathappiriyam, Malappuram District · Live Google Navigation</p>
                </div>
              </div>
            </div>

            <div className="master-map-viewport">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.8583824087104!2d76.13407297452228!3d11.198112151275142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba6379e41a4084d%3A0xfc0d03ac283d758f!2sDaya%20Homeopathy%20Pathappiriyam!5e0!3m2!1sen!2snl!4v1782902727196!5m2!1sen!2snl"
                width="100%"
                height="100%"
                style={{ border: 0, display: 'block' }}
                allow="fullscreen"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Daya Homeopathic Clinic Location Map"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Location;