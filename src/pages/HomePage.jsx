import React from 'react'
import HeroPage from './HeroPage';
import About from './About';
import Gallery from './Gallery';
import Amenities from './Amenities';
import RegisterNow from './RegisterNow';
import Video from './Video';
import Footer from './Footer';
import PriceTable from './PriceTable';


function HomePage() {
  return (
    <>
      <HeroPage/>
      <About/>
      <Gallery/>
      <Video/>
      <Amenities/>
      <PriceTable/>
      <RegisterNow/>
      
      <Footer/>
    </>
  )
}

export default HomePage;
