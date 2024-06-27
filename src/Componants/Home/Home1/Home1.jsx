import React from 'react'
import img1 from '../../../Images/Logo/WhatsApp Image 2024-06-25 at 23.19.05_1778b772.jpg';
import './Home1.scss';

const Home1 = () => {
  return (
    <div className="home">
      <div className="main-section">
        <div className="image-section">
          <img src={img1} alt="Office Building" className="building-image" />
        </div>
        <div className="text-section">
          <h1>FIND YOUR DREAM JOB TODAY</h1>
          <p>Beat the Competition by beating yourself.</p>
          <button>SEARCH JOBS</button>
        </div>
      </div>
    </div>
  )
}

export default Home1
