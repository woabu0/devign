import React from "react";
import data from "../data/data.json";
import { motion } from "framer-motion";
import SectionTitle from "../ui/section-title";
import Input from "../ui/input";
import { BUDGET_OPTIONS, ANIMATION_DURATION } from "../../constants";

export const Contact = () => {
  const interest = data.Interest;

  return (
    <div
      id="contact"
      className="w-full max-w-7xl m-auto mt-12 sm:mt-16 md:mt-20 lg:mt-24 px-4 sm:px-6 md:px-8 lg:px-12"
    >
      <SectionTitle
        heading="Contact"
        paragraph="Have questions or want to start a project? Our team is here to help. Reach out and we'll provide the guidance, support, and expertise you need to bring your ideas to life."
      />
      <form className="w-full max-w-4xl m-auto mt-6 sm:mt-8 md:mt-10 flex flex-col gap-4 sm:gap-5">
        <div className="flex flex-col gap-3">
          <h1 className="text-lg sm:text-xl md:text-2xl">My details</h1>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            <div className="w-full sm:w-[48%]">
              <Input
                label="Name"
                type="text"
                name="name"
                placeholder="Enter Your Name"
                required
              />
            </div>
            <div className="w-full sm:w-[48%]">
              <Input
                label="Email"
                type="email"
                name="email"
                placeholder="Enter Your Email"
                required
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-lg sm:text-xl md:text-2xl">I'm interested in...</h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3">
            {interest.map((i, index) => (
              <motion.button
                key={index}
                type="button"
                initial={{ y: -30, opacity: 0 }}
                whileInView={{ x: 0, y: 0, opacity: 1 }}
                transition={{ duration: ANIMATION_DURATION.SLOW, delay: index * 0.1 }}
                className="w-full h-10 sm:h-12 rounded-lg flex items-center justify-center border-gray-200 border-[1px] text-xs sm:text-sm hover:outline-0 hover:bg-primary cursor-pointer transition-colors"
              >
                {i.title}
              </motion.button>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-lg sm:text-xl md:text-2xl">Project budget (USD)</h1>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
            {BUDGET_OPTIONS.map((budget, index) => (
              <motion.button
                key={index}
                type="button"
                initial={{ y: -30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: ANIMATION_DURATION.SLOW, delay: index * 0.1 }}
                className="w-full h-10 sm:h-12 rounded-lg flex items-center justify-center border-gray-200 border-[1px] text-xs sm:text-sm hover:outline-0 hover:bg-primary cursor-pointer transition-colors"
              >
                {budget}
              </motion.button>
            ))}
          </div>
        </div>
        <Input
          label="Message"
          name="message"
          placeholder="Tell us more about yourself"
          required
          textarea
        />
        <button
          type="submit"
          className="w-full h-10 sm:h-12 md:h-14 bg-primary rounded-lg text-sm sm:text-base md:text-lg font-medium hover:opacity-90 transition-opacity"
        >
          Submit
        </button>
      </form>
      <div className="my-8 sm:my-10 md:my-12 flex flex-col justify-between">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ duration: ANIMATION_DURATION.SLOW }}
          className="w-full h-px bg-black"
        ></motion.div>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 items-center justify-between pt-6 sm:pt-8 md:pt-10 text-sm sm:text-base md:text-lg uppercase">
          <p className="text-center sm:text-left">
            Copyright © {new Date().getFullYear()} Devign. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-3 sm:gap-5 md:gap-10 justify-center sm:justify-end">
            <h6 className="cursor-pointer hover:underline">Privacy Policy</h6>
            <h6 className="cursor-pointer hover:underline">Terms of Use</h6>
            <h6 className="cursor-pointer hover:underline">Cookie Policy</h6>
          </div>
        </div>
      </div>
    </div>
  );
};
