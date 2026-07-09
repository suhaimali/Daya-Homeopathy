import React, { useState, useEffect } from 'react';
import { X, ArrowRight } from 'lucide-react';
import './Expertise.css';

const Expertise = () => {
  const [selectedTreatment, setSelectedTreatment] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const treatments = [
    { title: "Allergy & Asthma", category: "General", desc: "Permanent relief for respiratory allergies and chronic asthma through personalized constitutional treatments.", image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=500&auto=format&fit=crop" },
    { title: "Migraine", category: "Mental & Neuro", desc: "Comprehensive management of chronic headaches and migraines with targeted homeopathic therapy.", image: "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?q=80&w=500&auto=format&fit=crop" },
    { title: "Female Disorders", category: "Women & Men", desc: "Holistic management of hormonal imbalances, menstrual issues, and female-specific health concerns.", image: "https://images.unsplash.com/photo-1590611936760-eeb9bc593797?q=80&w=500&auto=format&fit=crop" },
    { title: "Infertility (M&F)", category: "Women & Men", desc: "Comprehensive homeopathic approach for both male and female infertility issues with high success rates.", image: "https://images.unsplash.com/photo-1584515906207-52c616682c16?q=80&w=500&auto=format&fit=crop" },
    { title: "Eczema", category: "Skin & Hair", desc: "Permanent relief for chronic eczema and other skin allergies through natural, internal healing.", image: "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=500&auto=format&fit=crop" },
    { title: "Depression", category: "Mental & Neuro", desc: "Holistic mental wellness through gentle homeopathic support for depression, anxiety, and stress.", image: "https://images.unsplash.com/photo-1520333789090-1afc82db536a?q=80&w=500&auto=format&fit=crop" },
    { title: "Acidity & Ulcer", category: "Digestive", desc: "Effective treatment for chronic acidity, gastritis, and peptic ulcers without side effects.", image: "https://images.unsplash.com/photo-1619086303291-0ef7b401f511?q=80&w=500&auto=format&fit=crop" },
    { title: "Arthritis", category: "General", desc: "Natural relief for joint pain, rheumatoid arthritis, and osteo-arthritis focusing on mobility.", image: "https://images.unsplash.com/photo-1579126479139-3822126f536a?q=80&w=500&auto=format&fit=crop" },
    { title: "Cancer Support", category: "General", desc: "Palliative and supportive homeopathic care to improve quality of life during cancer treatment.", image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=500&auto=format&fit=crop" },
    { title: "Old Age Problems", category: "General", desc: "Comprehensive geriatric care for age-related health issues, maintaining vitality and health.", image: "https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?q=80&w=500&auto=format&fit=crop" },
    { title: "Hair Fall Treatment", category: "Skin & Hair", desc: "Natural hair regrowth and scalp health treatments addressing the underlying causes.", image: "https://images.unsplash.com/photo-1527799822394-473406214f47?q=80&w=500&auto=format&fit=crop" },
    { title: "Psoriasis", category: "Skin & Hair", desc: "Deep constitutional treatment for psoriasis offering lasting relief without steroids.", image: "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?q=80&w=500&auto=format&fit=crop" },
    { title: "Epilepsy", category: "Mental & Neuro", desc: "Effective management of seizure disorders through constitutional homeopathic therapy.", image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=500&auto=format&fit=crop" },
    { title: "Piles & Fissures", category: "Digestive", desc: "Safe and non-surgical homeopathic treatment for anorectal diseases like piles.", image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=500&auto=format&fit=crop" },
    { title: "Kidney Stone", category: "Digestive", desc: "Natural dissolution and painless removal of kidney stones without surgery.", image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?q=80&w=500&auto=format&fit=crop" },
    { title: "BPH (Prostate)", category: "Women & Men", desc: "Effective management of Benign Prostatic Hyperplasia through personalized protocols.", image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=500&auto=format&fit=crop" },
    { title: "PCOD", category: "Women & Men", desc: "Hormonal balancing and targeted treatments for PCOD and related metabolic issues.", image: "https://images.unsplash.com/photo-1624727828489-a1e03b79bba8?q=80&w=500&auto=format&fit=crop" },
    { title: "Child Health", category: "General", desc: "Gentle homeopathic remedies for infections and developmental health in children.", image: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?q=80&w=500&auto=format&fit=crop" },
    { title: "Counselling Service", category: "Mental & Neuro", desc: "Professional psychological counselling integrated with homeopathic support.", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=500&auto=format&fit=crop" },
    { title: "Thyroid Disorders", category: "Women & Men", desc: "Effective regulation of Hypo and Hyperthyroidism using deep-acting remedies.", image: "https://images.unsplash.com/photo-1511174511562-5f7f18b874f8?q=80&w=500&auto=format&fit=crop" },
    { title: "Weight Management", category: "General", desc: "Holistic approach to healthy weight loss and metabolic correction without crash diets.", image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=500&auto=format&fit=crop" },
    { title: "Insomnia", category: "Mental & Neuro", desc: "Natural and non-addictive homeopathic treatment for sleep disorders.", image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?q=80&w=500&auto=format&fit=crop" },
    { title: "Blood Pressure", category: "General", desc: "Safe management of hypertension and cardiovascular health through natural remedies.", image: "https://images.unsplash.com/photo-1613967193490-1d17b930c1ad?q=80&w=500&auto=format&fit=crop" },
    { title: "Diabetes Management", category: "Digestive", desc: "Supportive care to maintain blood sugar levels and prevent diabetic complications.", image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=500&auto=format&fit=crop" },
    { title: "Immunity Boost", category: "General", desc: "Strengthen the body's natural defense mechanism against recurrent infections.", image: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?q=80&w=500&auto=format&fit=crop" }
  ];

  return (
    <section className="expertise-slit-section" id="expertise">
      <div className="expertise-slit-container">
        
        <div className="expertise-slit-header">
          <p className="slit-subtitle">We provide holistic, root-cause solutions for a wide spectrum of health conditions.</p>
          <h2 className="slit-main-title">Explore our comprehensive homeopathic treatments below.</h2>
        </div>

        <div className={`slit-list ${isVisible ? 'fade-in' : ''}`}>
          {treatments.map((item, index) => (
            <div key={index} className="slit-item" onClick={() => setSelectedTreatment(item)}>
              <div className="slit-left">
                <div className="slit-image-box">
                  <img src={item.image} alt={item.title} loading="lazy" />
                </div>
                <div className="slit-content">
                  <div className="slit-title-row">
                    <h3>{item.title}</h3>
                    <span className={`slit-badge badge-${item.category.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}>
                      {item.category}
                    </span>
                  </div>
                  <p className="slit-desc">{item.desc}</p>
                </div>
              </div>
              <div className="slit-right">
                <span className="slit-action">
                  View Details <ArrowRight size={18} />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Details Modal */}
      {selectedTreatment && (
        <div className="slit-modal-overlay" onClick={() => setSelectedTreatment(null)}>
          <div className="slit-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="slit-modal-close" onClick={() => setSelectedTreatment(null)}>
              <X size={24} />
            </button>
            <div className="slit-modal-hero">
                <img src={selectedTreatment.image} alt={selectedTreatment.title} />
            </div>
            <div className="slit-modal-body">
                <span className="modal-cat-tag">{selectedTreatment.category}</span>
                <h2 className="modal-main-title">{selectedTreatment.title}</h2>
                <p className="modal-main-desc">{selectedTreatment.desc}</p>
                <button 
                  className="modal-book-btn"
                  onClick={() => {
                    setSelectedTreatment(null);
                    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Book Appointment Now
                </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Expertise;