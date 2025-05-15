import React from "react";
import styles from "./Gallery.module.css";

function Gallery() {
  return (
    <div>
      <section className="h-auto w-auto mt-10">
        <div className="flex justify-center mb-10">
          <h2 className={`${styles.color} text-3xl ${styles.font} `}>
            GALLERY
          </h2>
        </div>

        <div className="mx-20 mb-6 ">
          <div className="flex mb-6">
            <div className="px-3">
              <img
                className=""
                src="/images/gallery_img1.jpg"
                alt="gallery image"
              />
            </div>
            <div className="px-3">
              <img
                className=""
                src="/images/gallery_img2.jpg"
                alt="gallery image"
              />
            </div>
          </div>

          <div className="px-3 mb-7">
            <img
              className=""
              src="/images/gallery_img3.jpg"
              alt="gallery image"
            />
          </div>

          <div class="grid grid-cols-2 gap-7 h-screen px-3">
            <div class="row-span-2">
              <img
                src="/images/gallery_img4.jpg"
                alt="Large Image"
                class="w-full h-full object-cover "
              />
            </div>

            <div>
              <img
                src="/images/gallery_img5.jpg"
                alt="Small Image 1"
                class="w-full h-full object-cover "
              />
            </div>
            <div>
              <img
                src="/images/gallery_img6.jpg"
                alt="Small Image 2"
                class="w-full h-full object-cover "
              />
            </div>
          </div>
        </div>

        <div className={`${styles.margin} flex justify-end`}>
          <button className={`${styles.galleryButton} text-center font-medium text-sm  rounded-xl pt-4 pb-4 pl-14 pr-14 hover:bg-black hover:text-white duration-300`}>
            DOWNLOAD RENDER
          </button>
        </div>
      </section>
    </div>
  );
}

export default Gallery;
