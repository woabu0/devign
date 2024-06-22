import React, { useState } from "react";
import que from "./queData.json";
import { motion } from "framer-motion";

export const Question = () => {
  const [show, setShow] = useState(false);

  const ShowName = () => {
    if (show == true) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  return (
    <div
      id="question"
      className="w-[360px] md:w-[535px] lg:w-[800px] xl:w-[1000px] 2xl:w-[1440px] m-auto mt-[70px]"
    >
      <motion.h1
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-[70px] md:text-[100px] lg:text-[150px] xl:text-[180px] 2xl:text-[276px] leading-none"
      >
        Frequently Asked Questions
      </motion.h1>
      <div className="mt-[70px] w-[360px] md:w-[535px] lg:w-[800px] xl:w-[1050px] m-auto">
        {que.map((q) => (
          <div>
            <motion.div
              initial={{ y: -30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-[14px] lg:text-[16px] xl:text-[24px]"
            >
              <div className="flex items-center justify-between">
                <h1 className="py-[20px]">{q.title}</h1>
                <h1 onClick={ShowName}>
                  +
                </h1>
              </div>
              {show && <p className="text-[424242] xl:text-[20px]">{q.desc}</p>}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};
