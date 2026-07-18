import React, { useState, useEffect } from 'react';
import { X, ArrowRight, Search } from 'lucide-react';
import './Specialties.css';

const Specialties = ({ onSelectSpecialty }) => {
  const [selectedTreatment, setSelectedTreatment] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [visibleItems, setVisibleItems] = useState([]);

  const treatments = [
    { title: "Allergy & Asthma", category: "General", desc: "Permanent relief for respiratory allergies and chronic asthma through personalized constitutional treatments.", image: "/images/Allergy_Asthma.jpeg" },
    { title: "Migraine", category: "Mental & Neuro", desc: "Comprehensive management of chronic headaches and migraines with targeted homeopathic therapy.", image: "/images/Migraine.jpg" },
    { title: "Female Disorders", category: "Women & Men", desc: "Holistic management of hormonal imbalances, menstrual issues, and female-specific health concerns.", image: "/images/Female Disorders.jpeg" },
    { title: "Infertility (M&F)", category: "Women & Men", desc: "Comprehensive homeopathic approach for both male and female infertility issues with high success rates.", image: "/images/Infertility (Male & Female).jpeg" },
    { title: "Eczema", category: "Skin & Hair", desc: "Permanent relief for chronic eczema and other skin allergies through natural, internal healing.", image: "/images/Eczema.jpeg" },
    { title: "Depression", category: "Mental & Neuro", desc: "Holistic mental wellness through gentle homeopathic support for depression, anxiety, and stress.", image: "/images/Depression.jpeg" },
    { title: "Acidity & Ulcer", category: "Digestive", desc: "Effective treatment for chronic acidity, gastritis, and peptic ulcers without side effects.", image: "/images/Acidity & Ulcer.jpeg" },
    { title: "Arthritis", category: "General", desc: "Natural relief for joint pain, rheumatoid arthritis, and osteo-arthritis focusing on mobility.", image: "/images/Arthritis.jpeg" },
    { title: "Cancer Support", category: "General", desc: "Palliative and supportive homeopathic care to improve quality of life during cancer treatment.", image: "/images/Cancer Support.jpeg" },
    { title: "Old Age Problems", category: "General", desc: "Comprehensive geriatric care for age-related health issues, maintaining vitality and health.", image: "/images/Old Age Problems.jpeg" },
    { title: "Hair Fall Treatment", category: "Skin & Hair", desc: "Natural hair regrowth and scalp health treatments addressing the underlying causes.", image: "/images/Hair Fall Treatment.jpeg" },
    { title: "Psoriasis", category: "Skin & Hair", desc: "Deep constitutional treatment for psoriasis offering lasting relief without steroids.", image: "/images/Psoriasis.jpeg" },
    { title: "Epilepsy", category: "Mental & Neuro", desc: "Effective management of seizure disorders through constitutional homeopathic therapy.", image: "/images/Epilepsy.jpeg" },
    { title: "Piles & Fissures", category: "Digestive", desc: "Safe and non-surgical homeopathic treatment for anorectal diseases like piles.", image: "/images/Piles & Fissures.jpeg" },
    { title: "Kidney Stone", category: "Digestive", desc: "Natural dissolution and painless removal of kidney stones without surgery.", image: "/images/Kidney Stone.jpeg" },
    { title: "BPH (Prostate)", category: "Women & Men", desc: "Effective management of Benign Prostatic Hyperplasia through personalized protocols.", image: "/images/BPH (Prostate).jpeg" },
    { title: "PCOD", category: "Women & Men", desc: "Hormonal balancing and targeted treatments for PCOD and related metabolic issues.", image: "/images/PCOD.jpeg" },
    { title: "Child Health", category: "General", desc: "Gentle homeopathic remedies for infections and developmental health in children.", image: "/images/Child Health.jpeg" },
    { title: "Counselling Service", category: "Mental & Neuro", desc: "Professional psychological counselling integrated with homeopathic support.", image: "/images/Counselling Service.jpeg" },
    { title: "Thyroid Disorders", category: "Women & Men", desc: "Effective regulation of Hypo and Hyperthyroidism using deep-acting remedies.", image: "/images/Thyroid Disorders.jpeg" },
    { title: "Weight Management", category: "General", desc: "Holistic approach to healthy weight loss and metabolic correction without crash diets.", image: "/images/Weight Management.jpeg" },
    { title: "Insomnia", category: "Mental & Neuro", desc: "Natural and non-addictive homeopathic treatment for sleep disorders.", image: "/images/insominia.jpeg" },
    { title: "Immunity Boost", category: "General", desc: "Strengthen the body's natural defense mechanism against recurrent infections.", image: "/images/Immunity Boost.jpeg" }
  ];

  const categories = ['All', 'General', 'Mental & Neuro', 'Women & Men', 'Skin & Hair', 'Digestive'];

  const filtered = treatments.filter(item => {
    const matchCat = activeCategory === 'All' || item.category === activeCategory;
    const matchSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  useEffect(() => {
    setVisibleItems([]);
    const count = filtered.length;
    const timers = Array.from({ length: count }, (_, i) =>
      setTimeout(() => setVisibleItems(prev => [...prev, i]), i * 45)
    );
    return () => timers.forEach(clearTimeout);
  // filtered.length captures the count at render time — intentional
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeCategory, searchQuery]);

  return (
    <section className="ex-section" id="expertise" aria-label="Daya Homeopathy Specialties – Expert Homeopathic Treatment for Allergy, Asthma, Migraine, PCOD, Eczema, Depression, Arthritis, Thyroid, Infertility, Hair Fall, Kidney Stone, Epilepsy, Cancer Support & More">
      <div className="ex-container">

        {/* Header */}
        <div className="ex-header">
          <span className="ex-eyebrow">Our Treatments</span>
          <h2 className="ex-title">
            Holistic, Root-Cause Solutions
            <span className="ex-title-accent"> for Every Condition</span>
          </h2>
          <p className="ex-subtitle">
            We provide holistic, root-cause solutions for a wide spectrum of health conditions.
            Explore our comprehensive homeopathic treatments below.
          </p>
        </div>

        {/* Search */}
        <div className="ex-search-wrap">
          <Search size={17} className="ex-search-icon" />
          <input
            type="text"
            id="specialty-search"
            name="specialty-search"
            className="ex-search"
            placeholder="Search treatments, conditions…"
            value={searchQuery}
            onChange={e => { setSearchQuery(e.target.value); setActiveCategory('All'); }}
            autoComplete="off"
          />
        </div>

        {/* Category Tabs */}
        <div className="ex-tabs">
          {categories.map(cat => (
            <button
              key={cat}
              className={`ex-tab ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => { setActiveCategory(cat); setSearchQuery(''); }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* List */}
        <div className="ex-list">
          {filtered.length === 0 ? (
            <div className="ex-empty">
              <Search className="ex-empty-icon" size={40} />
              <p>No treatments found. Try a different keyword.</p>
            </div>
          ) : (
            filtered.map((item, index) => (
              <div
                key={item.title}
                className={`ex-row ${visibleItems.includes(index) ? 'ex-row--visible' : ''}`}
                onClick={() => setSelectedTreatment(item)}
              >
                {/* Index number */}
                <span className="ex-row-num">{String(index + 1).padStart(2, '0')}</span>

                {/* Thumbnail */}
                <div className="ex-thumb">
                  <img src={item.image} alt={`Homeopathic treatment for ${item.title} at Daya Homeopathy Kerala India`} loading="lazy" />
                </div>

                {/* Content */}
                <div className="ex-row-content">
                  <div className="ex-row-top">
                    <h3 className="ex-row-title">{item.title}</h3>
                  </div>
                  <p className="ex-row-desc">{item.desc}</p>
                </div>

                {/* CTA */}
                <div className="ex-row-cta">
                  <span className="ex-row-cta-text">View Details</span>
                  <div className="ex-row-arrow">
                    <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Modal */}
      {selectedTreatment && (
        <div className="ex-modal-overlay" onClick={() => setSelectedTreatment(null)}>
          <div className="ex-modal" onClick={e => e.stopPropagation()}>
            <button className="ex-modal-close" onClick={() => setSelectedTreatment(null)}>
              <X size={18} />
            </button>
            <div className="ex-modal-hero">
              <img src={selectedTreatment.image} alt={`Homeopathic treatment for ${selectedTreatment.title} at Daya Homeopathy`} loading="lazy" />
              <div className="ex-modal-hero-grad" />
              <div className="ex-modal-hero-info">
                <h2>{selectedTreatment.title}</h2>
              </div>
            </div>
            <div className="ex-modal-body">
              <p className="ex-modal-desc">{selectedTreatment.desc}</p>
              <ul className="ex-modal-perks">
                <li>✦ Personalised protocol</li>
                <li>✦ No side effects</li>
                <li>✦ Root-cause approach</li>
                <li>✦ Proven results</li>
              </ul>
              <button
                className="ex-modal-btn"
                onClick={() => {
                  if (onSelectSpecialty) {
                    onSelectSpecialty(selectedTreatment.title);
                  }
                  setSelectedTreatment(null);
                  document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Book Appointment <ArrowRight size={17} />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Specialties;