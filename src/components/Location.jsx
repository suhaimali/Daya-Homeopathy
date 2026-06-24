import React from 'react';
import { FaPhone, FaEnvelope, FaClock, FaCalendarTimes, FaMapMarkerAlt } from 'react-icons/fa';
import './Location.css';

const Location = () => {
  return (
    <section className="loc-section" id="location">
      <div className="loc-container">

        {/* ── HEADER ── */}
        <div className="loc-header">
          <span className="loc-badge">OUR LOCATION</span>
          <h2 className="loc-title">Find Us <span>Here</span></h2>
          <p className="loc-subtitle">Visit us at Pathappiriyam, Edavanna · Malappuram, Kerala</p>
        </div>

        {/* ── MAIN GRID ── */}
        <div className="loc-main-grid">

          {/* MAP — full-width tall card */}
          <div className="loc-map-card">
            <iframe
              src="https://maps.google.com/maps?q=Pathappiriyam,+Edavanna,+Malappuram,+Kerala&t=&z=14&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, display: 'block' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Daya Homeopathic Clinic Location Map"
            />
          </div>

          {/* RIGHT COLUMN */}
          <div className="loc-right-col">

            {/* Clinic Identity Card */}
            <div className="loc-identity-card">
              <div className="loc-identity-logo">DH</div>
              <div className="loc-identity-text">
                <h3>Daya Homeopathy</h3>
                <p><FaMapMarkerAlt /> Pathappiriyam, Edavanna · Malappuram</p>
              </div>
            </div>

            {/* Contact Details */}
            <div className="loc-details-grid">

              <div className="loc-detail-item">
                <div className="loc-detail-icon loc-icon-green">
                  <FaPhone />
                </div>
                <div className="loc-detail-body">
                  <span>Phone</span>
                  <strong>+91 99475 76123</strong>
                </div>
              </div>

              <div className="loc-detail-item">
                <div className="loc-detail-icon loc-icon-blue">
                  <FaEnvelope />
                </div>
                <div className="loc-detail-body">
                  <span>Email</span>
                  <strong>dayahomeopathyclinic@gmail.com</strong>
                </div>
              </div>

              <div className="loc-detail-item">
                <div className="loc-detail-icon loc-icon-teal">
                  <FaClock />
                </div>
                <div className="loc-detail-body">
                  <span>Hours</span>
                  <strong>Mon–Sat: 9:30 AM – 2:00 PM</strong>
                </div>
              </div>

              <div className="loc-detail-item">
                <div className="loc-detail-icon loc-icon-orange">
                  <FaCalendarTimes />
                </div>
                <div className="loc-detail-body">
                  <span>Holiday</span>
                  <strong>Sunday Closed</strong>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Location;
