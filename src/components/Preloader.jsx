import React from 'react';
import './Preloader.css';

const Preloader = () => {
  return (
    <div className="preloader-overlay">
      <div className="preloader-content">
        <div className="preloader-spinner">
          <div className="spinner-circle"></div>
          <div className="spinner-circle-inner"></div>
        </div>
        <div className="preloader-text">
          <h2>Daya Homeopathy</h2>
          <p>Please wait...</p>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
