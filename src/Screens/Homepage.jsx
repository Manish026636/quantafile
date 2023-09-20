import React from 'react'
import Navbar from '../Components/Homepage/Navbar';
import Hero from '../Components/Homepage/Hero';
import SectionOne from '../Components/Homepage/Divs/SectionOne';
import SectionTwo from '../Components/Homepage/Divs/SectionTwo';
import WhiteRedDashboard from '../Components/Homepage/Divs/WhiteRed/WhiteRedDashboard';
import WhiteBlueDashboard from '../Components/Homepage/Divs/WhiteBlue/WhiteBlueDashboard';
import SectionThree from '../Components/Homepage/Divs/SectionThree';
import WhiteOrangeDashboard from '../Components/Homepage/Divs/WhiteOrange/WhiteOrangeDashboard';
import SectionFour from '../Components/Homepage/Divs/SectionFour';
import WhiteWhiteDashboard from '../Components/Homepage/Divs/WhiteWhite/WhiteWhiteDashboard';
import SectionFive from '../Components/Homepage/Divs/SectionFive';
import SectionSix from '../Components/Homepage/Divs/SectionSix';
import SectionSeven from '../Components/Homepage/Divs/SectionSeven';
import SectionEight from '../Components/Homepage/Divs/SectionEight';
import SectionNine from '../Components/Homepage/Divs/SectionNine';
import Footer from '../Components/Homepage/Footer';
const Homepage = () => {
  return (
    <div>
      <Navbar />
     
      <Hero />
      <SectionOne/>
      <WhiteRedDashboard/>
      <SectionTwo/>
      <WhiteBlueDashboard/>
      <SectionThree/>
      <WhiteOrangeDashboard/>
      <SectionFour/>
      <WhiteWhiteDashboard/>
      <SectionFive/>
      <SectionSix/>
      <SectionSeven/>
      <SectionEight/>
      <SectionNine/>
      <Footer/>
     
    </div>
  )
}

export default Homepage
