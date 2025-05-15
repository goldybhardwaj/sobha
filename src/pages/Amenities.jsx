import React from "react";
import styles from "./Amenities.module.css";

function Amenities() {
  return (

    <section>

        <div className="flex justify-center mb-10">
        <h2 className={`${styles.color} text-3xl ${styles.font} `}>
             AMENITIES
         </h2>
        </div>

        <div className="mx-20 pl-1">

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
    
            <div>
                <img src="/images/Basket-ball-court.png" alt="Image 1" className="w-full h-56 object-cover "/>
                <p className={`text-center mt-2 text-gray-600`}>BASKETBALL COURT</p>
            </div>
            <div >
                <img src="/images/SWIMMING-POOLS.png" alt="Image 2" className="w-full h-56 object-cover "/>
                <p className="text-center mt-2 text-gray-600">SWIMMING POOL</p>
            </div>
            <div>
                <img src="/images/JOGGING-TRACK.png" alt="Image 3" className="w-full h-56 object-cover "/>
                <p className="text-center mt-2 text-gray-600">JOGGING TRACK</p>
            </div>
         
            <div >
                <img src="/images/GYMNASIUM.png" alt="Image 4" className="w-full h-56 object-cover "/>
                <p className="text-center mt-2 text-gray-600">GYMNASIUM</p>
            </div>
            <div >
                <img src="/images/BILLIARDS-TABLE.png" alt="Image 5" className="w-full h-56 object-cover "/>
                <p className="text-center mt-2 text-gray-600">BILLIARD TABLE</p>
            </div>
            <div >
                <img src="/images/TENNIS-COURT.png" alt="Image 6" className="w-full h-56 object-cover "/>
                <p className="text-center mt-2 text-gray-600">TENNIS COURT</p>
            </div>
        </div>

         <div className="flex justify-end mt-7">
         <button className={`${styles.galleryButton} text-center  font-medium text-sm  rounded-xl pt-4 pb-4 pl-14 pr-14 hover:bg-black hover:text-white duration-300`}>
            DISCOVER MORE
          </button>
          </div>
    </div>
    </section>
   
  );
}
export default Amenities;
