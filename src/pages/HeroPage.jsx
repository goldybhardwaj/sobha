import React from "react";
import styles from "./HeroPage.module.css";

function HeroPage() {
  return (
    <div>
      <div className="min-h-screen w-full">
        <div
          className={` w-auto min-h-screen bg-[url('/images/banner.jpg')] bg-cover bg-center bg-no-repeat relative`}
        >
          <div className="lg:absolute lg:left-4  lg:bottom-4 flex flex-col gap-4 sm:gap-6 md:justify-center sm:justify-center w-full lg:w-64 md:w-60 sm:w-52 " >
                    <button
                      className={`${styles.galleryButton} w-auto sm:w-auto md:w-auto lg:w-64 px-3 py-3 rounded-xl duration-300 md:px-3 md:py-3 lg:px-4 lg:py-3 lg:text-lg md:text-lg sm:text-sm text-sm mx-4 lg:mx-0 md:mx-0 sm:mx-0`}
                    >
                      DOWNLOAD BROCHURE
                    </button>
                  
                          <button
                            className={`${styles.galleryButton} w-full sm:w-52 lg:w-64 px-3 py-3 text-sm rounded-xl duration-300 md:px-3 md:py-3 md:text-base lg:px-6 lg:py-3 lg:text-lg mx-3 lg:mx-0 md:mx-0 sm:mx-0`}
                          >
                           REGISTER NOW
                          </button>
                       
            {/* <button
              className={`${styles.galleryButton} font-medium text-sm sm:text-base rounded-xl px-6 py-3 sm:px-10 sm:py-4 hover:bg-black hover:text-white duration-300`}
            >
              DOWNLOAD BROCHURE
            </button>
            <button
              className={`${styles.galleryButton} font-medium text-sm sm:text-base rounded-xl px-6 py-3 sm:px-10 sm:py-4 hover:bg-black hover:text-white duration-300`}
            >
              REGISTER NOW
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}
export default HeroPage;