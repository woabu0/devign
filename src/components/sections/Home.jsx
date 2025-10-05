import React from "react";
import { motion } from "framer-motion";
import { fadeAnimation } from "../animations/framer";
import CompanyIcon from "../icons/company";
import Marquee from "react-fast-marquee";

export const Home = () => {
  return (
    <div
      id="home"
      className="flex flex-col items-center justify-center px-5 text-7xl md:text-8xl lg:text-[140px] leading-none text-center"
      style={{ height: "calc(100vh - 64px)" }}
    >
      <p className="text-sm book mb-4">Powerful digital design agency</p>
      <motion.div {...fadeAnimation(0, -30, 0, 0, 0, 0.5)}>
        <h1 className="flex items-center justify-center">
          We Make{" "}
          <img
            src="img/scroll.svg"
            alt="scroll"
            className="spin w-12 h-12 md:w-20 lg:w-36 md:h-20 lg:h-36 2xl:w-48 2xl:h-48 animate-spin [animation-duration:7s]"
          />
        </h1>
        <div>
          <h1 className="flex items-center justify-center">
            Good{" "}
            <img
              src="img/star.svg"
              alt="star"
              className="w-[49px] h-[49px] md:w-[80px] lg:w-[140px] md:h-[80px] lg:h-[140px] spin mx-3 animate-spin [animation-duration:7s]"
            />{" "}
            Shit!
          </h1>
        </div>
      </motion.div>
      <motion.p
        {...fadeAnimation(0, -30, 0, 0, 0, 0.5)}
        className="text-lg md:w-3/5 mt-5"
      >
        We are experts in crafting seamless and user-centric digital
        experiences. Our passion is to design and develop interfaces that
        delight users and drive results.
      </motion.p>
      <Marquee gradient pauseOnHover className=" w-[1280px] mt-10">
        <div className="flex items-center gap-20">
          <CompanyIcon name="unreal" className="w-12" />
          <CompanyIcon name="unity" className="w-12" />
          <CompanyIcon name="microsoft" className="w-12" />
          <CompanyIcon name="netflix" className="w-12" />
          <CompanyIcon name="playstation" className="w-12" />
          <CompanyIcon name="facebook" className="w-12" />
          <CompanyIcon name="apple" className="w-12" />
          <CompanyIcon name="google" className="w-12" />
          <CompanyIcon name="xbox" className="w-12" />
          <CompanyIcon name="razer" className="w-12" />
        </div>
      </Marquee>
    </div>
  );
};
