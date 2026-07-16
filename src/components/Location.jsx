import React from 'react';
import { FaPhone, FaEnvelope, FaClock, FaCalendarTimes, FaMapMarkerAlt } from 'react-icons/fa';
import './Location.css';

const Location = () => {
  return (
    <section className="loc-simple-section" id="location">
      {/* ── BACKGROUND GLOW BLOBS ── */}
      <div className="loc-blob loc-blob-1"></div>
      <div className="loc-blob loc-blob-2"></div>
      
      <div className="loc-simple-container">

        {/* ── HEADER ── */}
        <div className="loc-simple-header">
          <span className="loc-simple-eyebrow">OUR LOCATION</span>
          <h2 className="loc-simple-title">Find Us <span>Here</span></h2>
          <p className="loc-simple-subtitle">Visit us at Pathappiriyam, Edavanna · Malappuram, Kerala</p>
        </div>

        {/* ── MAIN GRID ── */}
        <div className="loc-simple-grid">

          {/* LEFT: MAP */}
          <div className="loc-simple-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.8583824087104!2d76.13407297452228!3d11.198112151275142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba6379e41a4084d%3A0xfc0d03ac283d758f!2sDaya%20Homeopathy%20Pathappiriyam!5e0!3m2!1sen!2snl!4v1782902727196!5m2!1sen!2snl"
              width="100%"
              height="100%"
              style={{ border: 0, display: 'block' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Daya Homeopathic Clinic Location Map"
            />
          </div>

          {/* RIGHT: CONTACT DETAILS */}
          <div className="loc-simple-details">
            
            <div className="loc-simple-brand">
              <h3>Daya Homeopathy</h3>
              <p><FaMapMarkerAlt /> Pathappiriyam, Edavanna</p>
            </div>

            <div className="loc-simple-list">
              <div className="loc-simple-item">
                <div className="loc-simple-icon green"><FaPhone /></div>
                <div className="loc-simple-info">
                  <span>Phone</span>
                  <strong>+91 95443 54655</strong>
                </div>
              </div>

              <div className="loc-simple-item">
                <div className="loc-simple-icon blue"><FaEnvelope /></div>
                <div className="loc-simple-info">
                  <span>Email</span>
                  <strong>dayahomeopathyclinic@gmail.com</strong>
                </div>
              </div>

              <div className="loc-simple-item">
                <div className="loc-simple-icon teal"><FaClock /></div>
                <div className="loc-simple-info">
                  <span>Clinic Hours</span>
                  <strong>Mon–Sat: 9:30 AM – 2:00 PM</strong>
                </div>
              </div>

              <div className="loc-simple-item">
                <div className="loc-simple-icon orange"><FaCalendarTimes /></div>
                <div className="loc-simple-info">
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