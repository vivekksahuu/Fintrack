import React from "react";
import { NavLink } from "react-router";

import "../../component-styles/landing-page-styles/hero.css";

import { BsStars } from "react-icons/bs";
import { FiArrowRight } from "react-icons/fi";
// import fintrackVideo from "../../assets/Videos/fintrack.mp4";
import LazyVideo from "./LazyHeroVideo";

const Hero = React.forwardRef((props, ref) => {
  return (
    <>
      <div
        className="flex-center flex-col
      gap-10 lg:gap-10 
      text-white 
      mt-15 lg:mt-25
      px-6 sm:px-0 "
        ref={ref}
      >
        <button
          className=" gradient-border rounded-full 
        hidden md:flex 
        gap-1 
        text-sm 2xl:text-2xl
        px-3 2xl:px-4 py-1 2xl:py-2  "
        >
          <span>
            <BsStars className="text-lg 2xl:text-3xl" />
          </span>
          Welcome to Fintrack!
        </button>

        <h1
          className="text-[2rem] lg:text-[2.5rem] 2xl:text-5xl
        font-semibold md:font-medium
        leading-11"
        >
          Take Control of Your Finances with Smart Tracking
        </h1>

        <h2
          className="text-[1rem] lg:text-lg 2xl:text-2xl
        font-medium
        leading-7
        -mt-7 lg:-mt-6 2xl:-mt-4
        "
        >
          Fintrack is your ultimate online platform to{" "}
          <span className="blue-text">log</span>,{" "}
          <span className="blue-text">categorize</span>, and{" "}
          <span className="blue-text">monitor your spending </span>effortlessly.
        </h2>

        <div
          className=" gradient-border rounded-full 
        p-0.5 2xl:p-1
        2xl:text-2xl
        group 
        hover:-translate-y-1 transition-all duration-500 ease-in-out
        self-start md:self-center
        
         "
        >
          <NavLink to="/app/form">
            <button
              className="bg-black 
          font-semibold 
          p-3 
          flex-center gap-1  
          rounded-full"
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

        <div
          className="mx-auto my-4 
        flex-center 
        w-full sm:w-[85%] 
        overflow-hidden 
        text-white 
        border border-white rounded-2xl 
        p-3"
        >
          <LazyVideo src="/fintrack.mp4" />
        </div>
      </div>
    </>
  );
});

Hero.displayName = "Hero";

export default Hero;
