import React, { useState } from "react";
import styles from "./HeroPage.module.css";
import Modal from "./Modal";
function HeroPage() {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <div className="w-full h-auto lg:h-screen md:h-80 sm:h-60">
        <div
          className={` w-auto h-56 lg:h-screen md:h-80 sm:h-60 bg-[url('/images/hero1.png')] bg-cover bg-center bg-no-repeat relative`}
        >
          <div
            className="absolute flex flex-col  space-y-4 
                lg:left-40 md:left-40 md:bottom:4 lg:bottom-2 
                bottom-4 left-1/2 transform -translate-x-1/2 
                lg:transform-none"
          >
            <button
              onClick={() => setModalOpen(true)}
              className={`${styles.heroButton} w-48 sm:w-auto md:w-auto lg:w-64 px-1 py-3 rounded-xl duration-300 md:px-3 md:py-3 lg:px-4 lg:py-3 lg:text-lg md:text-lg sm:text-sm text-sm mx-4 lg:mx-0 md:mx-0 sm:mx-0 cursor-pointer`}
            >
              DOWNLOAD BROCHURE
            </button>

            <button
              onClick={() => setModalOpen(true)}
              className={`${styles.heroButton} w-48 sm:w-auto md:w-auto lg:w-64 px-3 py-3 rounded-xl duration-300 md:px-3 md:py-3 lg:px-4 lg:py-3 lg:text-lg md:text-lg sm:text-sm text-sm mx-4 lg:mx-0 md:mx-0 sm:mx-0 cursor-pointer`}
            >
              REGISTER NOW
            </button>
          </div>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
export default HeroPage;
