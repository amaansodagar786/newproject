import React from 'react';
import './Hrconsultancy.scss';
import image from '../../../Images/Logo/newww.jpg'; 
import hr1 from '../../../Images/company partnership.jpg';

import hr2 from '../../../Images/resume review.jpg';
import hr3 from '../../../Images/interview tips.jpg';
import hr4 from '../../../Images/company partnership.jpg';
import hr5 from '../../../Images/networking event.jpg';
import hr6 from '../../../Images/job application.jpg';


const Hrconsultancy = () => {
  return (
    <>
      <div className="hrdiv">
        <h1>JOIN TOP COMPANIES WITH NOAH WORKFORCE DEVELOPMENT SYSTEM</h1>
      </div>
      <div className="services-section">
        <div className="service reverse">
          <div className="service-content">
            <h2>Company Partnerships</h2>
            <p>
              We partner with top companies across multiple industries to bring you exclusive job opportunities. Our partnerships give you access to a wide range of job listings and increase your chances of getting hired.
            </p>
          </div>
          <div className="service-image">
            <img src={hr1} alt="Service" />
          </div>
        </div>

        <div className="service">
          <div className="service-content">
            <h2>Resume Review</h2>
            <p>
              Get your resume reviewed by our team of experienced recruiters. We will provide feedback on how to improve your resume and make it more attractive to potential employers.
            </p>
          </div>
          <div className="service-image">
            <img src={hr2} alt="Service" />
          </div>
        </div>

        <div className="service reverse">
          <div className="service-content">
            <h2>Interview Tips</h2>
            <p>
              Get expert tips on how to ace your job interview. We provide advice on how to answer common interview questions, how to dress for success, and how to make a great first impression.
            </p>
          </div>
          <div className="service-image">
            <img src={hr3} alt="Service" />
          </div>
        </div>

        <div className="service">
          <div className="service-content">
            <h2>Career Resources</h2>
            <p>
              Access our library of career resources, including articles, videos, and webinars. Our resources cover a wide range of topics, including job search strategies, career development, and salary negotiation.
            </p>
          </div>
          <div className="service-image">
            <img src={hr4} alt="Service" />
          </div>
        </div>

        <div className="service reverse">
          <div className="service-content">
            <h2>Networking Events</h2>
            <p>
              Join our networking events and meet other job seekers, recruiters, and industry experts. Our events offer opportunities to learn, connect, and expand your professional network.
            </p>
          </div>
          <div className="service-image">
            <img src={hr5} alt="Service" />
          </div>
        </div>

        <div className="service">
          <div className="service-content">
            <h2>Job Application Tracker</h2>
            <p>
              Track your job applications with our job application tracker tool. We help you keep track of the jobs you've applied to, the status of your applications, and any follow-up actions you need to take.
            </p>
          </div>
          <div className="service-image">
            <img src={hr6} alt="Service" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hrconsultancy;
