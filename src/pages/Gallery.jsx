import React from "react";
import styles from "./Gallery.module.css";

function Gallery() {
  return (
    <div className="mx-20 mt-10">
      <div className="h-auto w-auto  lg:sm-4 sm:py-2">
        <div className="flex justify-center mb-10">
          <h2 className={`${styles.color} text-3xl ${styles.font} `}>
            GALLERY
          </h2>
        </div>

        <div className=" ">
          <div className="container mx-auto p-4">
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

          <div className="container mx-auto p-4">
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
      <div className={`lg:mt-6 sm:mt-3 lg:text-end sm:text-center`}>
          <button
            className={`${styles.galleryButton} text-center font-medium text-sm  rounded-xl pt-4 pb-4 pl-14 pr-14 duration-300`}
          >
            DOWNLOAD RENDER
          </button>
        </div>
    </div>
  );
}

export default Gallery;
