import React from "react";
import styles from "./HeroPage.module.css"
function HeroPage() {
  return (
    <div>
      <section className="h-screen w-screen relative">
        <div>
          <div className=" w-screen h-screen bg-[url(/images/banner.jpg)] bg-cover bg-no-repeat relative">
            <div className="absolute left-12 bottom-1">
              <div className="h-auto w-auto mb-5 ">
                <button className={`${styles.galleryButton}  text-center font-medium text-sm  rounded-xl pt-4 pb-4 pl-14 pr-14 hover:bg-black hover:text-white duration-300 `}>
                  DOWNLOAD BROCHURE
                </button>
              </div>
              <div className="h-auto w-auto text-center">
                <button className={`${styles.galleryButton} w-full text-centerfont-medium text-sm rounded-xl p-4 hover:bg-black hover:text-white duration-300`}>
                  REGISTER NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HeroPage;
