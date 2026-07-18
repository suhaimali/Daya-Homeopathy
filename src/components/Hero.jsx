import { ArrowRight, ShieldCheck } from 'lucide-react';
import heroImage from '../assets/hero.jpeg';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home" aria-label="Daya Homeopathy – Best Homeopathic Clinic in Kerala India, Online Worldwide Consultation & Medicine Delivery">
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
            <a href="#booking" className="primary-btn" style={{ textDecoration: 'none' }}>
              Consult Now <ArrowRight size={18} />
            </a>
            <a href="#about" className="secondary-btn" style={{ textDecoration: 'none' }}>
              Learn More
            </a>
          </div>
          
        </div>
        
        <div className="hero-image-wrapper">
          <div className="hero-image-placeholder">
            <div className="image-overlay"></div>
            <img src={heroImage} alt="Daya Homeopathy Clinic – Best Homeopathic Doctor in Malappuram Kerala India, Online Consultation & Worldwide Medicine Delivery Since 1979" className="hero-img" loading="eager" fetchPriority="high" />
          </div>
          <div className="hero-floating-card">
            <div className="floating-icon-wrap">
              45+
              <span>Yrs</span>
            </div>
            <div className="floating-text-wrap">
              <h4>Years of Care</h4>
              <p>Trusted natural healing</p>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
