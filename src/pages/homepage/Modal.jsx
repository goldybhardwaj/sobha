import React, { useState } from "react";
import styles from "./Modal.module.css";

const Modal = ({ isOpen, onClose }) => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted User:", user);
    // Reset form
    setUser({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed  inset-0 z-50 flex items-center justify-center bg bg-opacity-50 px-3">
      <div className="relative">
        <div className="absolute top-3 right-3 lg:right-0 md:right-0 sm:right-1">
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
            aria-label="Close modal"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-lg w-full max-w-md px-6 lg:pt-8 md:pt-6 sm:pt-5 pt-4 lg:pb-10 md:pb-8 sm:pb-6 pb-4 lg:mx-5 md:mx-5 sm:mx-3">
          <div
            className={`${styles.color} ${styles.font} text-2xl text-center mb-6`}
          >
            Contact Us{" "}
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                name="name"
                value={user.name}
                onChange={handleChange}
                placeholder="Name*"
                className="w-full p-3 border border-gray-200 rounded-3xl focus:outline-none focus:ring-2 focus:ring-teal-500 placeholder-gray-500 text-sm sm:text-base"
                required
              />
            </div>
            <div>
              <input
                name="email"
                type="email"
                value={user.email}
                onChange={handleChange}
                placeholder="Email*"
                className="w-full p-3 border border-gray-200 rounded-3xl focus:outline-none focus:ring-2 focus:ring-teal-500 placeholder-gray-500 text-sm sm:text-base"
                required
              />
            </div>
            <div>
              <input
                name="phone"
                type="tel"
                minLength="10"
                value={user.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full p-3 border border-gray-200 rounded-3xl focus:outline-none focus:ring-2 focus:ring-teal-500 placeholder-gray-500 text-sm sm:text-base"
                required
              />
            </div>
            <div>
              <textarea
                name="message"
                value={user.message}
                onChange={handleChange}
                placeholder="Message"
                rows="4"
                className="w-full p-3 border border-gray-200 rounded-3xl focus:outline-none focus:ring-2 focus:ring-teal-500 placeholder-gray-500 text-sm sm:text-base"
              ></textarea>
            </div>
            <button
              className={`${styles.formButton} ${styles.modalButton} w-full  p-3 rounded-xl  text-sm sm:text-base font-medium cursor-pointer`}
            >
              SUBMIT
            </button>
            <button
              onClick={onClose}
              className={`${styles.formButton} ${styles.modalButton} w-full  p-3 rounded-xl  text-sm sm:text-base font-medium cursor-pointer`}
            >
              CANCEL
            </button>
          </form>

          <div className="flex justify-end space-x-3"></div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
