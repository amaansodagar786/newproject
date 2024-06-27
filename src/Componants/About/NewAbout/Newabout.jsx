import React from 'react';
import './Newabout.scss';
import image from '../../../Images/Logo/newww.jpg';

const Newabout = () => {
  // Define the text content
  const content = {
    paragraphs: [
      "NoahWDS is being started by our Proprietor Ms. Anjali Giri with a vision for Youth & Innovative Entrepreneurship Management, aiming to redefine the Human Resource Industry. With extensive experience in Top Level Management, Human Resource, Compliance, Finance, Sales & Marketing across various industries, Ms. Anjali Giri brings leadership and insight to NoahWDS.",
      "Youth Entrepreneurship plays a crucial role in developing new skills, fostering innovation, and building resilience among young individuals. NoahWDS recognizes this potential, empowering young entrepreneurs to adapt and thrive in a dynamic market environment."
    ],
    paragraphs2: [
      "NoahWDS started its operations in 2023 having its Headquarters in Vadodara, Gujarat, India.",
      "NoahWDS provides unique value to clients and candidates through a comprehensive suite of innovative solutions which cover an entire range of talent-driven needs from recruitment and assessment, training and development from career management to outsourcing and workforce consulting.",
      "Our Moto is to fulfill the Client requirements. We believe in Client Satisfaction from our valuable services provided to them."
    ]
  };

  return (
    <>
      <div>
        <h2 className='head'>ABOUT NOAH</h2>
      </div>

      {/* First section */}
      <div className="about-section1">
        <div className="about-image1">
          <img src={image} alt="Discussion" />
        </div>
        <div className="about-content1">
          {content.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>

      {/* Second section */}
      <div className="about-section1 reverse">
        <div className="about-content1">
          {content.paragraphs2.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        <div className="about-image1">
          <img src={image} alt="Discussion" />
        </div>
      </div>
    </>
  );
}

export default Newabout;
