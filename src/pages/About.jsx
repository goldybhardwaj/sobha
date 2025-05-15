import React from 'react'
import styles from './About.module.css'

function About() {
  return (
    <div>
       <section className="h-auto w-auto mt-16">
              <div className="flex justify-center">
                <p className={`${styles.color} flex text-xl mb-1`}>
                Sobha Sector 36
                </p>
              </div>
              <div className="flex justify-center">
                <p className={`${styles.color} flex text-3xl mb-5`}>
                  {" "}
                  At Sector 36, Greater Noida
                </p>
              </div>
      
              <div className="flex justify-center w-full">
                <p className={`${styles.color} flex leading-tight text-justify text-lg mb-5 text-blue-500  px-28 `}>
                  {" "}
                  Sobha Group is bringing its world-class residential experience to Sector 36, Greater Noida, offering luxurious 2, 3 & 4 BHK apartments. Strategically located, this premium development provides seamless connectivity to Delhi, Noida, and NCR, making it an ideal choice for homebuyers looking for convenience and sophistication. Designed with modern amenities, the project features a state-of-the-art clubhouse, gymnasium, swimming pool, landscaped gardens, jogging tracks, and children’s play areas, ensuring a balanced and fulfilling lifestyle. With a strong focus on eco-friendly living, the development incorporates sustainable infrastructure and lush green spaces for a healthier and more serene environment. Additionally, residents will benefit from proximity to the best schools, hospitals, shopping malls, and entertainment hubs, offering the perfect blend of comfort and accessibility. The location adds immense value, being just 5 minutes from Yamuna Expressway, 10 minutes from Pari Chowk, and 30 minutes from Noida International Airport, ensuring seamless travel. For a limited time, homebuyers can avail of exclusive pre-launch offers, spot booking discounts, and special deals to secure their dream home at the best price.
                </p>
              </div>
      
{/*       
             <div className="flex justify-around mt-4 ">
                <div className="w-80 shadow-[0_4px_4px_0_rgba(0,0,0,0.1),0_2px_4px_2px_rgba(0,0,0,0.1)] rounded-2xl text-center p-10">
                 <div className="flex">
                  <span className="text-5xl font-600   text-gray-500">25</span>
                  <span className="">MILLIION</span>
                  <span className="">SQ.M.</span>
                      <p className={`${styles.color} mt-2`}>of projects delivered</p>
                 </div>
                </div>
                <div className="w-80 shadow-[0_4px_4px_0_rgba(0,0,0,0.1),0_2px_4px_2px_rgba(0,0,0,0.1)] rounded-2xl text-center p-10">
                  <p>HANDOVER</p>
                  <p className="text-4xl pt-2 font-medium">2029</p>
                </div>
                <div className="w-80 shadow-[0_4px_4px_0_rgba(0,0,0,0.1),0_2px_4px_2px_rgba(0,0,0,0.1)] rounded-2xl  text-center p-10">
                  <p>PAYMENT PLAN</p>
                  <p className="text-4xl pt-2 font-medium">75/25</p>
                </div>
              </div> */}
              <div className="flex justify-around items-center  ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-6 max-w-10xl  h-44 ">
        <div className="w-80 bg-white rounded-4xl shadow-lg p-6 text-center">
            <p className="text-black-500 text-lg uppercase">25 MILLION SQ.M.</p>
            <p className={`${styles.color} text-2xl font-bold mt-2`}>of project Delivered</p>
        </div>

     
        <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <p className="text-gray-500 text-sm uppercase">24 MILLION SQ.M.</p>
            <p className={`${styles.color} text-2xl font-bold mt-2`}>Of Under Development</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <p className="text-gray-500 text-sm uppercase">68 years</p>
            <p className={`${styles.color} text-2xl font-bold mt-2`}>Of Expertise in Residential</p>
        </div>
    </div>
</div>
            </section>
    </div>
  )
}

export default About
