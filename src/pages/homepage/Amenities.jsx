import React, { useState } from "react";
import styles from "./Amenities.module.css";
import Modal from "./Modal";

function Amenities() {
  const [isModalOpen, setModalOpen] = useState(false);
  return (
    <div className="mx-3 lg:mx-20 md:mx-15 sm:mx-10 mt-4 lg:mt-3 md:mt-3 sm:mt-3 ">
      <div className="py-4 lg:py-6 md:py-5 sm:py-4">
        <div className="flex justify-center mb-4 lg:mb-10 md:mb-6 sm:mb-4 ">
          <h2
            className={`${styles.color} text-lg lg:text-3xl md:text-3xl sm:text-2xl ${styles.font} `}
          >
            AMENITIES
          </h2>
        </div>

        <div className="">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <img
                src="/images/Basket-ball-court.png"
                alt="Image 1"
                className="w-full h-56 object-cover "
              />
              <p className={`text-center mt-2 text-gray-600`}>
                BASKETBALL COURT
              </p>
            </div>
            <div>
              <img
                src="/images/SWIMMING-POOLS.png"
                alt="Image 2"
                className="w-full h-56 object-cover "
              />
              <p className="text-center mt-2 text-gray-600">SWIMMING POOL</p>
            </div>
            <div>
              <img
                src="/images/JOGGING-TRACK.png"
                alt="Image 3"
                className="w-full h-56 object-cover "
              />
              <p className="text-center mt-2 text-gray-600">JOGGING TRACK</p>
            </div>

            <div>
              <img
                src="/images/GYMNASIUM.png"
                alt="Image 4"
                className="w-full h-56 object-cover "
              />
              <p className="text-center mt-2 text-gray-600">GYMNASIUM</p>
            </div>
            <div>
              <img
                src="/images/BILLIARDS-TABLE.png"
                alt="Image 5"
                className="w-full h-56 object-cover "
              />
              <p className="text-center mt-2 text-gray-600">BILLIARD TABLE</p>
            </div>
            <div>
              <img
                src="/images/TENNIS-COURT.png"
                alt="Image 6"
                className="w-full h-56 object-cover "
              />
              <p className="text-center mt-2 text-gray-600">TENNIS COURT</p>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`flex justify-center sm:justify-center lg:justify-end h-auto w-auto lg:mt-3 sm:mt-3 mt-1`}
      >
        <button
          onClick={() => setModalOpen(true)}
          className={`${styles.aminitiesButton} w-full sm:w-52 lg:w-48 px-4 py-3 text-sm font-medium rounded-xl duration-300 md:px-3 md:py-3 md:text-base lg:px-2 lg:py-3 lg:text-sm cursor-pointer`}
        >
          DISCOVER MORE
        </button>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
export default Amenities;
