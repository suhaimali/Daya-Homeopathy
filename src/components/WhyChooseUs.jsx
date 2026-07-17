import React from 'react';
import { FaUserMd, FaHistory, FaStethoscope, FaGlobe, FaTruck, FaLeaf } from 'react-icons/fa';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const strengths = [
    {
      icon: <FaUserMd size={36} />,
      title: "Expert Doctors",
      description: "Highly qualified and experienced doctors dedicated to your complete recovery and well-being.",
      color: "#FF416C",
      delay: "0.1s"
    },
    {
      icon: <FaHistory size={36} />,
      title: "Healing Since 1979",
      description: "Providing best health care in Homeopathy for over 4 decades with a high success rate.",
      color: "#00C1A3",
      delay: "0.2s"
    },
    {
      icon: <FaStethoscope size={36} />,
      title: "Accurate Diagnosis",
      description: "Treatment based on accurate diagnosis to ensure the most effective and safe healing path.",
      color: "#0b5fb4",
      delay: "0.3s"
    },
    {
      icon: <FaGlobe size={36} />,
      title: "Global Access",
      description: "Telephone & WhatsApp online consultations available for patients in UAE, Saudi Arabia, UK, USA, Canada, Australia, Malaysia, Gulf & worldwide. Real healing, anywhere.",
      color: "#F59E0B",
      delay: "0.4s"
    },
    {
      icon: <FaTruck size={36} />,
      title: "Door Delivery",
      description: "Door Delivery of homeopathic medicines across all of India and international courier to UAE, Saudi Arabia, Qatar, Kuwait, UK, USA, Australia, Canada & 50+ countries.",
      color: "#8B5CF6",
      delay: "0.5s"
    },
    {
      icon: <FaLeaf size={36} />,
      title: "Safe & Natural",
      description: "100% natural, gentle, and highly effective homeopathic remedies with zero side effects.",
      color: "#10b981", /* Healing green */
      delay: "0.6s"
    }
  ];

  return (
    <section className="why-choose-section" id="why-choose-us" aria-label="Why Choose Daya Homeopathy – Online Consultation & Worldwide Medicine Delivery">
      <div className="wcu-container">
        
        <div className="wcu-header">
          <span className="wcu-subtitle">OUR CORE STRENGTHS</span>
          <h2 className="wcu-title">Why <span className="wcu-highlight">Choose Us?</span></h2>
          <p className="wcu-desc">
            Discover what makes Daya Homeopathy the premier choice for natural healing across the globe.
          </p>
        </div>

        <div className="wcu-borderless-grid">
          {strengths.map((item, index) => (
            <div 
              className="wcu-feature-item" 
              key={index}
              style={{ 
                '--item-color': item.color,
                animationDelay: item.delay 
              }}
            >
              <div className="wcu-icon-wrapper">
                {item.icon}
              </div>
              <h3 className="wcu-feature-title">{item.title}</h3>
              <p className="wcu-feature-desc">{item.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
