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
  const [showPreloader, setShowPreloader] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [selectedCondition, setSelectedCondition] = useState('');

  useEffect(() => {
    if (showPreloader) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [showPreloader]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      const unmountTimer = setTimeout(() => {
        setShowPreloader(false);
      }, 500); // match transition duration (0.5s)
      return () => clearTimeout(unmountTimer);
    }, 800); // adjust time as needed
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {showPreloader && <Preloader fadeOut={fadeOut} />}
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
