import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import Specialties from './components/Specialties';
import Doctors from './components/Doctors';
import BookingForm from './components/BookingForm';
import Location from './components/Location';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import ScrollToTop from './components/ScrollToTop';
import Preloader from './components/Preloader';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);
  const [selectedCondition, setSelectedCondition] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800); // adjust time as needed
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhyChooseUs />
        <Specialties onSelectSpecialty={setSelectedCondition} />
        <Doctors />
        <BookingForm selectedCondition={selectedCondition} setSelectedCondition={setSelectedCondition} />
        <Location />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <ScrollToTop />
    </div>
  );
}

export default App;
