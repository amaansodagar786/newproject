import React from 'react';
import './AboutSection.scss';
import image from '../../../Images/Logo/newww.jpg';
import { useNavigate } from 'react-router-dom';

const AboutSection = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/values');
  };
  return (
    <div className="about-section">
      <div className="about-image">
        <img src={image} alt="Discussion" />
      </div>
      <div className="about-content">
        <h1>FIND YOUR DREAM JOB WITH NOAH WORKFORCE DEVELOPMENT SYSTEM</h1>
        <p>
          Welcome to NOAH Workforce Development System, your one-stop-shop for finding the perfect job.
          We specialize in matching qualified candidates with top-tier companies in a variety of industries.
          Let us help you take the next step in your career today!
        </p>
        <button className="find-out-more" onClick={handleNavigate}>Find Out More</button>
      </div>
    </div>
  );
}

export default AboutSection;
