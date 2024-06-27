import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Slider.scss';
import img01 from '../../../Images/Logo/WhatsApp Image 2024-06-25 at 23.19.05_1778b772.jpg';
import img02 from '../../../Images/Logo/WhatsApp Image 2024-06-25 at 23.19.05_1778b772.jpg';
import img03 from '../../../Images/Logo/WhatsApp Image 2024-06-25 at 23.19.05_1778b772.jpg';
import img04 from '../../../Images/Logo/WhatsApp Image 2024-06-25 at 23.19.05_1778b772.jpg';
import img05 from '../../../Images/Logo/WhatsApp Image 2024-06-25 at 23.19.05_1778b772.jpg';

const SliderComponant = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    customPaging: (i) => (
      <img src={slidesData[i].image} alt={`Slide ${i}`} className="slick-thumbnail" />
    ),
    dotsClass: "slick-dots slick-thumb"
  };

  const slidesData = [
    { id: 1, image: img01 },
    { id: 2, image: img02 },
    { id: 3, image: img03 },
    { id: 4, image: img04 },
    { id: 5, image: img05 }
  ];

  return (
    <>
    <div className="slider-container">
      <h2>OUR NOAH WORKFORCE DEVELOPMENT SYSTEM SUPERSTARS GALLERY</h2>
      <Slider {...settings}>
        {slidesData.map(slide => (
          <div key={slide.id} className="slide">
            <img src={slide.image} alt={`Slide ${slide.id}`} />
          </div>
        ))}
      </Slider>
    </div>

    <div className="quote-container">
      <div className="quote-content">
        <blockquote>
          "Beating the competition is relatively easy. Beating yourself is a never-ending commitment."
        </blockquote>
        <p>- Phil Knight</p>
      </div>
      <div className="quote-image">
        <img src={img01} alt="Writing" />
      </div>
    </div>


    </>

  )
}

export default SliderComponant;
