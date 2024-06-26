import React from 'react'
import './Abouthome.scss' ;
import img1 from '../../../Images/Abouthome1.webp';
import img2 from '../../../Images/Abouthome2.webp';
import img3 from '../../../Images/Abouthome3.webp' ;


const Abouthome = () => {
  return (
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
          <img src={img2} alt="Our Specialities" className="card-image" />
          <h3>Our Specialties</h3>
          <p>
            We specialize in a variety of industries, including healthcare, finance, IT, and engineering. Our recruiters have in-depth knowledge of each industry and can help match candidates with job opportunities that align with their skills and experience.
          </p>
        </div>
        <div className="card">
          <img src={img3} alt="Our Commitment" className="card-image" />
          <h3>Our Commitment</h3>
          <p>
            At Noah Workforce Development System, we are committed to providing exceptional service to both job seekers and employers. We believe in building long-term relationships with our clients and candidates, and we work tirelessly to ensure their success.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Abouthome
