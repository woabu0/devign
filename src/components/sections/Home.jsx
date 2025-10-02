import React from "react";
import { motion } from "framer-motion";
import { fadeAnimation } from "../animations/framer";

export const Home = () => {
  return (
    <div id="home" className="px-5">
      <div className="mt-12 xl:mt-16 text-7xl md:text-8xl lg:text-[150px] leading-none">
        <p className="text-sm text-center book">
          Powerful digital design agency
        </p>
        <motion.div {...fadeAnimation(0, -30, 0, 0, 0, 0.5)}>
          <h1 className="flex items-center justify-center">
            We Make{" "}
            <img
              src="img/scroll.svg"
              alt="scroll"
              className="spin w-12 h-w-12 md:w-20 lg:w-36 md:h-20 lg:h-36 2xl:w-48 2xl:h-48"
            />
          </h1>
          <div>
            <h1 className="flex items-center justify-center">
              Good{" "}
              <img
                src="img/star.svg"
                alt="star"
                className="w-[49px] h-[49px] md:w-[80px] lg:w-[140px] md:h-[80px] lg:h-[140px] spin mx-3"
              />{" "}
              Shit!
            </h1>
          </div>
        </motion.div>
        <motion.p
          {...fadeAnimation(0, -30, 0, 0, 0, 0.5)}
          className="text-lg md:w-3/5 mt-5 m-auto text-center"
        >
          We are experts in crafting seamless and user-centric digital
          experiences. Our passion is to design and develop interfaces that
          delight users and drive results
        </motion.p>
      </div>
    </div>
  );
};
