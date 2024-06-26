import React from 'react';
import './Home.scss';
import img1 from '../../Images/Logo/WhatsApp Image 2024-06-25 at 23.19.05_1778b772.jpg';
import Home1 from './Home1/Home1';
import Abouthome from './AboutHome/Abouthome';
import SliderComponant from './Slider/Slider';

const Home = () => {
  return (
    <>
    
   <div>
    <Home1/>
    <Abouthome/>
    <SliderComponant/>
   </div>

  
    </>
  );
}

export default Home;
