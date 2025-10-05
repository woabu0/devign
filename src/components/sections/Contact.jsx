import React from "react";
import data from "../data/data.json";
import { motion } from "framer-motion";
import SectionTitle from "../ui/section-title";
import Input from "../ui/input";

export const Contact = () => {
  const interest = data.Interest;

  return (
    <div id="contact" className="mt-24 w-[1280px] m-auto">
      <SectionTitle
        heading="Contact"
        paragraph="Have questions or want to start a project? Our team is here to help. Reach out and we’ll provide the guidance, support, and expertise you need to bring your ideas to life."
      />
      <form className="w-[360px] md:w-[530px] lg:w-[950px] m-auto mt-10 flex flex-col gap-5">
        <div className="flex flex-col gap-3">
          <h1 className="text-xl">My details</h1>
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <Input
              label="Name"
              type="text"
              name="name"
              placeholder="Enter Your Name"
              required
            />
            <Input
              label="Email"
              type="email"
              name="email"
              placeholder="Enter Your Email"
              required
            />
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-xl">I’m interested in...</h1>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {interest.map((i, index) => (
              <motion.div
                initial={{ y: -30, opacity: 0 }}
                whileInView={{ x: 0, y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="w-full h-12 rounded-lg flex items-center justify-center border-gray-200 border-[1px] text-sm hover:outline-0 hover:bg-primary cursor-pointer"
              >
                {i.title}
              </motion.div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-xl">Project budget (USD)</h1>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {["<$1K", "$1K-$5K", "$5K-$10K", ">$20K"].map((budget, index) => (
              <motion.div
                initial={{ y: -30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="w-full h-12 rounded-lg flex items-center justify-center border-gray-200 border-[1px] text-sm hover:outline-0 hover:bg-primary cursor-pointer"
              >
                {budget}
              </motion.div>
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
        <button type="submit" className="w-full h-12 bg-primary rounded-lg">
          Submit
        </button>
      </form>
      <div className="my-10 flex flex-col justify-between text-lg uppercase">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 0.6 }}
          className="w-full h-px bg-black"
        ></motion.div>
        <div className="flex flex-col lg:flex-row gap-3 items-center justify-between pt-10">
          <p>
            Copyright © {new Date().getFullYear()} Devign. All rights reserved.
          </p>
          <div className="flex gap-5 md:gap-10">
            <h6>Privacy Policy</h6>
            <h6>Terms of Use</h6>
            <h6>Cookie Policy</h6>
          </div>
        </div>
      </div>
    </div>
  );
};
