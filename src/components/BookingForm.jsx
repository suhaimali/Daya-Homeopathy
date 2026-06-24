import React, { useState } from 'react';
import { MessageCircle, CheckCircle, User, Phone, Activity, Calendar, Clock, FileText } from 'lucide-react';
import './BookingForm.css';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    condition: '',
    date: '',
    time: '',
    message: ''
  });

  const [showToast, setShowToast] = useState(false);

  const WHATSAPP_NUMBER = "919947576123"; // Real clinic number

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Format the message for WhatsApp
    const conditionText = formData.condition ? `%0A*Condition:* ${formData.condition}` : '';
    const text = `*New Booking Request*%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}${conditionText}%0A*Date:* ${formData.date}%0A*Time:* ${formData.time}%0A*Message:* ${formData.message}`;
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;

    // Show toast
    setShowToast(true);
    
    // Hide toast after 4 seconds
    setTimeout(() => {
      setShowToast(false);
    }, 4000);

    // Open WhatsApp in new tab
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      // Reset form
      setFormData({ name: '', phone: '', condition: '', date: '', time: '', message: '' });
    }, 800);
  };

  return (
    <section className="booking-section" id="booking">
      <div className="booking-container">
        
        <div className="booking-header">
          <p className="booking-subtitle">GET IN TOUCH</p>
          <h2 className="booking-title">Online Consultation & Booking</h2>
          <p className="booking-desc">
            Fill the form below to start a WhatsApp chat with us for booking your appointment. We'll get back to you as soon as possible.
          </p>
        </div>

        <div className="booking-form-wrapper">
            <form className="booking-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <div className="input-with-icon">
                  <User className="input-icon" size={20} />
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. John Doe"
                    autoComplete="name"
                    required 
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <div className="input-with-icon">
                  <Phone className="input-icon" size={20} />
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. +91 98765 43210"
                    autoComplete="tel"
                    required 
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="condition">Select Condition</label>
                <div className="input-with-icon">
                  <Activity className="input-icon" size={20} />
                  <select id="condition" name="condition" value={formData.condition} onChange={handleChange}>
                    <option value="">-- Select Condition --</option>
                    <option value="Allergy & Asthma">Allergy & Asthma</option>
                    <option value="Migraine">Migraine</option>
                    <option value="Female Disorders">Female Disorders</option>
                    <option value="Infertility (M&F)">Infertility (M&F)</option>
                    <option value="Eczema">Eczema</option>
                    <option value="Depression">Depression</option>
                    <option value="Acidity & Ulcer">Acidity & Ulcer</option>
                    <option value="Arthritis">Arthritis</option>
                    <option value="Cancer Support">Cancer Support</option>
                    <option value="Old Age Problems">Old Age Problems</option>
                    <option value="Hair Fall Treatment">Hair Fall Treatment</option>
                    <option value="Epilepsy">Epilepsy</option>
                    <option value="Piles & Fissures">Piles & Fissures</option>
                    <option value="Kidney Stone">Kidney Stone</option>
                    <option value="BPH (Prostate)">BPH (Prostate)</option>
                    <option value="PCOD">PCOD</option>
                    <option value="Child Health">Child Health</option>
                    <option value="Counselling Service">Counselling Service</option>
                    <option value="Thyroid Disorders">Thyroid Disorders</option>
                    <option value="Weight Management">Weight Management</option>
                    <option value="Insomnia">Insomnia</option>
                    <option value="Blood Pressure">Blood Pressure</option>
                    <option value="Diabetes Management">Diabetes Management</option>
                    <option value="Immunity Boost">Immunity Boost</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group half-width">
                  <label htmlFor="date">Preferred Date</label>
                  <div className="input-with-icon">
                    <Calendar className="input-icon" size={20} />
                    <input 
                      type="date" 
                      id="date" 
                      name="date" 
                      value={formData.date}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                </div>
                <div className="form-group half-width">
                  <label htmlFor="time">Preferred Time</label>
                  <div className="input-with-icon">
                    <Clock className="input-icon" size={20} />
                    <input 
                      type="time" 
                      id="time" 
                      name="time" 
                      value={formData.time}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message / Symptoms</label>
                <div className="input-with-icon textarea-icon-wrapper">
                  <FileText className="input-icon" size={20} />
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="4" 
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Briefly describe your condition..."
                    required
                  ></textarea>
                </div>
              </div>

              <button type="submit" className="wa-submit-btn">
                <MessageCircle size={20} />
                <span>Book via WhatsApp</span>
              </button>
            </form>
          </div>

      </div>

      {/* Custom Toast Notification */}
      <div className={`toast-notification ${showToast ? 'show' : ''}`}>
        <CheckCircle size={24} color="#0cb78f" />
        <div className="toast-content">
          <h4>Success!</h4>
          <p>Redirecting you to WhatsApp...</p>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
