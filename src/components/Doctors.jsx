import React from 'react';
import './Doctors.css';

const doctorsData = [
  {
    id: 1,
    name: "Dr. VPM Ashraf",
    title: "SENIOR CONSULTANT",
    titleColor: "var(--primary-green)",
    qualifications: ["BSc", "DHMS", "BAc", "PhD"],
    experience: "45+ Years Experience",
    quote: "Providing Expert Treatment Guidelines with over four decades of clinical excellence in homeopathy.",
    image: "/doctors/doctor_ashraf.png"
  },
  {
    id: 2,
    name: "Dr. VP Jaseela",
    title: "CONSULTANT PHYSICIAN",
    titleColor: "var(--accent-coral)",
    qualifications: ["BHMS", "PGDPC"],
    experience: "Holistic Health Expert",
    quote: "Dedicated to holistic mental and physical well-being through advanced homeopathy & counseling.",
    image: "/doctors/doctor_jaseela.png"
  }
];

const Doctors = () => {
  return (
    <section className="doctors-section" id="doctors">
      <div className="doctors-container">
        <div className="doctors-header">
          <p className="doctors-subtitle">EXPERT CARE</p>
          <h2 className="doctors-heading">Meet Our Doctors</h2>
        </div>
        <div className="doctors-list-simple">
          {doctorsData.map((doctor) => (
            <div className="doctor-card-simple" key={doctor.id}>
              <div className="doc-image-wrapper-simple">
                <img src={doctor.image} alt={doctor.name} className="doc-img-simple" />
              </div>
              <div className="doc-info-simple">
                <h3 className="doc-name-simple">{doctor.name}</h3>
                <p className="doc-role-simple" style={{ color: doctor.titleColor }}>
                  {doctor.title}
                </p>
                <p className="doc-qual-simple">{doctor.qualifications.join(", ")}</p>
                <p className="doc-quote-simple">"{doctor.quote}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;
