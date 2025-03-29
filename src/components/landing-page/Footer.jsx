import { NavLink } from "react-router";
import { FiArrowRight } from "react-icons/fi";

const Footer = ({ scrollToSection }) => {
  return (
    <div className="py-8 text-white flex-center flex-col gap-2">
      <div
        className="w-full 
      min-h-[40vh] lg:h-[40vh]
      border-t 
      flex flex-col md:flex-row
      md:justify-between md:items-center 
      px-4 sm:px-0
      "
      >
        <div
          className=" md:px-6
        py-8 md:py-0 
        w-full md:w-[60vw] lg:w-[40vw]"
        >
          <p className="text-lg lg:text-2xl md:text-lg 2xl:text-5xl font-bold ">
            Track your expenses effortlessly. Stay in control of your finances.{" "}
          </p>
          <div
            className=" gradient-border 
          p-0.5 2xl:p-1
          mt-5 2xl:mt-8
          rounded-full 
          group
          hover:-translate-y-1 transition-all duration-500 ease-in-out
          w-fit"
          >
            <NavLink to="/app/form">
              <button
                className="bg-black 
          font-semibold 
          p-3 2xl:p-4
          flex-center gap-1  
          rounded-full
          2xl:text-2xl"
              >
                Start Tracking Today
                <span
                  className="text-lg 2xl:text-2xl
                transition-all duration-500 ease-in-out
                group-hover:translate-x-1"
                >
                  <FiArrowRight />
                </span>
              </button>
            </NavLink>
          </div>
        </div>

        <div
          className="flex flex-col gap-3 2xl:gap-6
        text-lg 2xl:text-3xl
        mt-0 md:mt-5 lg:mt-5 
        md:mr-8 lg:mr-0
        px-2 sm:px-0
        "
        >
          <p className="font-bold">Quick Links</p>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("hero");
            }}
          >
            Home
          </a>

          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("features");
            }}
          >
            Features
          </a>

          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("faq");
            }}
          >
            FAQs
          </a>
        </div>

        <div className="hidden lg:block w-[35vw] h-full lg:relative">
          <img
            src="/secondary-hero-image.png"
            className="w-full h-full object-contain 
            absolute md:left-0 top-8"
          />
        </div>
      </div>
      <div
        className="flex 
      flex-col md:flex-row
      gap-1
      w-full
      2xl:text-3xl
      text-left sm:text-center px-6 py-3"
      >
        <p>Copyright © 2025 All rights reserved.</p>
        <p>Developed by Vivek Sahu</p>
      </div>
    </div>
  );
};

export default Footer;
