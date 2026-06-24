import React from 'react';
import { Stethoscope, Activity, HeartPulse } from 'lucide-react';
import './Healing.css';

const Healing = () => {
  const steps = [
    {
      icon: <Stethoscope size={32} />,
      title: "1. Detailed Consultation",
      description: "We listen carefully to understand not just your symptoms, but your complete health history and lifestyle."
    },
    {
      icon: <Activity size={32} />,
      title: "2. Root Cause Analysis",
      description: "Our doctors identify the underlying cause of your illness to prescribe a personalized natural remedy."
    },
    {
      icon: <HeartPulse size={32} />,
      title: "3. Holistic Recovery",
      description: "Experience gentle, side-effect-free healing that strengthens your immune system from the inside out."
    }
  ];

  return (
    <section className="healing-section" id="healing">
      <div className="healing-container">
        <div className="healing-header">
          <span className="healing-subtitle">OUR PROCESS</span>
          <h2 className="healing-title">Healing, <span className="healing-highlight">Simplified</span></h2>
          <p className="healing-desc">
            We believe that returning to health should be a natural and straightforward journey. Here is how we help you heal.
          </p>
        </div>

        <div className="healing-grid">
          {steps.map((step, index) => (
            <div className="healing-step" key={index}>
              <div className="healing-icon-wrapper">
                {step.icon}
              </div>
              <h3 className="healing-step-title">{step.title}</h3>
              <p className="healing-step-desc">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Healing;
