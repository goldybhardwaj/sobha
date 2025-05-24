import styles from "./Modal.module.css";
import { useForm } from "react-hook-form";
import { apiContactUs } from "../../services/apiContactUs";

const Modal = ({ isOpen, onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const submitHandler = async (formData) => {
    try {
      const data = await apiContactUs(formData);

      if (data.status === "success") {
        alert("Your details have been submitted successfully!");
      }

      reset();
      onClose();
    } catch (err) {
      alert(err.message);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed  inset-0 z-50 flex items-center justify-center bg bg-opacity-50 px-3">
      <div className="relative">
        <div className="absolute top-3 right-3 lg:right-0 md:right-0 sm:right-1">
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 focus:outline-none cursor-pointer"
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
         <form
                        onSubmit={handleSubmit(submitHandler)}
                        className="space-y-4"
                      >
                        <div>
                          <input
                            type="text"
                            placeholder="Name*"
                            className="w-full p-3 border border-gray-200 rounded-3xl focus:outline-none focus:ring-2 focus:ring-teal-500 placeholder-gray-500 text-sm sm:text-base"
                            {...register("name", {
                              required: "Name is required.",
                            })}
                          />
        
                          {errors.name && (
                            <p className="text-sm text-red-600 ml-3 mt-1.5">
                              {errors.name.message}
                            </p>
                          )}
                        </div>
                        <div>
                          <input
                            type="email"
                            placeholder="Email*"
                            className="w-full p-3 border border-gray-200 rounded-3xl focus:outline-none focus:ring-2 focus:ring-teal-500 placeholder-gray-500 text-sm sm:text-base"
                            {...register("email", {
                              required: "Email is required.",
                            })}
                          />
        
                          {errors.email && (
                            <p className="text-sm text-red-600 ml-3 mt-1.5">
                              {errors.email.message}
                            </p>
                          )}
                        </div>
                        <div>
                          <input
                            type="tel"
                            placeholder="Phone Number"
                            className="w-full p-3 border border-gray-200 rounded-3xl focus:outline-none focus:ring-2 focus:ring-teal-500 placeholder-gray-500 text-sm sm:text-base"
                            {...register("phone", {
                              minLength: {
                                value: 10,
                                message: "Min length should be 10.",
                              },
                            })}
                            maxLength={10}
                          />
        
                          {errors.phone && (
                            <p className="text-sm text-red-600 ml-3 mt-1.5">
                              {errors.phone.message}
                            </p>
                          )}
                        </div>
                        <div>
                          <textarea
                            placeholder="Message"
                            rows="4"
                            className="w-full p-3 border border-gray-200 rounded-3xl focus:outline-none focus:ring-2 focus:ring-teal-500 placeholder-gray-500 text-sm sm:text-base"
                            {...register("message")}
                          ></textarea>
                        </div>
                        <button
                          className={`${styles.formButton} w-full bg-teal-600 text-white p-3 rounded-xl hover:bg-teal-700 transition-colors text-sm sm:text-base font-medium cursor-pointer`}
                        >
                          SUBMIT
                        </button>
                      </form>

          <div className="flex justify-end space-x-3"></div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
