import React from 'react';
import homevideo from '../../../Images/Video/home.mp4';
import './Home1.scss';
import { useNavigate } from 'react-router-dom';

const Home1 = () => {
  const navigate = useNavigate();

  const gotocareer = () => {
    navigate('/career');
  };
  return (
    <div className="home">
      <div className="main-section">
        <div className="video-section">
          <video className="home-video" autoPlay loop muted>
            <source src={homevideo} type="video/mp4"  />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="text-section">
          <h1>FIND YOUR DREAM JOB TODAY</h1>
          <p>Beat the Competition by beating yourself.</p>
          <button onClick={gotocareer}>SEARCH JOBS</button>
        </div>
      </div>
    </div>
  );
};

export default Home1;
