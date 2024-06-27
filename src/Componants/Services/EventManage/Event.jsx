import React from 'react';
import './Eventmanage.scss';
import image from '../../../Images/Logo/newww.jpg';

const Eventmanage = () => {
  return (
    <>
    <div className='eventdiv'>

      <h1>EVENT MANAGEMENT</h1>

    </div>
      <div className="events-section">
        <div className="events-image">
          <img src={image} alt="Event" />
        </div>
        <div className="events-content">
          <p>
            AHR’s events arm provides full support to your business’ promotional and PR needs by extending our experience and skills in event management. From sales promotions, road shows, product launches, exhibitions, trade shows, sports events, musical soirees and many others, we create unforgettable and immaculate experiences.
          </p>
          <p>
            Our team of multi-talented professionals have the most creative and dynamic solutions to organise just the right kind of events for your company’s promotional activities. We think out-of-the-box and our events are nothing short of spectacular, getting you the desired results and mileage.
          </p>
        </div>
      </div>

      <div className="events-section reverse">
        <div className="events-content">
          <p>
            Classy soirees to black-tie events, treasure-hunts, outbound training camps for employees to picnics and ‘Internal Awards’ ceremonies, we can also customise and provide you with creative ideas and solutions to suit your budget and office culture.
          </p>
          <p>
            With our overarching experience in events, you can sit back and enjoy your events and reap the benefits. At Acentering we ensure the details are planned to a T and there is no room for errors.
          </p>
        </div>
        <div className="events-image">
          <img src={image} alt="Event" />
        </div>
      </div>
    </>
  );
}

export default Eventmanage;
