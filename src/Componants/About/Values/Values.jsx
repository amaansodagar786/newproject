import React from 'react';
import './Values.scss';
import { FaCheckCircle, FaClipboardList } from 'react-icons/fa';

const Values = () => {
  return (
    <div className="values-container">
      <div className="section">
        <h2>Our Values</h2>
        <ul className="value-list">
          <li>

           Trust: We are a high performing, high quality organization dedicated to employment and human resource services – a trusted partner and resource for our customers and our community.
          </li>
          <li>
            
            Respect: We treat every individual with respect, in every interaction.
          </li>
          <li>
            Integrity: We promise only what we can deliver, and we deliver on every promise. Our business is built on a foundation of honesty and integrity.
          </li>
          <li>
            Commitment: We are committed to providing solutions for our customers. We exist to meet and solve the challenges our customers face.
          </li>
          <li>
            Professionalism: We are seasoned professionals, continuously educating ourselves and preparing for the challenges ahead.
          </li>
        </ul>
      </div>

      <div className="section">
        <h2>Our Strength</h2>
        <ul className="strength-list">
          <li>Compliance & Statutory Compliance</li>
          <li>Compliance to the Law of Land</li>
          <li>Timely Delivery</li>
          <li>Proper Execution</li>
          <li>Efficient & Trained Staff</li>
          <li>Trained Work Force</li>
          <li>Offered with proper Documentation</li>
        </ul>
      </div>

      <div className="section">
        <h2>How we Manage</h2>
        <ul className="team-list">
          <li>Recruiter Team</li>
          <li>Legal & Compliance</li>
          <li>Shared Services</li>
          <li>MIS Management</li>
          <li>HR Team</li>
        </ul>
        <p>
          Above is the basic model for managing the engagement. Ratio of dedicated/non dedicated resources to be worked on only after taking a stock of precise engagement details of the client.
        </p>
      </div>
    </div>
  );
}

export default Values;
