import React, { useState } from 'react';
import { FaWhatsapp, FaUserAlt, FaMapMarkerAlt, FaCalendarAlt, FaClock, FaStethoscope, FaNotesMedical, FaCheckCircle, FaShieldAlt, FaUserMd, FaArrowRight } from 'react-icons/fa';
import Swal from 'sweetalert2';
import './BookingForm.css';

const conditionsList = [
  "Allergy & Asthma",
  "Migraine & Chronic Headache",
  "Female Health & Hormonal Disorders",
  "Infertility Care (Male & Female)",
  "Eczema, Psoriasis & Skin Complaints",
  "Depression, Anxiety & Stress Management",
  "Acidity, Ulcer & Gastric Disorders",
  "Arthritis & Joint Pain",
  "Pediatric & Child Health",
  "Thyroid Disorders (Hypo/Hyper)",
  "PCOD / PCOS Management",
  "Hair Fall & Alopecia Treatment",
  "Geriatric & Old Age Problems",
  "Kidney Stone & Urinary Care",
  "Piles, Fissures & Fistula",
  "BPH (Prostate Enlargement)",
  "Epilepsy & Neurological Care",
  "Cancer Supportive Care",
  "Immunity & Constitutional Boost",
  "Constitutional Weight Management",
  "Chronic Insomnia & Sleep Disorders",
     "Counselling Service",
  "Other / Multiple Conditions"
];

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '', phone: '', place: '', date: '', time: '', condition: '', notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const WHATSAPP_NUMBER = "919947576123";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const placeText = formData.place ? `%0A*City / Place:* ${formData.place}` : '';
    const condText = formData.condition ? `%0A*Symptoms (Condition):* ${formData.condition}` : '';
    const notesText = formData.notes ? `%0A*Additional Notes:* ${formData.notes}` : '';
    const text = `*🌟 New Appointment Request — Daya Homeopathy*%0A%0A*Patient Name:* ${formData.name}${placeText}%0A*Preferred Date:* ${formData.date}%0A*Preferred Time:* ${formData.time}%0A*WhatsApp Number:* ${formData.phone}${condText}${notesText}%0A%0A_Sent via Daya Homeopathy Web Booking System_`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
    
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
    <section className="bk-section" id="booking">
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
                      <label htmlFor="name"><FaUserAlt /> Full Name <span className="req">*</span></label>
                      <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="e.g. John Doe" required />
                    </div>
                    <div className="bk-field">
                      <label htmlFor="phone"><FaWhatsapp /> WhatsApp No. <span className="req">*</span></label>
                      <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 99999 99999" required />
                    </div>
                  </div>

                  <div className="bk-input-group split-three">
                    <div className="bk-field">
                      <label htmlFor="place"><FaMapMarkerAlt /> City / Place</label>
                      <input type="text" id="place" name="place" value={formData.place} onChange={handleChange} placeholder="Location" />
                    </div>
                    <div className="bk-field">
                      <label htmlFor="date"><FaCalendarAlt /> Date <span className="req">*</span></label>
                      <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} required />
                    </div>
                    <div className="bk-field">
                      <label htmlFor="time"><FaClock /> Time <span className="req">*</span></label>
                      <input type="time" id="time" name="time" value={formData.time} onChange={handleChange} required />
                    </div>
                  </div>

                  {/* Classic Old UI Native Dropdown List (Simple, Reliable, Familiar & Clean) */}
                  <div className="bk-input-group">
                    <div className="bk-field">
                      <label htmlFor="condition"><FaStethoscope /> Symptoms</label>
                      <select id="condition" name="condition" value={formData.condition} onChange={handleChange}>
                        <option value="">Select your main symptoms...</option>
                        {conditionsList.map((cond) => (
                          <option key={cond} value={cond}>{cond}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="bk-input-group">
                    <div className="bk-field">
                      <label htmlFor="notes"><FaNotesMedical /> Additional Notes</label>
                      <textarea id="notes" name="notes" rows="2" value={formData.notes} onChange={handleChange} placeholder="Briefly describe any other details or how long you've had these symptoms..."></textarea>
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

