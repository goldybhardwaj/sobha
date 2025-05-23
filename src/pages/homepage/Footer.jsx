import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className="h-auto px-2 lg:h-76 md:lg-76 sm:h-auto w-full bg-black text-white">
      <footer className="py-6">
        <div className="container mx-auto">
          <div className="text-center mt-9">
            <p className={`${styles.fontWeight} text-lg lg:text-3xl md:text-2xl sm:text-lg uppercase`}>
              For more information please Email at :
            </p>
          </div>
          <div className="text-center mt-5">
            <p className={`${styles.fontWeight} text-base lg:text-3xl md:text-2xl sm:text-lg`}>
            sales@sobhalimited.co.in
            </p>
          </div>
          <div className="text-center mt-7">
            <p className={`text-sm`}>
              &copy; Provident Real Estate 2025. All Rights Reserved
            </p>
          </div>

          <div className="text-center mt-3">
            <p className="text-sm mt-2">Project Permit: 2012262222</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
