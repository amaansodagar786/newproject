import React from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';
import {  useNavigate } from 'react-router-dom';
import './Nopage.scss';

const Nopaage = () => {
    const navigate = useNavigate();

    const goToHome = () => {
      navigate('/');
    };

  return (
    <div className="errorPage">
      <FaExclamationTriangle className="icon" />
      <h1>404</h1>
      <p>Oops! The page you're looking for doesn't exist.</p>
      <button onClick={goToHome} className="homeButton">Go to Home</button>
    </div>
  );
};

export default Nopaage;
