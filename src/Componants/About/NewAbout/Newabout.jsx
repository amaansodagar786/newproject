import React from 'react';
import './Newabout.scss';
import about1 from '../../../Images/1.jpg';
// import about2 from '../../../Images/cr=w_95,h_68,a_cc (1).webp';
import about2 from '../../../Images/about2.jpg';

const Newabout = () => {
  // Define the text content
  const content = {
    paragraphs: [
      "NOAHWDS is being started by our Proprietor Ms. Anjali Giri with a vision for Youth & Innovative Entrepreneurship Management, aiming to redefine the Human Resource Industry. With extensive experience in Top Level Management, Human Resource, Compliance, Finance, Sales & Marketing across various industries, She brings leadership and insight to NOAHWDS.",
      "Youth Entrepreneurship plays a crucial role in developing new skills, fostering innovation, and building resilience among young individuals. NOAHWDS recognizes this potential, empowering young entrepreneurs to adapt and thrive in a dynamic market environment."
    ],
    paragraphs2: [
      "NOAHWDS started its operations in 2023 having its Headquarters in Vadodara, Gujarat, India.",
      "NOAHWDS provides unique value to clients and candidates through a comprehensive suite of innovative solutions which cover an entire range of talent-driven needs from recruitment and assessment, training and development from career management to outsourcing and workforce consulting.",
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
          <img src={about1} alt="Discussion" />
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
          <img src={about2} alt="Discussion" />
        </div>
      </div>
    </>
  );
}

export default Newabout;
