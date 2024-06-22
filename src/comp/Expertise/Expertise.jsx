import React from "react";
import exp from "./expData.json";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

export const Expertise = () => {
  return (
    <div id="expertise" className="mt-[50px]">
      <div>
        <Marquee
          pauseOnHover={true}
          speed={100}
          className="text-[70px] md:text-[100px] lg:text-[150px] xl:text-[205px] 2xl:text-[276px] leading-[1.2]"
        >
          Our studio is safe space where startups grow and shine.
        </Marquee>
      </div>
      <div className="w-[360px] md:w-[535px] lg:w-[800px] xl:w-[1000px] 2xl:w-[1440px] m-auto my-[50px]">
        <div className="w-full flex justify-end">
          <motion.p
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-[16px] md:text-[18px] lg:text-[25px] xl:text-[30px] 2xl:text-[45px] w-[80%]"
          >
            We are a full-service <span> digital agency </span> that builds
            immersive <span> user experience. </span> Our team creates an
            exceptional <span> visualisation </span> and thought-out
            functionality. We believe, our clients deserve to be remarkable in{" "}
            <span> their business. </span> The studio develops the products
            people appreciate <span> all around the world. </span>
          </motion.p>
        </div>
        <motion.h1
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-[70px] md:text-[100px] lg:text-[150px] xl:text-[205px] 2xl:text-[276px] leading-none my-[50px]"
        >
          Our areas <br /> of expertise
        </motion.h1>
        <motion.p
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-[16px] md:text-[18px] lg:text-[25px] xl:text-[30px] 2xl:text-[45px] w-[80%]"
        >
          Every one of us <span> loves something </span> different. So, explore
          the world through the lens of our <span> visual capabilities, </span>{" "}
          and find what you love
        </motion.p>
        <div>
          <div className="mt-[95px]">
            {exp.map((e) => (
              <div
                className="h-[60vh] lg:h-[100vh] p-10 xl:p-[80px] rounded-[20px] xl:rounded-[60px] bg-[#F6F7F8] sticky top-0 flex flex-col justify-between"
                id={e.id}
              >
                <motion.h1
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  className="text-[35px] md:text-[65px] lg:text-[80px] xl:text-[100px] 2xl:text-[150px] leading-none"
                >
                  {e.title}
                </motion.h1>
                <div className="flex flex-col lg:flex-row justify-between">
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
                    <ul className="flex flex-col gap-[25px] list-disc">
                      <li>{e.tag1}</li>
                      <li>{e.tag2}</li>
                      <li>{e.tag3}</li>
                    </ul>
                    <ul className="flex flex-col gap-[25px] list-disc">
                      <li>{e.tag4}</li>
                      <li>{e.tag5}</li>
                      <li>{e.tag6}</li>
                    </ul>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
