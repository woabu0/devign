import React, { useState } from "react";
import data from "../data/data.json";
import { motion } from "framer-motion";
import SectionTitle from "../ui/section-title";

export const Question = () => {
  const question = data.Question;
  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      id="question"
      className="w-full max-w-7xl m-auto mt-12 sm:mt-16 md:mt-20 lg:mt-24 px-4 sm:px-6 md:px-8 lg:px-12"
    >
      <SectionTitle
        heading="F.A.Q"
        paragraph="We understand that clarity builds trust. Our F.A.Q section answers the most common questions about our process, services, and approach."
      />
      <div className="mt-8 sm:mt-12 md:mt-16 lg:mt-20 w-full max-w-4xl m-auto">
        {question.map((q, index) => {
          const isOpen = openIndex === index;
          return (
            <motion.div
              key={index}
              initial={{ y: -30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className={`text-sm sm:text-base md:text-lg lg:text-xl border-b border-gray-300 rounded-xl mb-3 sm:mb-4
                ${isOpen ? "bg-primary" : "bg-secondary"} 
                transition-colors duration-500 ease-in-out`}
            >
              <div
                className="flex items-start sm:items-center justify-between cursor-pointer p-4 sm:p-5 gap-3 sm:gap-4"
                onClick={() => toggleQuestion(index)}
              >
                <h1 className="flex items-center gap-2 sm:gap-3 flex-1">
                  <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl flex-shrink-0">0{index + 1}</span>
                  <span className="text-sm sm:text-base md:text-lg lg:text-xl">{q.title}</span>
                </h1>
                <h1 className="border-black border-[1px] rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-lg sm:text-xl bg-secondary flex-shrink-0">
                  {isOpen ? "−" : "+"}
                </h1>
              </div>
              {isOpen && (
                <p className="text-xs sm:text-sm md:text-base text-[#424242] pb-4 px-4 sm:px-5 leading-relaxed">
                  {q.desc}
                </p>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
