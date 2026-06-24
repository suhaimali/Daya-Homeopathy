import React from 'react';
import { Wind, Activity, Baby, Pill, Bone, Droplets } from 'lucide-react';
import './Specialties.css';

const Specialties = () => {
  const specialtiesList = [
    {
      id: 1,
      title: 'Respiratory Diseases',
      desc: 'Effective homeopathic relief for Asthma, Bronchitis, and chronic coughs without side effects.',
      icon: <Wind size={32} />,
      gradient: 'linear-gradient(135deg, #0ea5e9 0%, #38bdf8 100%)'
    },
    {
      id: 2,
      title: 'Skin Conditions',
      desc: 'Gentle, permanent healing for Eczema, Psoriasis, Acne, and other chronic dermatological issues.',
      icon: <Droplets size={32} />,
      gradient: 'linear-gradient(135deg, #ec4899 0%, #f472b6 100%)'
    },
    {
      id: 3,
      title: 'Pediatric Care',
      desc: 'Safe immunity boosting, growth support, and treatment for recurrent childhood illnesses.',
      icon: <Baby size={32} />,
      gradient: 'linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)'
    },
    {
      id: 4,
      title: 'Joint & Muscle',
      desc: 'Natural pain management and mobility improvement for Arthritis, Rheumatism, and Back Pain.',
      icon: <Bone size={32} />,
      gradient: 'linear-gradient(135deg, #10b981 0%, #34d399 100%)'
    },
    {
      id: 5,
      title: 'Allergies',
      desc: 'Targeting the root cause of dust, food, and seasonal allergies to build long-term resistance.',
      icon: <Activity size={32} />,
      gradient: 'linear-gradient(135deg, #8b5cf6 0%, #a78bfa 100%)'
    },
    {
      id: 6,
      title: 'Digestive Disorders',
      desc: 'Holistic healing for IBS, Gastritis, Acidity, and chronic constipation issues.',
      icon: <Pill size={32} />,
      gradient: 'linear-gradient(135deg, #f43f5e 0%, #fb7185 100%)'
    }
  ];

  return (
    <section className="specialties-section" id="specialties">
      <div className="specialties-container">


        <div className="specialties-grid">
          {specialtiesList.map((item) => (
            <div className="spec-card" key={item.id}>
              <div className="spec-icon-wrapper" style={{ background: item.gradient }}>
                {item.icon}
              </div>
              <div className="spec-content">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <button className="spec-learn-more">Learn More →</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialties;
