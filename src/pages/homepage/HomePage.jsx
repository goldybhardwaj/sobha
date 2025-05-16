import React from "react";
import HeroPage from "./HeroPage";
import Gallery from "./Gallery";
import RegisterNow from "./RegisterNow";
import Video from "./Video";
import Footer from "./Footer";
import PriceTable from "./PriceTable";
import About from "./About";
import Amenities from "./Amenities";

function HomePage() {
  return (
    <>
      <HeroPage />
       <About/>
      <Gallery />
      <Amenities/>
      <Video />
      <PriceTable />
      <RegisterNow />
      <Footer />
    </>
  );
}

export default HomePage;
