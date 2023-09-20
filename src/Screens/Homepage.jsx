import React from 'react'
import Navbar from '../Components/Homepage/Navbar';
import Hero from '../Components/Homepage/Hero';
import SectionOne from '../Components/Homepage/Divs/SectionOne';
import WhiteRedDashboard from '../Components/Homepage/Divs/WhiteRed/WhiteRedDashboard';
const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <SectionOne/>
      <WhiteRedDashboard/>
     
    </div>
  )
}

export default Homepage
