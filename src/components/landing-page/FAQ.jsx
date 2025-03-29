import React, { useState } from "react";

import { FaQuestionCircle, FaPlus, FaMinus } from "react-icons/fa";
import faqData from "./../../assets/FAQS";

const FAQ = React.forwardRef((props, ref) => {
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleFAQ = (index) => {
    if (openIndexes.includes(index)) {
      // Close the clicked item only
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      // Open the clicked item
      setOpenIndexes([...openIndexes, index]);
    }
  };

  return (
    <div className="mt-15 py-8 text-white" ref={ref}>
      {/* Section Heading */}
      <div className="flex justify-center">
        <div
          className="flex gap-1 
        rounded-full 
        px-1.5 2xl:px-2 py-1 2xl:py-1.5 
        mb-5 
        bg-blue-500 
        text-white"
        >
          <p className="text-lg 2xl:text-3xl font-bold">
            <FaQuestionCircle />
          </p>
          <p className="text-sm 2xl:text-2xl">FAQs</p>
        </div>
      </div>

      <div
        className="px-5 
      text-2xl md:text-3xl lg:text-4xl 
      text-center font-semibold
      mb-10"
      >
        Frequently Asked Questions
      </div>

      {/* FAQ List */}
      <div
        className="flex flex-col md:items-center
        gap-6 md:gap-4 
      px-6"
      >
        {faqData.map((item, index) => (
          <div
            className="gradient-border w-[100%] md:w-[70vw] lg:w-[50vw] rounded-2xl p-0.5"
            key={index}
          >
            <div
              className=" rounded-2xl 
            px-4 md:px-6 py-4 md:py-4 2xl:py-6
            flex flex-col gap-2  
            bg-black
            text-sm md:text-lg 2xl:text-3xl"
            >
              <div
                className="flex justify-between items-center 
                 
                cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <p className=" w-[90%] sm:w-full">{item.question}</p>
                <p className="py-1 sm:py-0 self-start sm:self-center">
                  {openIndexes.includes(index) ? <FaMinus /> : <FaPlus />}
                </p>
              </div>
              {openIndexes.includes(index) && (
                <p className=" font-light">{item.answer}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

FAQ.displayName = "FAQ";

export default FAQ;
