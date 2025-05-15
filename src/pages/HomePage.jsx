import React from 'react'
import HeroPage from './HeroPage';
import About from './About';
import Gallery from './Gallery';
import Amenities from './Amenities';
import RegisterNow from './RegisterNow';
import Video from './Video';
import Footer from './Footer';

function HomePage() {
  return (
    <div>
      <HeroPage/>
      <About/>
      <Gallery/>
      <Amenities/>
      <RegisterNow/>
      {/* <Video/> */}
      <Footer/>
    </div>
  )
}

export default HomePage;
