import React from 'react'
// import Abouthome from '../Home/AboutHome/Abouthome'
import AboutSection from './AboutSection/Aboutsection'
import Newabout from './NewAbout/Newabout'
import Vision from './Vision/Vision'

const About = () => {
  return (
    <div>
      <Newabout/>
      {/* <Abouthome/> */}
      <AboutSection/>
      <Vision/>
    </div>
  )
}

export default About
