import React from "react";
import styles from "./About.module.css";

function About() {
  return (
    <div className="h-auto">
      <div className="py-10 px-4 sm:px-6 lg:px-5">
        {/* Title Section */}
        <div className="text-center">
         <div className="flex justify-center mb-4 lg:mb-6 md:mb-4 sm:mb-4 ">
                   <h2
                     className={`${styles.color} text-lg lg:text-3xl md:text-3xl sm:text-2xl ${styles.font} `}
                   >
                   ABOUT SOBHA
                   </h2>
                 </div>
          <p
            className={`${styles.color} ${styles.font} flex justify-center text-3xl mb-5`}
          >
            At Sector 36, Greater Noida
          </p>
        </div>

        {/* Description Section */}
        <div className="max-w-6xl mx-auto">
          <p
            className={`${styles.color} ${styles.fontParagraph} leading-relaxed text-justify mb-8 px-4 sm:px-8`}
          >
            Sobha Group is bringing its world-class residential experience to
            Sector 36, Greater Noida, offering luxurious 2, 3 & 4 BHK
            apartments. Strategically located, this premium development provides
            seamless connectivity to Delhi, Noida, and NCR, making it an ideal
            choice for homebuyers looking for convenience and sophistication.
            Designed with modern amenities, the project features a
            state-of-the-art clubhouse, gymnasium, swimming pool, landscaped
            gardens, jogging tracks, and children’s play areas, ensuring a
            balanced and fulfilling lifestyle. With a strong focus on
            eco-friendly living, the development incorporates sustainable
            infrastructure and lush green spaces for a healthier and more serene
            environment. Additionally, residents will benefit from proximity to
            the best schools, hospitals, shopping malls, and entertainment hubs,
            offering the perfect blend of comfort and accessibility. The
            location adds immense value, being just 5 minutes from Yamuna
            Expressway, 10 minutes from Pari Chowk, and 30 minutes from Noida
            International Airport, ensuring seamless travel. For a limited time,
            homebuyers can avail of exclusive pre-launch offers, spot booking
            discounts, and special deals to secure their dream home at the best
            price.
          </p>
        </div>

        {/* Stats Section */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-6">
            <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
              <p className="text-gray-600 text-lg lg:text-2xl sm:text-base uppercase">
                25 MILLION SQ.M.
              </p>
              <p
                className={`${styles.color} ${styles.fontCard} text-lg sm:text-2xl mt-2 lg:text-3xl md:text-3xl px-0 lg:px-5 md:px-8`}
              >
                of  Project Delivered
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
              <p className="text-gray-600 text-lg lg:text-2xl sm:text-base uppercase">
                24 MILLION SQ.M.
              </p>
              <p
                className={`${styles.color} ${styles.fontCard} text-lg sm:text-2xl mt-2 lg:text-3xl md:text-3xl`}
              >
                Of Under Development
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
              <p className="text-gray-600 text-lg lg:text-2xl sm:text-base uppercase">
                68 years
              </p>
              <p
                className={`${styles.color} ${styles.fontCard} text-lg sm:text-2xl mt-2 lg:text-3xl md:text-3xl`}
              >
                Of Expertise in Residential
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
