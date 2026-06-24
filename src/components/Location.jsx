import React from 'react';
import { Phone, Mail, Clock, CalendarX, Navigation } from 'lucide-react';
import './Location.css';

const Location = () => {
  return (
    <section className="location-canvas-section" id="location">
      <div className="location-container">
        
        <div className="location-header">
          <span className="location-subtitle">OUR LOCATION</span>
          <h2 className="location-title">Find Us <span className="location-highlight">Here</span></h2>
          <p className="location-desc">
            Visit us at our clinic in Edavanna for personalized, holistic homeopathic care. We are conveniently located and easy to find.
          </p>
        </div>

      </div>

      <div className="location-canvas-container">
        {/* Full-width Map Canvas Background */}
        <div className="map-canvas-background">
          <iframe 
            src="https://maps.google.com/maps?q=Pathappiriyam,+Edavanna,+Malappuram,+Kerala&t=&z=14&ie=UTF8&iwloc=&output=embed" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Daya Homeopathic Clinic Location"
          ></iframe>
        </div>

        {/* Floating Card Centering Context */}
        <div className="location-overlay-wrapper">
          <div className="loc-floating-card">
            <div className="loc-card-header">
              <div className="loc-status-badge">
                <span className="pulsing-dot"></span>
                <span>Open Now</span>
              </div>
              <h3 className="info-brand-title">Daya Homeopathy</h3>
              <p className="info-brand-desc">
                Pathappiriyam, Edavanna &bull; Malappuram, Kerala
              </p>
            </div>

            <div className="info-list">
              <div className="info-item">
                <div className="info-icon-box"><Phone size={20} /></div>
                <div className="info-text-box">
                  <span className="info-label">Phone</span>
                  <strong className="info-value">+91 99475 76123</strong>
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-icon-box"><Mail size={20} /></div>
                <div className="info-text-box">
                  <span className="info-label">Email</span>
                  <strong className="info-value">dayahomeopathyclinic@gmail.com</strong>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon-box"><Clock size={20} /></div>
                <div className="info-text-box">
                  <span className="info-label">Timing</span>
                  <strong className="info-value">Mon-Sat: 09:30 AM - 02:00 PM</strong>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon-box"><CalendarX size={20} /></div>
                <div className="info-text-box">
                  <span className="info-label">Holiday</span>
                  <strong className="info-value">Sunday</strong>
                </div>
              </div>
            </div>

            <a 
              href="https://maps.google.com/maps?q=Pathappiriyam,+Edavanna,+Malappuram,+Kerala" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="get-directions-btn"
            >
              <Navigation size={18} /> Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
