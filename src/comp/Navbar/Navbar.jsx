import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import link from "./navData.json";

const v = {
  open: {
    y: "-8%",
    right: "10px",
  },
  close: {
    y: "-120%",
  },
};

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div id="navbar" className="w-full sticky top-0 z-10">
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="px-5 w-full h-[65px] flex items-center justify-between b roman"
      >
        <ul className="hidden lg:flex items-center gap-5">
          <motion.li whileHover={{ scale: 1.2 }}>
            <a href="#" target="_blank">
              <img src="img/whatsapp.svg" alt="whatsapp" />
            </a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.2 }}>
            <a
              href="https://www.linkedin.com/in/shyed?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              target="_blank"
            >
              <img src="img/linkedin.svg" alt="linkedin" />
            </a>
          </motion.li>
        </ul>
        <motion.ul className="flex items-center gap-10 text-[22px]">
          <motion.li
            whileHover={{ borderBottom: "3px solid", y: -5 }}
            className="hidden lg:flex"
          >
            Home
          </motion.li>
          <motion.li
            whileHover={{ borderBottom: "3px solid", y: -5 }}
            className="hidden lg:flex"
          >
            Introduction
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }}>
            <img src="img/logo.svg" alt="logo" />
          </motion.li>
          <motion.li
            whileHover={{ borderBottom: "3px solid", y: -5 }}
            className="hidden lg:flex"
          >
            Showcase
          </motion.li>
          <motion.li
            whileHover={{ borderBottom: "3px solid", y: -5 }}
            className="hidden lg:flex"
          >
            Let's talk!
          </motion.li>
        </motion.ul>
        <motion.div
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
        >
          <img
            src="img/menu.svg"
            alt="menu"
            className="w-[26px] h-[12px]"
          />
        </motion.div>
      </motion.div>
      <motion.div
        variants={v}
        animate={menuOpen ? "open" : "close"}
        initial="close"
        className="text-[14px] fixed bg-[#fff] w-[300px] md:w-[565px] p-3 rounded-[25px]"
      >
        <motion.div
          initial={{ x: 10, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
          className="absolute right-[20px] h-10 w-[100px] flex items-center justify-center border-black border-[1px] rounded-[70px]"
        >
          Close
        </motion.div>
        <div className="my-[30px] mx-10">
          <motion.h6
            initial={{ x: -10, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Contact
          </motion.h6>
          <div className="mt-[30px] 2xl:mt-[50px]">
            {link.map((l, index) => (
              <motion.div
                initial={{ y: -30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-[25px] md:text-[44px] leading-none"
              >
                <Link
                  to={l.id}
                  smooth={true}
                  offset={-100}
                >
                  {l.title}
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-between">
            <div></div>
            <motion.div
              initial={{ y: -30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col gap-1 md:gap-3 2xl:gap-5"
            >
              <h6 className="text-[#C2C2C2] gap-1 md:mb-3">Social</h6>
              <h6>LinkedIn</h6>
              <h6>Behance</h6>
              <h6>Dribbble</h6>
              <h6>Instagram</h6>
            </motion.div>
          </div>
          <motion.div
            initial={{ y: -30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h6 className="text-[#C2C2C2] mb-2">Get In touch</h6>
            <h6>Contact@Mshstudio.com</h6>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};
