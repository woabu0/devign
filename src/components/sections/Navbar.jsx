import React, { useState } from "react";
import Logo from "../icons/logo";
import MenuIcon from "../icons/menu";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import data from "../data/data.json";

// Slide-out menu animation variants
const menuVariants = {
  open: {
    x: 0,
    transition: { type: "spring", stiffness: 300, damping: 30 },
  },
  close: {
    x: "100%",
    transition: { type: "spring", stiffness: 300, damping: 30 },
  },
};

export const Navbar = () => {
  const links = data.Navbar;
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div id="navbar" className="w-full sticky top-0 z-10 bg-[#f3f3f3]">
      {/* Top Navbar */}
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="px-5 w-full h-16 flex items-center justify-between"
      >
        <Logo className="w-32" />
        <motion.div
          onClick={toggleMenu}
          className="cursor-pointer text-2xl z-50"
        >
          <MenuIcon isOpen={menuOpen} />
        </motion.div>
      </motion.div>

      {/* Backdrop */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={closeMenu}
          className="fixed inset-0 z-10"
        />
      )}

      {/* Slide-out Menu */}
      <motion.div
        variants={menuVariants}
        animate={menuOpen ? "open" : "close"}
        initial="close"
        className="fixed top-0 right-0 h-full bg-white w-full md:w-1/3 p-6 z-10 shadow-2xl"
        style={{ transform: "translateX(100%)" }}
      >
        <div className="mt-5 mx-6">
          {/* Links */}
          <div className="mt-12">
            {links.map((link, index) => (
              <motion.div
                key={link.id}
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-2xl md:text-5xl leading-none py-2 cursor-pointer hover:text-gray-600"
                onClick={closeMenu}
              >
                <Link to={link.id} smooth={true} offset={-100}>
                  {link.title}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex justify-between mt-12">
            <div></div>
            <motion.div
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col gap-3"
            >
              <h6 className="text-[#C2C2C2] mb-2">Social</h6>
              <a href="#" className="hover:text-gray-600">
                LinkedIn
              </a>
              <a href="#" className="hover:text-gray-600">
                Behance
              </a>
              <a href="#" className="hover:text-gray-600">
                Dribbble
              </a>
              <a href="#" className="hover:text-gray-600">
                Instagram
              </a>
            </motion.div>
          </div>

          {/* Contact */}
          <motion.div
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8"
          >
            <h6 className="text-[#C2C2C2] mb-2">Get In touch</h6>
            <a href="mailto:contact@devign.com" className="hover:text-gray-600">
              contact@devign.com
            </a>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};
