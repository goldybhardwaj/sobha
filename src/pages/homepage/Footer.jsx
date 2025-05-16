import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className="h-auto px-2 lg:h-76 md:lg-76 sm:h-auto w-full bg-black text-white">
      <footer className="py-6">
        <div className="container mx-auto">
          <div className="text-center mt-9">
            <p className={`${styles.fontWeight} text-3xl uppercase`}>
              For more information please call:
            </p>
          </div>
          <div className="text-center mt-5">
            <p className={`${styles.fontWeight} text-3xl uppercase`}>
              +91-9958376333
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
