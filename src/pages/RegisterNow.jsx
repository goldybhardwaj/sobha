import React,{ useState }from "react";
import styles from "./RegisterNow.module.css";

function RegisterNow() {
    const [user, setUser] =useState({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
      const handleChange = (e) => {
        const { name, value } = e.target;
        setUser(prevState => ({
          ...prevState,
          [name]: value
        }));
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitted User:', user);
        // Reset form
        setUser({
          name: '',
          email: '',
          phone: '',
          message:''
        });
      };


  return (
    <div className="w-full h-auto mb-4 lg:mb-6 sm:mb-2 mt-4 md:mt-6 lg:mt-8 px-4 sm:px-6 md:px-8">
  <div className="max-w-7xl mx-auto">
    {/* Title */}
    <div className="w-full text-center  sm:ml-10 md:ml-8 lg:ml-12 mb-6 md:mb-8">
      <h1 className={`${styles.register} text-3xl sm:text-4xl md:text-5xl font-bold`}>
        REGISTER NOW
      </h1>
    </div>

    {/* Form and Text Sections */}
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-[70vh] gap-4 md:gap-6 lg:gap-8">
      <div className="w-full max-w-4xl flex flex-col lg:flex-row gap-4 md:gap-6 lg:gap-8">
        {/* Form Section */}
        <div className="w-full lg:w-3/5 bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg flex flex-col justify-center">
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
                placeholder="Phone Number*"
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
              className={`${styles.formButton} w-full bg-teal-600 text-white p-3 rounded-xl hover:bg-teal-700 transition-colors text-sm sm:text-base font-medium cursor-pointer`}
            >
              SUBMIT
            </button>
          </form>
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-2/5 p-4 sm:p-6 md:p-7 rounded-lg flex items-center justify-center">
          <h1
            className={`${styles.fontRegister} text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-black leading-tight text-center lg:text-left`}
          >
            THE BEST DEALS ARE THE RESULTS OF OUR
            <p className={`${styles.color} mt-2`}>EXPERTISE</p>
          </h1>
        </div>
      </div>
    </div>
  </div>
</div>
  );
}

export default RegisterNow;
