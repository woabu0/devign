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
    <div id="question" className="w-[1280px] m-auto mt-24">
      <SectionTitle
        heading="F.A.Q"
        paragraph="We understand that clarity builds trust. Our F.A.Q section answers the most common questions about our process, services, and approach."
      />
      <div className="mt-[70px] w-[360px] md:w-[535px] lg:w-[800px] xl:w-[1050px] m-auto">
        {question.map((q, index) => {
          const isOpen = openIndex === index;
          return (
            <motion.div
              key={index}
              initial={{ y: -30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className={`text-[14px] lg:text-[16px] xl:text-[24px] border-b border-gray-300 rounded-xl mb-4
                ${isOpen ? "bg-primary" : "bg-secondary"} 
                transition-colors duration-500 ease-in-out`}
            >
              <div
                className="flex items-center justify-between cursor-pointer p-5"
                onClick={() => toggleQuestion(index)}
              >
                <h1 className="flex items-center gap-3">
                  <span className="text-5xl">0{index + 1}</span> {q.title}
                </h1>
                <h1 className="border-black border-[1px] rounded-full w-12 h-12 flex items-center justify-center text-xl bg-secondary">
                  {isOpen ? "−" : "+"}
                </h1>
              </div>
              {isOpen && (
                <p className="text-[#424242] xl:text-sm pb-4 px-5">{q.desc}</p>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
