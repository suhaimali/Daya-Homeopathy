import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import heroImage from '../assets/hero.jpeg';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-background">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
      </div>
      
      <div className="hero-container">
        <div className="hero-content">
          <div className="trust-badge">
            <ShieldCheck size={18} color="#00C1A3" />
            <span>Trusted Since 1979</span>
          </div>
          
          <h1 className="hero-title">
            Welcome to <br />
            <span className="text-gradient">Daya Homeopathy</span>
          </h1>
          
          <h2 className="hero-subtitle">
            Real Health, Happiness & Peace of Mind
          </h2>
          
          <p className="hero-description">
            One of the best homeopathic clinics in Kerala situated at Pathappiriyam, Malappuram. 
            Dedicated to your holistic well-being for over 4 decades.
          </p>
          
          <div className="hero-actions">
            <button className="primary-btn">
              Consult Now <ArrowRight size={18} />
            </button>
            <button className="secondary-btn">
              Learn More
            </button>
          </div>
          
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-value">100% Safe</span>
              <span className="stat-label">Natural Healing</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <span className="stat-value">Expert Care</span>
              <span className="stat-label">Legacy Team</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <span className="stat-value">Holistic</span>
              <span className="stat-label">Root Cause</span>
            </div>
          </div>
        </div>
        
        <div className="hero-image-wrapper">
          <div className="hero-image-placeholder">
            <div className="image-overlay"></div>
            <img src={heroImage} alt="Daya Homeopathy Clinic" className="hero-img" />
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
