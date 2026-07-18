import React, { useState } from 'react';
import { FaWhatsapp, FaCheckCircle, FaShieldAlt, FaUserMd, FaArrowRight } from 'react-icons/fa';
import Swal from 'sweetalert2';
import './BookingForm.css';

const conditionsList = [
  "Allergy & Asthma",
  "Migraine",
  "Female Disorders",
  "Infertility (M&F)",
  "Eczema",
  "Depression",
  "Acidity & Ulcer",
  "Arthritis",
  "Cancer Support",
  "Old Age Problems",
  "Hair Fall Treatment",
  "Psoriasis",
  "Epilepsy",
  "Piles & Fissures",
  "Kidney Stone",
  "BPH (Prostate)",
  "PCOD",
  "Child Health",
  "Counselling Service",
  "Thyroid Disorders",
  "Weight Management",
  "Insomnia",
  "Immunity Boost",
  "Other / Multiple Conditions"
];

const BookingForm = ({ selectedCondition, setSelectedCondition }) => {
  const [formData, setFormData] = useState({
    name: '', phone: '', place: '', date: '', time: '', condition: '', notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  React.useEffect(() => {
    if (selectedCondition) {
      if (conditionsList.includes(selectedCondition)) {
        setFormData(prev => ({ ...prev, condition: selectedCondition }));
      }
      if (setSelectedCondition) {
        setSelectedCondition('');
      }
    }
  }, [selectedCondition, setSelectedCondition]);

  const getTodayDateString = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
  };

  const WHATSAPP_NUMBER = "919947576123";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const placeText = formData.place ? `\n*City / Place:* ${formData.place}` : '';
    const condText  = formData.condition ? `\n*Symptoms (Condition):* ${formData.condition}` : '';
    const notesText = formData.notes ? `\n*Additional Notes:* ${formData.notes}` : '';
    const message =
      `*New Appointment Request — Daya Homeopathy*\n\n` +
      `*Patient Name:* ${formData.name}${placeText}\n` +
      `*Preferred Date:* ${formData.date}\n` +
      `*Preferred Time:* ${formData.time}\n` +
      `*WhatsApp Number:* ${formData.phone}` +
      `${condText}${notesText}\n\n` +
      `_Sent via Daya Homeopathy Web Booking System_`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    Swal.fire({
      toast: true,
      position: 'top-end',
      icon: 'success',
      title: 'Connecting to WhatsApp Doctor Reception...',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    });

    setSubmitted(true);
    setTimeout(() => window.open(url, '_blank'), 1500);
  };

  const resetForm = () => {
    setSubmitted(false);
    setFormData({ name: '', phone: '', place: '', date: '', time: '', condition: '', notes: '' });
  };

  return (
    <section className="bk-section" id="booking" aria-label="Book Homeopathic Appointment Online – Daya Homeopathy Kerala India, WhatsApp Consultation Worldwide">
      <div className="bk-container">
        
        <div className="bk-grid">
          
          {/* Left Column: Clean, Perfectly Aligned Horizontal Trust Rows */}
          <div className="bk-info">
            
            <div className="bk-eyebrow-wrapper">
              <span className="bk-live-dot"></span>
              <span className="bk-eyebrow">PREMIUM CARE</span>
            </div>

            <h2 className="bk-title">
              Book Your <span>Appointment</span>
            </h2>
            
            <p className="bk-desc">
              Experience world-class homeopathy. Fill out this simple form to start a direct WhatsApp consultation with our expert doctors without waiting in lines.
            </p>

            {/* Clean Horizontal Rows with zero box wrapping or squished circles */}
            <div className="bk-trust-list">
              
              <div className="bk-trust-item">
                <div className="bk-trust-icon"><FaUserMd /></div>
                <div className="bk-trust-text">
                  <h4>Expert Doctors</h4>
                  <p>Personalized constitutional treatment plans tailored specifically by our senior specialists.</p>
                </div>
              </div>

              <div className="bk-trust-item">
                <div className="bk-trust-icon coral"><FaShieldAlt /></div>
                <div className="bk-trust-text">
                  <h4>Root-Cause Approach</h4>
                  <p>Safe, natural, and highly effective remedies that heal from within without harmful side effects.</p>
                </div>
              </div>

              <div className="bk-trust-item">
                <div className="bk-trust-icon"><FaWhatsapp /></div>
                <div className="bk-trust-text">
                  <h4>Direct WhatsApp Connect</h4>
                  <p>Skip traditional waiting rooms and connect directly with clinic reception and triage doctors.</p>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Premium Glass Form Card */}
          <div className="bk-form-wrapper">
            <div className="bk-glass-card">
              
              {!submitted ? (
                <form className="bk-form" onSubmit={handleSubmit}>
                  
                  <div className="bk-input-group split">
                    <div className="bk-field">
                      <label htmlFor="name">Full Name <span className="req">*</span></label>
                      <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="e.g. John Doe" autoComplete="name" required />
                    </div>
                    <div className="bk-field">
                      <label htmlFor="phone">WhatsApp No. <span className="req">*</span></label>
                      <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 99999 99999" pattern="[+0-9\s\-()]{7,20}" title="Enter a valid phone number (7–20 digits)" autoComplete="tel" required />
                    </div>
                  </div>

                  <div className="bk-input-group split-three">
                    <div className="bk-field">
                      <label htmlFor="place">City / Place</label>
                      <input type="text" id="place" name="place" value={formData.place} onChange={handleChange} placeholder="Location" autoComplete="address-level2" />
                    </div>
                    <div className="bk-field">
                      <label htmlFor="date">Date <span className="req">*</span></label>
                      <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} min={getTodayDateString()} autoComplete="off" required />
                    </div>
                    <div className="bk-field">
                      <label htmlFor="time">Time <span className="req">*</span></label>
                      <input type="time" id="time" name="time" value={formData.time} onChange={handleChange} min="09:30" max="14:00" autoComplete="off" required />
                    </div>
                  </div>

                  {/* Classic Old UI Native Dropdown List (Simple, Reliable, Familiar & Clean) */}
                  <div className="bk-input-group">
                    <div className="bk-field">
                      <label htmlFor="condition">Symptoms</label>
                      <select id="condition" name="condition" value={formData.condition} onChange={handleChange} autoComplete="off">
                        <option value="">Select your main symptoms...</option>
                        {conditionsList.map((cond) => (
                          <option key={cond} value={cond}>{cond}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="bk-input-group">
                    <div className="bk-field">
                      <label htmlFor="notes">Additional Notes</label>
                      <textarea id="notes" name="notes" rows="2" value={formData.notes} onChange={handleChange} placeholder="Briefly describe any other details or how long you've had these symptoms..." autoComplete="off"></textarea>
                    </div>
                  </div>

                  <div className="bk-submit-wrapper">
                    <button type="submit" className="bk-submit-btn">
                      <FaWhatsapp className="bk-btn-wa-icon" />
                      <span>Book via WhatsApp</span>
                      <FaArrowRight className="bk-btn-arrow" />
                    </button>
                  </div>

                </form>
              ) : (
                <div className="bk-success-state">
                  <div className="bk-success-icon">
                    <FaCheckCircle size={64} />
                  </div>
                  <h3>Booking Initiated!</h3>
                  <p>Opening WhatsApp... Please tap Send to confirm your consultation slot with our doctors.</p>
                  <button className="bk-reset-btn" onClick={resetForm}>Book Another Appointment</button>
                </div>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BookingForm;
