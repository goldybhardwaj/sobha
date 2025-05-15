import React from "react";
import styles from "./RegisterNow.module.css";

function RegisterNow() {
    const submit=(e)=>{
  e.preventDefault();
    }
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
              <form onSubmit={submit} class="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Name*"
                    class="w-full p-3 border border-gray-100 shadow-gray-700 focus:outline-none placeholder-gray-500 rounded-3xl"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email*"
                    class="w-full p-3 border border-gray-100 focus:outline-none  placeholder-gray-500 rounded-3xl"
                    required
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number*"
                    class="w-full p-3 border border-gray-100  focus:outline-none placeholder-gray-500 rounded-3xl"
                    required
                  />
                </div>

                <div>
                  <textarea
                    placeholder="Message"
                    rows="4"
                    class="w-full p-3 border border-gray-100 rounded-3xl focus:outline-none  placeholder-gray-500 "
                  ></textarea>
                </div>
                <button
                  type="button"
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
