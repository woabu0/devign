import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import data from "../data/data.json"

const v = {
  open: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30
    }
  },
  close: {
    x: "100%",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30
    }
  },
};

export const Navbar = () => {
  const link = data.Navbar
  const [menuOpen, setMenuOpen] = useState(false);

  const handleCloseMenu = () => {
    setMenuOpen(false);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <div id="navbar" className="w-full sticky bg-transparent top-0 z-10">
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="px-5 w-full h-[65px] flex items-center justify-between bg-white roman"
      >
        <ul className="hidden lg:flex items-center gap-5">
          <motion.li whileHover={{ scale: 1.2 }}>
            <a href="#" target="_blank">
              <img src="img/whatsapp.svg" alt="whatsapp" />
            </a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.2 }}>
            <a href="#" target="_blank">
              <img src="img/linkedin.svg" alt="linkedin" />
            </a>
          </motion.li>
        </ul>
        
        <motion.ul className="hidden lg:flex items-center gap-10 text-[22px]">
          <motion.li
            whileHover={{ borderBottom: "3px solid", y: -5 }}
          >
            Home
          </motion.li>
          <motion.li
            whileHover={{ borderBottom: "3px solid", y: -5 }}
          >
            Introduction
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }}>
            <img src="img/logo.svg" alt="logo" />
          </motion.li>
          <motion.li
            whileHover={{ borderBottom: "3px solid", y: -5 }}
          >
            Showcase
          </motion.li>
          <motion.li
            whileHover={{ borderBottom: "3px solid", y: -5 }}
          >
            Let's talk!
          </motion.li>
        </motion.ul>

        {/* Logo for mobile */}
        <motion.div className="lg:hidden" whileHover={{ scale: 1.1 }}>
          <img src="img/logo.svg" alt="logo" />
        </motion.div>

        {/* Menu button - ALWAYS VISIBLE ON ALL DEVICES */}
        <motion.div
          onClick={() => setMenuOpen(true)}
          className="cursor-pointer"
          whileHover={{ scale: 1.1 }}
        >
          <img src="img/menu.svg" alt="menu" className="w-[26px] h-[12px]" />
        </motion.div>
      </motion.div>

      {/* Backdrop - FOR ALL DEVICES */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={handleCloseMenu}
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
        />
      )}

      {/* Slide-out Menu - FOR ALL DEVICES */}
      <motion.div
        variants={v}
        animate={menuOpen ? "open" : "close"}
        initial="close"
        className="fixed top-0 right-0 h-full bg-white w-[300px] md:w-[565px] p-6 z-50 shadow-2xl"
        style={{ transform: "translateX(100%)" }}
      >
        <motion.div
          initial={{ x: 10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          onClick={handleCloseMenu}
          className="absolute right-6 top-6 h-10 w-20 flex items-center justify-center border-black border-[1px] rounded-[70px] cursor-pointer hover:bg-gray-100"
        >
          Close
        </motion.div>
        
        <div className="mt-20 mx-6">
          <motion.h6
            initial={{ x: -10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-lg font-semibold"
          >
            Contact
          </motion.h6>
          
          <div className="mt-8">
            {link.map((l, index) => (
              <motion.div
                key={l.id}
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-[25px] md:text-[44px] leading-none py-2 cursor-pointer hover:text-gray-600"
                onClick={handleLinkClick}
              >
                <Link 
                  to={l.id} 
                  smooth={true} 
                  offset={-100}
                  onClick={handleLinkClick}
                >
                  {l.title}
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-between mt-12">
            <div></div>
            <motion.div
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col gap-3"
            >
              <h6 className="text-[#C2C2C2] mb-2">Social</h6>
              <a href="#" className="hover:text-gray-600">LinkedIn</a>
              <a href="#" className="hover:text-gray-600">Behance</a>
              <a href="#" className="hover:text-gray-600">Dribbble</a>
              <a href="#" className="hover:text-gray-600">Instagram</a>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8"
          >
            <h6 className="text-[#C2C2C2] mb-2">Get In touch</h6>
            <a href="mailto:Contact@Mshstudio.com" className="hover:text-gray-600">
              Contact@Mshstudio.com
            </a>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};