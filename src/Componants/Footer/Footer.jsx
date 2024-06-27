import React from 'react';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import './Footer.scss';
import { FaLocationDot } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className='upperline'> Workforce Development System</p>
        <p> <FaLocationDot /> &nbsp; Vasna, Vadodara, Gujarat, India</p>
        <p><FaPhoneAlt /> &nbsp; +91 9510287060</p>
        <p><FaEnvelope /> &nbsp; info@noahwds.com </p>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Noah Workforce Development System - All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
