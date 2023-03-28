import React, { useEffect } from "react";
import "./ContactUs.css";

// AOS
import AOS from "aos";
import "aos/dist/aos.css";

const ContactUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: "ease-in-out",
      once: true,
      offset: 100,
      // eslint-disable-next-line no-dupe-keys
      once: false,
    });
  }, []);
  return (
    // <div className="contact-container h-screen w-full flex items-center">
    //   <div className="text-center w-full">
    //     <h4 className="text-primary font-bold text-3xl" data-aos="fade-right">
    //       Contact Us
    //     </h4>
    //     <h1 className="text-4xl mx-auto text-white" data-aos="fade-left">
    //       Stay connected with us
    //     </h1>
    //     <div className="mt-12">
    //       <form className="flex flex-col items-center justify-center">
    //         <input
    //           type="text"
    //           placeholder="Type here"
    //           className="input input-bordered input-info w-[450px]"
    //           data-aos="fade-left"
    //         />
    //         <input
    //           type="text"
    //           placeholder="Type here"
    //           className="input input-bordered input-info  w-[450px] mt-4"
    //           data-aos="fade-right"
    //         />
    //         <textarea
    //           className="textarea textarea-info w-[450px] h-[136px] mt-4"
    //           placeholder="Write Here..."
    //           data-aos="fade-down"
    //         ></textarea>
    //         <input
    //           data-aos="fade-up"
    //           type="submit"
    //           className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white mt-[40px]"
    //         />
    //       </form>
    //     </div>
    //   </div>
    // </div>
    <div className="contact-container w-full flex items-center overflow-hidden">
      <div className="text-center w-full">
        <h4 className="text-primary font-bold text-3xl" data-aos="fade-right">
          Contact Us
        </h4>
        <h1 className="text-4xl mx-auto text-white" data-aos="fade-left">
          Stay connected with us
        </h1>
        <div className="mt-12">
          <form className="flex flex-col items-center justify-center">
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-info w-full md:w-[450px]"
              data-aos="fade-left"
            />
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-info w-full md:w-[450px] mt-4"
              data-aos="fade-right"
            />
            <textarea
              className="textarea textarea-info w-full md:w-[450px] h-[136px] mt-4"
              placeholder="Write Here..."
              data-aos="fade-down"
            ></textarea>
            <input
              data-aos="fade-up"
              type="submit"
              className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white mt-4 md:mt-[40px]"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
