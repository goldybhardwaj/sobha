import React from 'react'
import styles from "./PriceTable.module.css"
function PriceTable() {
  return (
    <div>
              <div className="flex justify-center   mt-5 lg:mt-4 md:mt-8 sm:mt-8 mb-1 lg:mb-4 md:mb-2 sm:mb-1 ">
                <h2
                  className={`${styles.color} text-2xl lg:text-3xl md:text-3xl sm:text-2xl ${styles.font} `}
                >
                 PRICE
                </h2>
              </div>
    <div className="mx-2 sm:mx-4 md:mx-8 lg:mx-16 xl:mx-20">
  <div className="h-auto w-full py-4 sm:py-6 md:py-8 lg:py-10 bg-gray-50">
    <div className="container mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse shadow-lg rounded-lg text-xs sm:text-sm md:text-base bg-white">
            <thead>
              <tr className="text-gray-700 bg-gray-100">
                <th className="py-2 px-2 sm:py-3 sm:px-4 text-left font-semibold whitespace-nowrap">Type</th>
                <th className="py-2 px-2 sm:py-3 sm:px-4 text-left font-semibold whitespace-nowrap">Saleable Area</th>
                <th className="py-2 px-2 sm:py-3 sm:px-4 text-left font-semibold whitespace-nowrap">Price</th>
                <th className="py-2 px-2 sm:py-3 sm:px-4 text-left font-semibold"></th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="py-2 px-2 sm:py-3 sm:px-4">2 BHK</td>
                <td className="py-2 px-2 sm:py-3 sm:px-4">1200 Sq.Ft.</td>
                <td className="py-2 px-2 sm:py-3 sm:px-4">₹ 1.5 Cr* Onwards</td>
                <td className="py-2 px-2 sm:py-3 sm:px-4">
                  <button className={`${styles.priceButton} py-1.5 px-3 sm:py-2 sm:px-4 text-xs sm:text-sm rounded-lg transition-colors duration-200 whitespace-nowrap cursor-pointer`}>
                    Request For Price Breakup
                  </button>
                </td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="py-2 px-2 sm:py-3 sm:px-4">3 BHK+2T+3T</td>
                <td className="py-2 px-2 sm:py-3 sm:px-4">1500-1800 Sq.Ft.</td>
                <td className="py-2 px-2 sm:py-3 sm:px-4">₹ 1.87-2.25 Cr* Onwards</td>
                <td className="py-2 px-2 sm:py-3 sm:px-4">
                  <button className={`${styles.priceButton} py-1.5 px-3 sm:py-2 sm:px-4 text-xs sm:text-sm rounded-lg transition-colors duration-200 whitespace-nowrap cursor-pointer`}>
                    Request For Price Breakup
                  </button>
                </td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="py-2 px-2 sm:py-3 sm:px-4">4 BHK+4T</td>
                <td className="py-2 px-2 sm:py-3 sm:px-4">2200 Sq.Ft.</td>
                <td className="py-2 px-2 sm:py-3 sm:px-4">₹ 2.75 Cr* Onwards</td>
                <td className="py-2 px-2 sm:py-3 sm:px-4">
                  <button className={`${styles.priceButton} py-1.5 px-3 sm:py-2 sm:px-4 text-xs sm:text-sm rounded-lg transition-colors duration-200 whitespace-nowrap cursor-pointer`}>
                    Request For Price Breakup
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</div>
</div>

  )
}

export default PriceTable
