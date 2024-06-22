import React, { useRef } from "react";
import interest from "./interestData.json";
import budget from "./budgetData.json";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div
      id="contact"
      className="mt-[195px] w-[360px] md:w-[535px] lg:w-[800px] xl:w-[1000px] 2xl:w-[1440px] m-auto text-[18px]"
    >
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-[60px] md:text-[90px] lg:text-[150px] xl:text-[180px] 2xl:text-[260px] flex items-center leading-none"
      >
        Hey!{" "}
        <img
          src="img/shake.svg"
          alt="shake"
          className="w-[49px] h-[49px] md:w-[80px] lg:w-[140px] md:h-[80px] lg:h-[140px] 2xl:w-[192px] 2xl:h-[192px]"
        />{" "}
        Tell us
      </motion.h1>
      <motion.h1
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-[60px] md:text-[90px] lg:text-[150px] xl:text-[180px] 2xl:text-[260px] leading-none"
      >
        all the things_
      </motion.h1>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="w-[360px] md:w-[530px] lg:w-[750px] m-auto mt-[70px] flex flex-col gap-[35px]"
      >
        <div className="flex flex-col md:flex-row items-center justify-between text-[16px] placeholder:text-[#C7C7C7]">
          <motion.div
            initial={{ y: -30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col"
          >
            <label>Name & Company</label>
            <input
              type="text"
              name="user_name"
              placeholder="Jhon from apple"
              className="border-b-[1px] w-[360px] md:w-[250px] lg:w-[300px] py-3 focus:outline-none"
              required
            />
          </motion.div>
          <motion.div
            initial={{ y: -30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: .2 }}
            className="flex flex-col"
          >
            <label>Your Email</label>
            <input
              type="email"
              name="user_email"
              placeholder="jhon@gmail.com"
              className="border-b-[1px] w-[360px] md:w-[250px] lg:w-[300px] py-3 focus:outline-none"
              required
            />
          </motion.div>
        </div>
        <div>
          <motion.label
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            I’m interested in...
          </motion.label>
          <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {interest.map((i, index) => (
              <motion.li
                initial={{ y: -30, opacity: 0 }}
                whileInView={{ x: 0, y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="w-[170px] h-[62px] mt-[25px] rounded-[47px] flex items-center justify-center border-[#C5C5C5] border-[1px] text-[14px] hover:outline-0 hover:bg-black hover:text-[#C5C5C5]"
              >
                {i.title}
              </motion.li>
            ))}
          </ul>
        </div>
        <div>
          <motion.label
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Project budget (USD)
          </motion.label>
          <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <motion.div initial={{ y: -30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6}}>
            <input
              type="text"
              name="user_budget"
              placeholder="Enter Your Price"
              className="placeholder:text-center text-center focus:outline-none w-[170px] h-[62px] mt-[25px] rounded-[47px] flex items-center justify-center border-[#C5C5C5] border-[1px] text-[14px]"
            />
            </motion.div>
            {budget.map((b, index) => (
              <motion.li
                initial={{ y: -30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="w-[170px] h-[62px] mt-[25px] rounded-[47px] flex items-center justify-center border-[#C5C5C5] border-[1px] text-[14px] hover:outline-0 hover:bg-black hover:text-[#C5C5C5]"
              >
                {b.title}
              </motion.li>
            ))}
          </ul>
        </div>
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-5"
        >
          <label>Tell us more about your project</label>
          <textarea
            name="message"
            placeholder="Something about your great idea"
            className="h-[100px] border-b-[1px] focus:outline-none"
          />
        </motion.div>
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <input
            type="submit"
            value="Send"
            className="w-[209px] h-[58px] rounded-[50px] bg-black text-white"
          />
        </motion.div>
      </form>
      <div className="mt-[100px] mb-[60px] flex flex-col gap-[60px] text-[10px] md:text-[14px] lg:text-[16px] 2xl:text-[22px] uppercase">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 0.6 }}
          className="w-full h-px bg-[#858585]"
        ></motion.div>
        <div className="flex flex-col lg:flex-row gap-3 items-center justify-between">
          <motion.h6
            initial={{ y: -30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            © All rights reserved by msh.studio
          </motion.h6>
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex gap-5 md:gap-[50px]"
          >
            <h6>Sitemap</h6>
            <h6>Privacy Poh6cy</h6>
            <h6>Terms of Use</h6>
            <h6>Cookie Policy</h6>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
