import React, { useState, useEffect } from 'react';
import { 
  FaVenus, FaBaby, FaAllergies, FaSadTear, FaRibbon, 
  FaWalking, FaBolt, FaProcedures, FaMale, FaVial, 
  FaChild, FaUserMd, FaBone, FaWeight, FaBed, FaHeartbeat, FaTint, FaShieldAlt
} from 'react-icons/fa';
import { 
  GiLungs, GiBrain, GiStomach, GiHairStrands, GiKidneys 
} from 'react-icons/gi';
import { X, ArrowRight, Activity } from 'lucide-react';
import './Expertise.css';

const Expertise = () => {
  const [selectedTreatment, setSelectedTreatment] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const treatments = [
    { title: "Allergy & Asthma", category: "General", desc: "Permanent relief for respiratory allergies and chronic asthma through personalized constitutional treatments.", icon: <GiLungs size={32} /> },
    { title: "Migraine", category: "Mental & Neuro", desc: "Comprehensive management of chronic headaches and migraines with targeted homeopathic therapy.", icon: <GiBrain size={32} /> },
    { title: "Female Disorders", category: "Women & Men", desc: "Holistic management of hormonal imbalances, menstrual issues, and female-specific health concerns.", icon: <FaVenus size={32} /> },
    { title: "Infertility (M&F)", category: "Women & Men", desc: "Comprehensive homeopathic approach for both male and female infertility issues with high success rates.", icon: <FaBaby size={32} /> },
    { title: "Eczema", category: "Skin & Hair", desc: "Permanent relief for chronic eczema and other skin allergies through natural, internal healing.", icon: <FaAllergies size={32} /> },
    { title: "Depression", category: "Mental & Neuro", desc: "Holistic mental wellness through gentle homeopathic support for depression, anxiety, and stress.", icon: <FaSadTear size={32} /> },
    { title: "Acidity & Ulcer", category: "Digestive", desc: "Effective treatment for chronic acidity, gastritis, and peptic ulcers without side effects.", icon: <GiStomach size={32} /> },
    { title: "Arthritis", category: "General", desc: "Natural relief for joint pain, rheumatoid arthritis, and osteo-arthritis focusing on mobility.", icon: <FaBone size={32} /> },
    { title: "Cancer Support", category: "General", desc: "Palliative and supportive homeopathic care to improve quality of life during cancer treatment.", icon: <FaRibbon size={32} /> },
    { title: "Old Age Problems", category: "General", desc: "Comprehensive geriatric care for age-related health issues, maintaining vitality and health.", icon: <FaWalking size={32} /> },
    { title: "Hair Fall Treatment", category: "Skin & Hair", desc: "Natural hair regrowth and scalp health treatments addressing the underlying causes.", icon: <GiHairStrands size={32} /> },
    { title: "Psoriasis", category: "Skin & Hair", desc: "Deep constitutional homeopathic treatment for psoriasis offering lasting skin relief without steroids or side effects.", icon: <FaShieldAlt size={32} /> },
    { title: "Epilepsy", category: "Mental & Neuro", desc: "Effective management of seizure disorders through constitutional homeopathic therapy.", icon: <FaBolt size={32} /> },
    { title: "Piles & Fissures", category: "Digestive", desc: "Safe and non-surgical homeopathic treatment for anorectal diseases like piles, fissures, and fistula.", icon: <FaProcedures size={32} /> },
    { title: "Kidney Stone", category: "Digestive", desc: "Natural dissolution and painless removal of kidney stones without surgery using targeted remedies.", icon: <GiKidneys size={32} /> },
    { title: "BPH (Prostate)", category: "Women & Men", desc: "Effective management of Benign Prostatic Hyperplasia through personalized homeopathic protocols.", icon: <FaMale size={32} /> },
    { title: "PCOD", category: "Women & Men", desc: "Hormonal balancing and targeted homeopathic treatments for PCOD and related metabolic issues.", icon: <FaVial size={32} /> },
    { title: "Child Health", category: "General", desc: "Gentle homeopathic remedies for recurrent infections, immunity, and developmental health in children.", icon: <FaChild size={32} /> },
    { title: "Counselling Service", category: "Mental & Neuro", desc: "Professional psychological counselling integrated with homeopathic support for mental wellness.", icon: <FaUserMd size={32} /> },
    { title: "Thyroid Disorders", category: "Women & Men", desc: "Effective regulation of Hypo and Hyperthyroidism using deep-acting constitutional remedies.", icon: <Activity size={32} /> },
    { title: "Weight Management", category: "General", desc: "Holistic approach to healthy weight loss and metabolic correction without crash diets.", icon: <FaWeight size={32} /> },
    { title: "Insomnia", category: "Mental & Neuro", desc: "Natural and non-addictive homeopathic treatment for sleep disorders and chronic insomnia.", icon: <FaBed size={32} /> },
    { title: "Blood Pressure", category: "General", desc: "Safe management of hypertension and cardiovascular health through natural remedies.", icon: <FaHeartbeat size={32} /> },
    { title: "Diabetes Management", category: "Digestive", desc: "Supportive homeopathic care to maintain blood sugar levels and prevent diabetic complications.", icon: <FaTint size={32} /> },
    { title: "Immunity Boost", category: "General", desc: "Strengthen the body's natural defense mechanism against recurrent viral and bacterial infections.", icon: <FaShieldAlt size={32} /> }
  ];

  return (
    <section className="expertise-advanced-section" id="expertise">
      <div className="expertise-advanced-container">
        
        <div className="expertise-adv-header">
          <div className="expertise-adv-title-box">
            <span className="adv-subtitle">OUR MEDICAL EXPERTISE</span>
            <h2 className="adv-title">What We <span className="adv-highlight">Treat</span></h2>
          </div>
          <p className="adv-desc">
            We provide holistic, root-cause solutions for a wide spectrum of health conditions. Explore our comprehensive homeopathic treatments below.
          </p>
        </div>

        {/* Cardless Row List */}
        <div className={`expertise-row-list ${isVisible ? 'fade-in' : ''}`}>
          {treatments.map((item, index) => (
            <div 
              className="adv-row-item" 
              key={`treatment-${index}`}
              onClick={() => setSelectedTreatment(item)}
            >
              <div className="adv-row-left">
                <div className="adv-row-icon">
                  {item.icon}
                </div>
                <div className="adv-row-content">
                  <div className="adv-row-header">
                    <h3 className="adv-row-title">{item.title}</h3>
                    <span className={`adv-category-badge badge-${item.category.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}>
                      {item.category}
                    </span>
                  </div>
                  <p className="adv-row-desc">{item.desc}</p>
                </div>
              </div>
              <div className="adv-row-right">
                <span className="adv-row-action">
                  View Details <ArrowRight size={16} className="arrow-icon" />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Details Modal */}
      {selectedTreatment && (
        <div className="adv-modal-overlay" onClick={() => setSelectedTreatment(null)}>
          <div className="adv-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="adv-modal-close" onClick={() => setSelectedTreatment(null)}>
              <X size={24} />
            </button>
            <div className="adv-modal-icon">
              {selectedTreatment.icon}
            </div>
            <h3 className="adv-modal-title">{selectedTreatment.title}</h3>
            <span className="adv-modal-category">{selectedTreatment.category}</span>
            <p className="adv-modal-desc">{selectedTreatment.desc}</p>
            <button 
              className="adv-modal-book-btn"
              onClick={() => {
                setSelectedTreatment(null);
                const bookingSection = document.getElementById('booking');
                if (bookingSection) {
                  bookingSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Book Appointment Now
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Expertise;
