import React from "react";
import styles from "./Gallery.module.css";

function Gallery() {
  return (
    <div className="mx-3 lg:mx-20 md:mx-15 sm:mx-10 pb-2">
      <div className="h-auto w-auto py-4 lg:sm-4 sm:py-4">
        <div className="flex justify-center ">
          <h2
            className={`${styles.color} text-lg lg:text-3xl md:text-3xl sm:text-2xl ${styles.font} `}
          >
            GALLERY
          </h2>
        </div>

        <div className=" ">
          <div className="mb-5 lg:mb-6 md:mb-4 sm:mb-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* <!-- First Image --> */}
              <div className="w-full">
                <img
                  src="/images/gallery_img1.jpg"
                  alt="Living Room 1"
                  className="w-full h-auto "
                />
              </div>
              {/* <!-- Second Image --> */}
              <div className="w-full">
                <img
                  src="/images/gallery_img2.jpg"
                  alt="Living Room 2"
                  className="w-full h-auto  "
                />
              </div>
            </div>
          </div>

          <div className="container mb-5 lg:mb-6 md:mb-4 sm:mb-2">
            <div className="grid grid-cols-1 gap-4">
              <div className="w-full">
                <img
                  src="/images/gallery_img3.jpg"
                  alt="Living Room"
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>

          <div className="mb-5 lg:mb-6 md:mb-4 sm:mb-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
              {/* <!-- Left Image (Full Height on Medium Screens and Above) --> */}
              <div className="md:row-span-2">
                <img
                  src="/images/gallery_img4.jpg"
                  alt="Left Image"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* <!-- Right Side: Two Images Stacked --> */}
              <div>
                <img
                  src="/images/gallery_img5.jpg"
                  alt="Right Top Image"
                  className="w-full h-64 object-cover"
                />
              </div>
              <div>
                <img
                  src="/images/gallery_img6.jpg"
                  alt="Right Bottom Image"
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`flex justify-center sm:justify-center lg:justify-end h-auto w-auto lg:mt-3 sm:mt-3 mt-1`}
      >
        <button
          className={`${styles.galleryButton} w-full sm:w-52 lg:w-48 px-4 py-3 text-sm font-medium rounded-xl duration-300 md:px-3 md:py-3 md:text-base lg:px-2 lg:py-3 lg:text-sm`}
        >
          DOWNLOAD RENDERS
        </button>
      </div>
    </div>
  );
}

export default Gallery;
{
  /* <div className="flex text-center sm:text-center lg:text-end h-auto bg-gray-100">
<button className="w-32 sm:w-40 lg:w-60  py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200 md:px-6 md:py-3 md:text-base lg:px-8 lg:py-4 lg:text-lg">
    Click Me
</button>
</div> */
}
