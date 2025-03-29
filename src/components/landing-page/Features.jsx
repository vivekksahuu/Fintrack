import React from "react";
import appFeatures from "./../../assets/AppFeatures";
import LazyFeatureVideo from "./LazyFeatureVideo";
import { CiStar } from "react-icons/ci";

const Features = React.forwardRef((props, ref) => {
  return (
    <div className="mt-15 py-8 min-h-screen text-white" ref={ref}>
      {/* Section Heading */}
      <div className="flex-center">
        <div
          className="flex gap-1 
        rounded-full 
        px-1.5 2xl:px-2 py-1 2xl:py-1.5 
        bg-blue-500 
        mb-5 2xl:mb-10
        text-white"
        >
          <p className="text-lg 2xl:text-3xl font-bold">
            <CiStar />
          </p>
          <p className="text-sm 2xl:text-2xl">Features</p>
        </div>
      </div>

      <div
        className="px-5 
      text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl
      text-center font-semibold
      mb-10"
      >
        What Fintrack Offers
      </div>

      {/* Features Grid */}
      <div className="flex flex-col gap-10 md:gap-20 md:px-4">
        {appFeatures.map((feature, index) => (
          <div
            key={index}
            className="w-full flex flex-col lg:flex-row justify-around"
          >
            <div
              className="px-4 lg:px-10 
              flex justify-center flex-col
              2xl:gap-1.5 
              w-full lg:w-[35%]"
            >
              <div className="flex items-center gap-2">
                <p className="text-3xl md:text-4xl 2xl:text-5xl  text-blue-500 mb-2 md:mb-2">
                  <feature.icon />
                </p>
                <p className="text-lg md:text-2xl 2xl:text-5xl font-medium">
                  {feature.heading}
                </p>
              </div>

              <p className="text-[1rem] 2xl:text-3xl  text-gray-400 font-medium">
                {feature.subheading}
              </p>
            </div>

            <div
              className="mx-auto lg:mx-8 my-4 
            flex-center 
            w-full sm:w-fit
            h-full sm:h-[70vh]
            scale-100 lg:scale-110
            
              "
            >
              <LazyFeatureVideo src={feature.video} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

Features.displayName = "Features";
export default Features;
