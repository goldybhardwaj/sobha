import React from "react";
import styles from "./HeroPage.module.css";

function HeroPage() {
  return (
    <div>
      <div className="min-h-screen w-full relative ">
        <div
          className={`w-full min-h-screen bg-[url('/images/banner.jpg')] bg-cover bg-center bg-no-repeat relative ${styles.heroBackground}`}
        >
          <div className="absolute left-4 sm:left-50 md:left-12 xs:left-76 bottom-4 sm:bottom-8 md:bottom-8 flex flex-col gap-4 sm:gap-6">
            <button
              className={`${styles.galleryButton} font-medium text-sm sm:text-base rounded-xl px-6 py-3 sm:px-10 sm:py-4 hover:bg-black hover:text-white duration-300`}
            >
              DOWNLOAD BROCHURE
            </button>
            <button
              className={`${styles.galleryButton} font-medium text-sm sm:text-base rounded-xl px-6 py-3 sm:px-10 sm:py-4 hover:bg-black hover:text-white duration-300`}
            >
              REGISTER NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HeroPage;