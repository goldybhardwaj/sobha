import React from 'react'
import styles from "./PriceTable.module.css"
function PriceTable() {
  return (
    <section className='h-auto w-screen mt-10 mb-10'>
        <div className="">
    <div className="mx-20">
        <table className="w-full border-collapse bg-white shadow-md rounded-lg overflow-hidden">
            <thead>
                <tr className="bg-gray-200 text-gray-700">
                    <th className="py-3 px-4 text-left">Type</th>
                    <th className="py-3 px-4 text-left">Saleable Area</th>
                    <th className="py-3 px-4 text-left">Price</th>
                    <th className="py-3 px-4 text-left"></th>
                </tr>
            </thead>
            <tbody>
                <tr className="border-b">
                    <td className="py-3 px-4">2 BHK</td>
                    <td className="py-3 px-4">1200 Sq.Ft.</td>
                    <td className="py-3 px-4">₹ 1.5 Cr* Onwards</td>
                    <td className="py-3 px-4">
                        <button className={`${styles.priceButton} py-2 px-4 rounded-lg `}>Request For Price Breakup</button>
                    </td>
                </tr>
                <tr className="border-b">
                    <td className="py-3 px-4">3 BHK+2T+3T</td>
                    <td className="py-3 px-4">1500-1800 Sq.Ft.</td>
                    <td className="py-3 px-4">₹ 1.87-2.25 Cr* Onwards</td>
                    <td className="py-3 px-4">
                        <button className={`${styles.priceButton} py-2 px-4 rounded-lg `}>Request For Price Breakup</button>
                    </td>
                </tr>
                <tr className="border-b">
                    <td className="py-3 px-4">4 BHK+4T</td>
                    <td className="py-3 px-4">2200 Sq.Ft.</td>
                    <td className="py-3 px-4">₹ 2.75 Cr* Onwards</td>
                    <td className="py-3 px-4">
                        <button className={`${styles.priceButton} py-2 px-4 rounded-lg `}>Request For Price Breakup</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
      
    </section>
  )
}

export default PriceTable
