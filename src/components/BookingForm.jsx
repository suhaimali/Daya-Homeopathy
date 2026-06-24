import React, { useState } from 'react';
import { FaWhatsapp, FaUserAlt, FaMapMarkerAlt, FaCalendarAlt, FaClock, FaStethoscope, FaNotesMedical, FaCheckCircle, FaArrowRight } from 'react-icons/fa';
import './BookingForm.css';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '', phone: '', place: '', date: '', time: '', condition: '', notes: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [showToast, setShowToast] = useState(false);
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
    setSubmitted(true);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 5000);
    setTimeout(() => window.open(url, '_blank'), 900);
  };

  const resetForm = () => {
    setSubmitted(false);
    setFormData({ name: '', phone: '', place: '', date: '', time: '', condition: '', notes: '' });
  };

  return (
    <section className="bk-adv" id="booking">
      {/* Medical Background Animation */}
      <div className="bk-adv-grid"></div>

      <div className="bk-adv-container">
        
        <div className="bk-adv-header">
          <span className="bk-adv-subtitle">PREMIUM CARE</span>
          <h2 className="bk-adv-title">Book Your Appointment</h2>
          <p className="bk-adv-desc">
            Experience world-class homeopathy. Fill out this simple form to start a direct WhatsApp consultation with our expert doctors.
          </p>
        </div>

        <div className="bk-adv-card">
          <div className="bk-adv-card-glass">
            {!submitted ? (
              <form className="bk-adv-form" onSubmit={handleSubmit}>
                
                <div className="bk-adv-row">
                  <div className="bk-adv-field">
                    <label htmlFor="name"><FaUserAlt className="icon-blue" /> Full Name</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" required />
                  </div>
                  <div className="bk-adv-field">
                    <label htmlFor="phone"><FaWhatsapp className="icon-green" /> WhatsApp Number</label>
                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 99999 99999" required />
                  </div>
                </div>

                <div className="bk-adv-row triple">
                  <div className="bk-adv-field">
                    <label htmlFor="place"><FaMapMarkerAlt className="icon-red" /> Place / City</label>
                    <input type="text" id="place" name="place" value={formData.place} onChange={handleChange} placeholder="City name" />
                  </div>
                  <div className="bk-adv-field">
                    <label htmlFor="date"><FaCalendarAlt className="icon-purple" /> Preferred Date</label>
                    <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} required />
                  </div>
                  <div className="bk-adv-field">
                    <label htmlFor="time"><FaClock className="icon-orange" /> Preferred Time</label>
                    <input type="time" id="time" name="time" value={formData.time} onChange={handleChange} required />
                  </div>
                </div>

                <div className="bk-adv-field">
                  <label htmlFor="condition"><FaStethoscope className="icon-teal" /> Condition</label>
                  <select id="condition" name="condition" value={formData.condition} onChange={handleChange}>
                    <option value="">Select your main concern</option>
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
                    <option>Blood Pressure</option>
                    <option>Diabetes Management</option>
                    <option>Immunity Boost</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="bk-adv-field">
                  <label htmlFor="notes"><FaNotesMedical className="icon-indigo" /> Symptoms / Notes</label>
                  <textarea id="notes" name="notes" rows="3" value={formData.notes} onChange={handleChange} placeholder="Briefly describe your symptoms..."></textarea>
                </div>

                <button type="submit" className="bk-adv-submit">
                  <span className="submit-content">
                    <FaWhatsapp size={22} />
                    <span>Book via WhatsApp</span>
                  </span>
                  <div className="submit-hover-effect"></div>
                </button>

              </form>
            ) : (
              <div className="bk-adv-success">
                <div className="success-icon-wrapper">
                  <FaCheckCircle size={60} color="#10b981" />
                </div>
                <h3>Booking Initiated!</h3>
                <p>We are opening WhatsApp with your details. Our team will assist you shortly.</p>
                <button className="bk-adv-reset" onClick={resetForm}>Book Another Appointment</button>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className={`bk-adv-toast ${showToast ? 'show' : ''}`}>
        <FaCheckCircle color="#10b981" />
        <span>Redirecting to WhatsApp...</span>
      </div>
    </section>
  );
};

export default BookingForm;
