import React from "react";
import myVideo from "./vid.mp4";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

export const Showcase = () => {
  return (
    <div id="showcase">
      <div className="w-[360px] md:w-[535px] lg:w-[800px] xl:w-[1000px] 2xl:w-[1440px] mt-[70px] m-auto">
        <div className="w-full h-[150px] md:h-[180px] lg:h-[220px] xl:h-[300px] text-white text-[70px] md:text-[100px] lg:text-[150px] xl:text-[205px] 2xl:text-[276px] leading-[1.2] rounded-[25px] lg:rounded-[50px] flex items-center showcasebg">
          <Marquee pauseOnHover={true} speed={100}>
            Fintech-Health Tech-B2B Saas-Education-eCommerce-
          </Marquee>
        </div>
      </div>
      <div className="mt-[70px] px-[10px]">
        <video
          autoPlay
          muted
          loop
          className="m-auto block rounded-[20px]"
          src={myVideo}
        ></video>
      </div>
    </div>
  );
};
