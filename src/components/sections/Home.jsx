import React from "react";
import { motion } from "framer-motion";

export const Home = () => {
  return (
    <div
      id="home"
      className="w-[355px] md:w-[535px] lg:w-[800px] xl:w-[1000px] 2xl:w-[1440px] m-auto relative"
    >
      <div className="mt-[50px] xl:mt-[70px]">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="pl-5 flex justify-between text-[70px] md:text-[100px] lg:text-[150px] xl:text-[205px] 2xl:text-[276px] leading-none">
            We Make{" "}
            <img
              src="img/scroll.svg"
              alt="scroll"
              className="spin w-[49px] h-[49px] md:w-[80px] lg:w-[140px] md:h-[80px] lg:h-[140px] 2xl:w-[192px] 2xl:h-[192px]"
            />
          </h1>
          <div>
            <h1 className="text-[70px] md:text-[100px] lg:text-[150px] xl:text-[205px] 2xl:text-[276px] leading-none flex items-center">
              Good{" "}
              <img
                src="img/star.svg"
                alt="star"
                className="w-[49px] h-[49px] md:w-[80px] lg:w-[140px] md:h-[80px] lg:h-[140px] 2xl:w-[192px] 2xl:h-[192px] spin mx-[10px] 2xl:mx-[50px]"
              />{" "}
              Shit!
            </h1>
            <p className="text-[10px] md:text-[14px] lg:text-[16px] xl:text-[22px] text-right book">
              Powerful digital design agency
            </p>
          </div>
        </motion.div>
        <div className="flex justify-between items-end mt-[50px] md:mt-[70px]">
          <motion.p
            initial={{ y: -30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-[16px] md:text-[18px] lg:text-[25px] xl:text-[30px] 2xl:text-[45px] w-[60%]"
          >
            We are experts in <span>crafting seamless</span> and user-centric{" "}
            <span>digital experiences.</span> Our passion is to design and
            develop interfaces that <span>delight users</span> and drive results
          </motion.p>
          <motion.div
            initial={{ y: -30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center"
          >
            <div className="w-[80px] lg:w-[160px] h-[30px] lg:h-[60px] rounded-[50px] border-black border-[1px] text-[10px] lg:text-[22px] flex items-center justify-center">
              Let's talk!
            </div>
            <div className="w-[30px] lg:w-[61px] h-[30px] lg:h-[61px] bg-black rounded-[50%] flex items-center justify-center">
              <img
                src="img/case-arrow.svg"
                alt="arrow"
                className="w-[14px] lg:w-[24px] h-[14px] lg:h-[24px] rotate-[150deg]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
