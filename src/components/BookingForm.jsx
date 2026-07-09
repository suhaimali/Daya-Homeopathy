import React, { useState } from 'react';
import { FaWhatsapp, FaUserAlt, FaMapMarkerAlt, FaCalendarAlt, FaClock, FaStethoscope, FaNotesMedical, FaCheckCircle, FaShieldAlt, FaUserMd } from 'react-icons/fa';
import Swal from 'sweetalert2';
import './BookingForm.css';

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
    const placeText = formData.place ? `%0A*Place:* ${formData.place}` : '';
    const condText = formData.condition ? `%0A*Condition:* ${formData.condition}` : '';
    const notesText = formData.notes ? `%0A*Notes:* ${formData.notes}` : '';
    const text = `*New Booking — Daya Homeopathy*%0A%0A*Name:* ${formData.name}${placeText}%0A*Date:* ${formData.date}%0A*Time:* ${formData.time}%0A*WhatsApp:* ${formData.phone}${condText}${notesText}`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
    
    Swal.fire({
      toast: true,
      position: 'top-end',
      icon: 'success',
      title: 'Redirecting to WhatsApp...',
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
          {/* Left Column: Info & Trust */}
          <div className="bk-info">
            <span className="bk-eyebrow">PREMIUM CARE</span>
            <h2 className="bk-title">Book Your <span>Appointment</span></h2>
            <p className="bk-desc">
              Experience world-class homeopathy. Fill out this simple form to start a direct WhatsApp consultation with our expert doctors.
            </p>

            <div className="bk-trust-list">
              <div className="bk-trust-item">
                <div className="bk-trust-icon"><FaUserMd /></div>
                <div className="bk-trust-text">
                  <h4>Expert Doctors</h4>
                  <p>Personalized constitutional treatment plans.</p>
                </div>
              </div>
              <div className="bk-trust-item">
                <div className="bk-trust-icon"><FaShieldAlt /></div>
                <div className="bk-trust-text">
                  <h4>Root-Cause Approach</h4>
                  <p>Safe, natural, and highly effective remedies.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Glass Form */}
          <div className="bk-form-wrapper">
            <div className="bk-glass-card">
              {!submitted ? (
                <form className="bk-form" onSubmit={handleSubmit}>
                  
                  <div className="bk-input-group split">
                    <div className="bk-field">
                      <label htmlFor="name"><FaUserAlt /> Full Name</label>
                      <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="e.g. John Doe" required />
                    </div>
                    <div className="bk-field">
                      <label htmlFor="phone"><FaWhatsapp /> WhatsApp No.</label>
                      <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 99999 99999" required />
                    </div>
                  </div>

                  <div className="bk-input-group split-three">
                    <div className="bk-field">
                      <label htmlFor="place"><FaMapMarkerAlt /> City / Place</label>
                      <input type="text" id="place" name="place" value={formData.place} onChange={handleChange} placeholder="Location" />
                    </div>
                    <div className="bk-field">
                      <label htmlFor="date"><FaCalendarAlt /> Date</label>
                      <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} required />
                    </div>
                    <div className="bk-field">
                      <label htmlFor="time"><FaClock /> Time</label>
                      <input type="time" id="time" name="time" value={formData.time} onChange={handleChange} required />
                    </div>
                  </div>

                  <div className="bk-input-group">
                    <div className="bk-field">
                      <label htmlFor="condition"><FaStethoscope /> Main Condition</label>
                      <select id="condition" name="condition" value={formData.condition} onChange={handleChange}>
                        <option value="">Select your main concern...</option>
                        <option>Allergy & Asthma</option>
                        <option>Migraine</option>
                        <option>Female Disorders</option>
                        <option>Infertility (M&F)</option>
                        <option>Eczema</option>
                        <option>Depression</option>
                        <option>Acidity & Ulcer</option>
                        <option>Arthritis</option>
                        <option>Cancer Support</option>
                        <option>Old Age Problems</option>
                        <option>Hair Fall Treatment</option>
                        <option>Psoriasis</option>
                        <option>Epilepsy</option>
                        <option>Piles & Fissures</option>
                        <option>Kidney Stone</option>
                        <option>BPH (Prostate)</option>
                        <option>PCOD</option>
                        <option>Child Health</option>
                        <option>Counselling Service</option>
                        <option>Thyroid Disorders</option>
                        <option>Weight Management</option>
                        <option>Insomnia</option>
                        <option>Immunity Boost</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="bk-input-group">
                    <div className="bk-field">
                      <label htmlFor="notes"><FaNotesMedical /> Symptoms / Notes</label>
                      <textarea id="notes" name="notes" rows="2" value={formData.notes} onChange={handleChange} placeholder="Briefly describe how you're feeling..."></textarea>
                    </div>
                  </div>

                  <button type="submit" className="bk-submit-btn">
                    <FaWhatsapp size={20} />
                    <span>Book via WhatsApp</span>
                  </button>

                </form>
              ) : (
                <div className="bk-success-state">
                  <div className="bk-success-icon">
                    <FaCheckCircle size={64} />
                  </div>
                  <h3>Booking Initiated!</h3>
                  <p>Opening WhatsApp... Our team will assist you shortly.</p>
                  <button className="bk-reset-btn" onClick={resetForm}>Book Another</button>
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
