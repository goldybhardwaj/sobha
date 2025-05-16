import React from "react";
import styles from "./Video.module.css";


function Video() {
  return (
    <div>
       <div className="flex mt-5 lg:mt-10 md:mt-10 sm:mt-10 justify-center mb-6 lg:mb-8 md:mb-8 sm:mb-8 ">
             <h2
               className={`${styles.color} text-lg lg:text-3xl md:text-3xl sm:text-2xl ${styles.font} `}
             >
              VIDEO
             </h2>
           </div>
    <div className=" h-auto lg:h-screen md:h-screen sm:h-screen w-auto  px-6 lg:px-20 md:px-15 
    sm:px-10 my-3 lg:my-8 md:my-6 sm:my-6">
      
      <iframe className="w-full h-full" src="/Videos/houseTour.mp4"></iframe>
    </div>
    </div>
  );
}

export default Video;
