import React,{ useState }from "react";
import styles from "./RegisterNow.module.css";

function RegisterNow() {
    const [user, setUser] =useState({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    //   const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setUser(prevUser => ({
    //       ...prevUser,
    //       [name]: value
    //     }));
    //   };

      const handleSubmit = (e) => {
        e.preventDefault();
        // console.log('Submitted User:', user);
        // Reset form
        setUser({
          name: '',
          email: '',
          phone: '',
          message:''
        });
      };


  return (
    <section className="h-auto w-screen mt-5">
      <div className=" mx-20 ">
        <div className="ml-40">
          <h1 className={`${styles.register} text-5xl`}>REGISTER NOW</h1>
        </div>

        <div class="flex items-center justify-center min-h-screen p-2">
          <div class="container mx-auto flex space-x-4 w-full max-w-6xl h-[90vh]">
            {/* <!-- First Section (Form, more width, full height) --> */}
            <div class="w-3/5 p-8 rounded-lg shadow-lg flex flex-col justify-center">
              <form onSubmit={handleSubmit} class="space-y-4">
                <div>
                  <input
                    type="text"
                    value={user.name}
                    onChange={(e)=>{setUser(e.target.value)}}
                    placeholder="Name*"
                    class="w-full p-3 border border-gray-100 shadow-gray-700 focus:outline-none placeholder-gray-500 rounded-3xl"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    value={user.email}
                    onChange={(e)=>{setUser(e.target.value)}}
                    placeholder="Email*"
                    class="w-full p-3 border border-gray-100 focus:outline-none  placeholder-gray-500 rounded-3xl"
                    required
                  />
                </div>
                <div>
                  <input
                    type="number"
                       min="10"
                        max="16"
                    value={user.phone}
                    onChange={(e)=>{setUser(e.target.value)}}
                    placeholder="Phone Number*"
                    class="w-full p-3 border border-gray-100  focus:outline-none placeholder-gray-500 rounded-3xl"
                    required
                  />
                </div>

                <div>
                  <textarea
                  value={user.message}
                  onChange={(e)=>{setUser(e.target.value)}}
                    placeholder="Message"
                    rows="4"
                    class="w-full p-3 border border-gray-100 rounded-3xl focus:outline-none  placeholder-gray-500 "
                  ></textarea>
                </div>
                <button
                  class={`${styles.formButton} w-full bg-teal-600 text-white p-3 rounded-xl hover:bg-teal-700`}
                >
                  SUBMIT
                </button>
              </form>
            </div>

            {/* <!-- Second Section (Text, less width, close to form, centered vertically) --> */}
            <div class="w-2/5 p-7 rounded-lg flex items-center">
              <h1
                class={`${styles.fontRegister} w-full text-6xl text-black leading-tight`}
              >
                THE BEST DEALS ARE THE RESULTS OF OUR
                <h1 className={`${styles.color}`}>EXPERTISE</h1>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RegisterNow;
