import React from "react";
import data from "../data/data.json";
import { motion } from "framer-motion";
import SectionTitle from "../ui/section-title";

export const Expertise = () => {
  const expertise = data.Expertise;
  return (
    <div
      id="expertise"
      className="w-full max-w-7xl m-auto mt-12 sm:mt-16 md:mt-20 lg:mt-24 px-4 sm:px-6 md:px-8 lg:px-12"
    >
      <SectionTitle
        heading="Expertise"
        paragraph="We are a full-service digital agency that builds immersive user
        experience. Our team creates an exceptional visualization. We believe,
        our clients deserve to be remarkable in their business."
      />
      {expertise.map((e, i) => (
        <div
          key={i}
          className={`min-h-[50vh] sm:min-h-[60vh] lg:min-h-[70vh] xl:min-h-[80vh] p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 rounded-xl sm:rounded-2xl sticky top-16 sm:top-20 md:top-24 mt-6 sm:mt-8 md:mt-10 flex flex-col justify-between ${
            i === 0
              ? "bg-secondary"
              : i === 1
              ? "bg-primary"
              : "bg-black text-white"
          }`}
        >
          <motion.h1
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl leading-none mb-4 sm:mb-6"
          >
            {e.title}
          </motion.h1>
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 sm:gap-8">
            <motion.p
              initial={{ y: -30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl w-full lg:w-[60%]"
            >
              {e.details}
            </motion.p>
            <motion.div
              initial={{ y: -30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full lg:w-auto"
            >
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-2 sm:gap-3">
                {[1, 2, 3, 4, 5, 6].map((n) => (
                  <div
                    key={n}
                    className={`border-[1px] w-full sm:w-auto min-w-[100px] flex flex-col items-center justify-center p-2 sm:p-3 rounded-xl sm:rounded-2xl text-xs sm:text-sm md:text-base lg:text-lg ${
                      i === 1 ? "border-black" : ""
                    }`}
                  >
                    {e[`tag${n}`]}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      ))}
    </div>
  );
};
