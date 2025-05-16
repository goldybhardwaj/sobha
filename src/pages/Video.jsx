// import React,{useState,useRef} from "react";
// import styles from "./Video.module.css";

// function Video() {
//   const [isPlaying, setIsPlaying] = useState(false);
//   const videoRef = useRef(null);

//   const handlePlay = () => {
//     setIsPlaying(true);
//     videoRef.current.play();
//   };
//   return (
//     <div className=" w-full px-6 lg:px-20 md:px-15 sm:px-10 my-3 lg:my-8 md:my-6 sm:my-6 ">
//     <div className="flex justify-center mb-8 lg:mb-8 md:mb-8 sm:mb-8 ">
//              <h2
//                className={`${styles.color} text-lg lg:text-3xl md:text-3xl sm:text-2xl ${styles.font} `}
//              >
//               VIDEO
//              </h2>
//            </div>

//     <div className="relative">
//       <video
//         ref={videoRef}
//         className="w-full h-auto rounded-lg shadow-lg"
//         controls={isPlaying}
//         poster="/images/gallery_img1.jpg"
//       >
//         <source src="https://youtu.be/vohdNgsvhy4?t=41" type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>
//       {/* Thumbnail Overlay with Play Button */}
//       {!isPlaying && (
//         <div
//           className="absolute inset-0 flex items-center justify-center cursor-pointer"
//           onClick={handlePlay}
//         >
//           <button className="bg-white bg-opacity-80 rounded-full p-4 hover:bg-opacity-100 transition">
//             <svg
//               className="w-12 h-12 text-gray-800"
//               fill="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path d="M8 5v14l11-7z" />
//             </svg>
//           </button>
//         </div>
//       )}
//     </div>
//   </div>
//   );
// }

// export default Video;

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
