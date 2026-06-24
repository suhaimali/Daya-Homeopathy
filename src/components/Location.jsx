import React from 'react';
import { Phone, Mail, Clock, MapPin, Navigation, ExternalLink } from 'lucide-react';
import './Location.css';

const Location = () => {
  return (
    <section className="location-section" id="location">
      <div className="location-container">
        
        <div className="location-header">
          <span className="location-subtitle">OUR LOCATION</span>
          <h2 className="location-title">Find Us <span className="location-highlight">Here</span></h2>
          <p className="location-desc">
            Visit us at our clinic in Edavanna for personalized, holistic homeopathic care. We are conveniently located and easy to find.
          </p>
        </div>

        <div className="location-main-box">
          {/* Info Column */}
          <div className="location-info-column">
            <div className="location-card-header">
              <div className="location-status-badge">
                <span className="location-pulsing-dot"></span>
                <span>Open Now</span>
              </div>
              <h3 className="clinic-brand-title">Daya Homeopathy</h3>
              <p className="clinic-brand-tagline">Holistic Healing & Personalized Care</p>
            </div>

            <div className="location-details-list">
              <div className="location-detail-item">
                <div className="loc-icon-wrapper">
                  <MapPin size={20} />
                </div>
                <div className="loc-text-wrapper">
                  <span className="loc-item-label">Address</span>
                  <strong className="loc-item-value">
                    Pathappiriyam, Edavanna,<br />
                    Malappuram, Kerala - 676541
                  </strong>
                </div>
              </div>

              <a href="tel:+919947576123" className="location-detail-item interactive">
                <div className="loc-icon-wrapper">
                  <Phone size={20} />
                </div>
                <div className="loc-text-wrapper">
                  <span className="loc-item-label">Phone Call</span>
                  <strong className="loc-item-value">+91 99475 76123</strong>
                </div>
                <ExternalLink size={14} className="loc-external-arrow" />
              </a>
              
              <a href="mailto:dayahomeoppm@gmail.com" className="location-detail-item interactive">
                <div className="loc-icon-wrapper">
                  <Mail size={20} />
                </div>
                <div className="loc-text-wrapper">
                  <span className="loc-item-label">Email Us</span>
                  <strong className="loc-item-value">dayahomeoppm@gmail.com</strong>
                </div>
                <ExternalLink size={14} className="loc-external-arrow" />
              </a>

              <div className="location-detail-item">
                <div className="loc-icon-wrapper">
                  <Clock size={20} />
                </div>
                <div className="loc-text-wrapper">
                  <span className="loc-item-label">Clinic Hours</span>
                  <strong className="loc-item-value">Mon - Sat: 09:30 AM - 02:00 PM</strong>
                  <span className="loc-item-subvalue">Sunday: Closed (Holiday)</span>
                </div>
              </div>
            </div>

            <a 
              href="https://maps.google.com/maps?q=Pathappiriyam,+Edavanna,+Malappuram,+Kerala" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="location-directions-btn"
            >
              <Navigation size={18} />
              <span>Get Directions on Google Maps</span>
            </a>
          </div>

          {/* Map Column */}
          <div className="location-map-column">
            <div className="map-frame">
              <iframe 
                src="https://maps.google.com/maps?q=Pathappiriyam,+Edavanna,+Malappuram,+Kerala&t=&z=14&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Daya Homeopathic Clinic Location Map"
              ></iframe>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Location;
