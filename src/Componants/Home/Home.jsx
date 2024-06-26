import React from 'react';
import './Home.scss';
import img1 from '../../Images/Logo/WhatsApp Image 2024-06-25 at 23.19.05_1778b772.jpg';

const Home = () => {
  return (
    <>
    <div className="home">
      <div className="main-section">
        <div className="image-section">
          <img src={img1} alt="Office Building" className="building-image" />
        </div>
        <div className="text-section">
          <h1>FIND YOUR DREAM JOB TODAY</h1>
          <p>Connecting top talent with leading companies.</p>
          <button>SEARCH JOBS</button>
        </div>
      </div>
    </div>

   {/* HOME 1 */}

<div className="about-us">
      <h2>ABOUT NOAH WORKFORCE DEVELOPMENT SYSTEM</h2>
      <div className="content">
        <div className="card">
          <img src={img1} alt="Our Experience" className="card-image" />
          <h3>Our Experience</h3>
          <p>
            With over 11 years of experience in the employment industry, Noah Workforce Development System has built a reputation for excellence in recruitment. Our team of recruiters has a deep understanding of the job market and can help candidates navigate the hiring process with confidence.
          </p>
        </div>
        <div className="card">
          <img src={img1} alt="Our Specialities" className="card-image" />
          <h3>Our Specialties</h3>
          <p>
            We specialize in a variety of industries, including healthcare, finance, IT, and engineering. Our recruiters have in-depth knowledge of each industry and can help match candidates with job opportunities that align with their skills and experience.
          </p>
        </div>
        <div className="card">
          <img src={img1} alt="Our Commitment" className="card-image" />
          <h3>Our Commitment</h3>
          <p>
            At Noah Workforce Development System, we are committed to providing exceptional service to both job seekers and employers. We believe in building long-term relationships with our clients and candidates, and we work tirelessly to ensure their success.
          </p>
        </div>
      </div>
    </div>
    


    </>
  );
}

export default Home;
