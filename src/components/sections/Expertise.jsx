import React from "react";
import data from "../data/data.json";
import { motion } from "framer-motion";
import SectionTitle from "../ui/section-title";

export const Expertise = () => {
  const expertise = data.Expertise;
  return (
    <div id="expertise" className="mt-24 w-[1280px] m-auto">
      <SectionTitle
        heading="Expertise"
        paragraph="We are a full-service digital agency that builds immersive user
        experience. Our team creates an exceptional visualization. We believe,
        our clients deserve to be remarkable in their business."
      />
      {expertise.map((e, i) => (
        <div
          className={`h-[60vh] lg:h-[80vh] p-10 xl:p-16 rounded-2xl sticky top-20 mt-10 flex flex-col justify-between ${
            i === 0
              ? "bg-secondary"
              : i === 1
              ? "bg-primary"
              : "bg-black text-white"
          }`}
          id={e.id}
        >
          <motion.h1
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl lg:text-7xl xl:text-[100px] leading-none"
          >
            {e.title}
          </motion.h1>
          <div className="flex flex-col lg:flex-row justify-between items-end">
            <motion.p
              initial={{ y: -30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-[16px] md:text-[18px] lg:text-[25px] xl:text-[30px] 2xl:text-[43px] w-full lg:w-[60%]"
            >
              {e.details}
            </motion.p>
            <motion.div
              initial={{ y: -30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[10px] md:text-[14px] lg:text-[16]px 2xl:text-[22px] flex gap-[60px] mt-5 lg:mt-0 justify-between roman"
            >
              <div className="grid grid-cols-2 gap-3">
                {[1, 2, 3, 4, 5, 6].map((n) => (
                  <div
                    key={n}
                    className={`border-[1px] w-40 flex flex-col items-center justify-center p-3 rounded-3xl ${
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
