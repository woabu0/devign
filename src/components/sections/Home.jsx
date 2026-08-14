import React from "react";
import { motion } from "framer-motion";
import { fadeAnimation } from "../animations/framer";
import CompanyIcon from "../icons/company";
import Marquee from "react-fast-marquee";
import { MARQUEE_SPEED, SPINNER_DURATION, TEXT_SIZES } from "../../constants";

const COMPANY_NAMES = [
  "unreal",
  "unity",
  "microsoft",
  "netflix",
  "playstation",
  "facebook",
  "apple",
  "google",
  "xbox",
  "razer",
];

export const Home = () => {
  return (
    <div
      id="home"
      className={`flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 ${TEXT_SIZES.HERO} leading-none text-center`}
      style={{ minHeight: "calc(100vh - 3.5rem)" }}
    >
      <p className="text-xs sm:text-sm md:text-base mb-3 sm:mb-4">Powerful digital design agency</p>
      <motion.div {...fadeAnimation(0, -30, 0, 0, 0, 0.5)}>
        <h1 className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 md:gap-4">
          We Make{" "}
          <img
            src="./img/scroll.svg"
            alt="scroll"
            width="160"
            height="160"
            className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-24 lg:h-24 xl:w-32 xl:h-32 2xl:w-40 2xl:h-40 animate-spin"
            style={{ animationDuration: `${SPINNER_DURATION}s` }}
            fetchPriority="high"
            decoding="async"
          />
        </h1>
        <div>
          <h1 className="flex items-center justify-center flex-wrap gap-2 sm:gap-3">
            Good{" "}
            <img
              src="./img/star.svg"
              alt="star"
              width="144"
              height="144"
              className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-28 xl:h-28 2xl:w-36 2xl:h-36 mx-2 sm:mx-3 animate-spin"
              style={{ animationDuration: `${SPINNER_DURATION}s` }}
              fetchPriority="high"
              decoding="async"
            />{" "}
            Shit!
          </h1>
        </div>
      </motion.div>
      <motion.p
        {...fadeAnimation(0, -30, 0, 0, 0, 0.5)}
        className="text-sm sm:text-base md:text-lg lg:text-xl w-full sm:w-4/5 md:w-3/5 mt-4 sm:mt-5 md:mt-6 px-4"
      >
        We are experts in crafting seamless and user-centric digital
        experiences. Our passion is to design and develop interfaces that
        delight users and drive results.
      </motion.p>
      <div className="w-full max-w-7xl mt-6 sm:mt-8 md:mt-10 overflow-hidden">
        <Marquee gradient pauseOnHover speed={MARQUEE_SPEED} className="w-full">
          <div className="flex items-center gap-8 sm:gap-12 md:gap-16 lg:gap-24 ml-8 sm:ml-12 md:ml-16 lg:ml-24">
            {COMPANY_NAMES.map((name) => (
              <CompanyIcon
                key={name}
                name={name}
                className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex-shrink-0"
              />
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
};
