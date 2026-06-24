import React from 'react';
import { Target, MapPin, Heart, Shield } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-header">
          <span className="section-subtitle">Who We Are</span>
          <h2 className="section-title">A Legacy of <span className="text-highlight">Healing</span></h2>
        </div>

        <div className="about-content">
          <div className="about-text-column">
            <p className="about-paragraph highlight-paragraph">
              <strong>Daya Homeopathy</strong> is one of the most trusted homeopathic clinics in Kerala. 
              Established in 1979, we have been serving patients with unwavering dedication for over four decades. 
              Our clinic is built on the foundation of trust, compassion, and a deep understanding of the healing arts.
            </p>
            <p className="about-paragraph">
              We believe that true healing comes from addressing the individual as a whole—mind, body, and spirit. 
              Our homeopathic approach seeks to stimulate the body's natural defense mechanisms to achieve long-lasting wellness. 
              At Daya, every patient receives a personalized treatment plan tailored to their unique constitution and health history.
            </p>
          </div>

          <div className="about-features-column">
            <div className="feature-card mission-card">
              <div className="feature-icon-wrapper mission-icon">
                <Target size={24} color="#ff416c" />
              </div>
              <div className="feature-text">
                <h3>Our Mission</h3>
                <p>"To restore the sick to health by providing high-quality medical services in a simple, easy, and harmless way."</p>
              </div>
            </div>

            <div className="feature-card location-card">
              <div className="feature-icon-wrapper location-icon">
                <MapPin size={24} color="#00C1A3" />
              </div>
              <div className="feature-text">
                <h3>Our Clinic Location</h3>
                <p><strong>Pathappiriyam, Malappuram, Kerala</strong></p>
                <p className="location-desc">Centrally located in Pathappiriyam, our clinic is easily accessible from all parts of the Malappuram district.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="about-stats-bar">
          <div className="about-stat-item">
            <Heart size={32} color="#ff4b2b" className="stat-icon" />
            <div className="stat-info">
              <h4>Compassionate Care</h4>
              <p>Treating the person, not just the disease</p>
            </div>
          </div>
          <div className="about-stat-item">
            <Shield size={32} color="#0b5fb4" className="stat-icon" />
            <div className="stat-info">
              <h4>Harmless & Safe</h4>
              <p>Natural remedies with zero side effects</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
