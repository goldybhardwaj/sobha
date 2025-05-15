import React from "react";
import styles from "./Video.module.css";

function Video() {
  return (
    <section className="h-auto w-auto">
      <div className="mx-20">
        <div className="flex justify-center mb-10 ">
          <h2 className={`${styles.color} text-3xl ${styles.font} `}>Video</h2>
        </div>
        
        <div className="container mx-auto px-4 py-8">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {/* <!-- Video Section 1 --> */}
    <div className="relative group">
    <div className="w-full aspect-video">
        <iframe
          className="w-full h-full rounded-lg"
          src="https://www.youtube.com/embed/VIDEO_ID_1"
          title="Video 1"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-30 rounded-lg transition-all duration-300 group-hover:bg-opacity-50">
        <h2
          className="text-white text-2xl font-bold mb-4 transition-all duration-300 group-hover:text-lg"
        >
          SAMPLE APARTMENT
        </h2>
        <p className="text-white text-sm mb-4">SOBHA SECTOR 36 - AT SECTOR 36, GREATER NOIDA</p>
        <button
          className="w-12 h-12 bg-white rounded-full flex items-center justify-center transition-all duration-300 group-hover:w-16 group-hover:h-16"
        >
          <svg
            className="w-6 h-6 text-black group-hover:w-8 group-hover:h-8"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </button>
      </div>
    </div>
    {/* <!-- Video Section 2 --> */}
    <div className="relative group">
    <div className="w-full aspect-video">
        <iframe
          className="w-full h-full rounded-lg"
          src="https://www.youtube.com/embed/VIDEO_ID_1"
          title="Video 1"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-30 rounded-lg transition-all duration-300 group-hover:bg-opacity-50">
        <h2
          className="text-white text-2xl font-bold mb-4 transition-all duration-300 group-hover:text-lg"
        >
          VIRTUAL SITE TOUR
        </h2>
        <p className="text-white text-sm mb-4">SOBHA SECTOR 36 - AT SECTOR 36, GREATER NOIDA</p>
        <button
          className="w-12 h-12 bg-white rounded-full flex items-center justify-center transition-all duration-300 group-hover:w-16 group-hover:h-16"
        >
          <svg
            className="w-6 h-6 text-black group-hover:w-8 group-hover:h-8"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</div>

        {/* <div className="container mx-auto px-4 py-8">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {/* <!-- Video Section 1 --> */}
    {/* <div className="flex flex-col items-center">
      <div className="w-full aspect-video">
        <iframe
          className="w-full h-full rounded-lg"
          src="https://www.youtube.com/embed/VIDEO_ID_1"
          title="Video 1"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
      <p className="mt-4 text-center">Description for Video 1.</p>
    </div>
//     {/* <!-- Video Section 2 --> */}
{/* //     <div className="flex flex-col items-center">
//       <div className="w-full aspect-video">
//         <iframe */}
{/* //           className="w-full h-full rounded-lg"
//           src="https://www.youtube.com/embed/VIDEO_ID_2"
//           title="Video 2"
//           frameborder="0"
//           allowfullscreen
//         ></iframe>
//       </div> */}
{/* //       <p className="mt-4 text-center">Description for Video 2.</p>
//     </div>
//   </div> */} 
{/* // </div> */} 
      </div>
    </section>
  );
}

export default Video;
