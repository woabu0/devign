import React, { useState } from "react";
import Logo from "../icons/logo";
import MenuIcon from "../icons/menu";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import data from "../data/data.json";
import { SOCIAL_LINKS, CONTACT_EMAIL, ANIMATION_DURATION } from "../../constants";

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
        transition={{ duration: ANIMATION_DURATION.SLOW }}
        className="px-4 sm:px-6 md:px-8 lg:px-12 w-full h-14 sm:h-16 flex items-center justify-between"
      >
        <Logo className="w-24 sm:w-28 md:w-32" />
        <motion.div
          onClick={toggleMenu}
          className="cursor-pointer text-xl sm:text-2xl z-50"
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
        className="fixed top-0 right-0 h-full bg-white w-full sm:w-2/3 md:w-1/2 lg:w-1/3 p-4 sm:p-6 md:p-8 z-10 shadow-2xl"
        style={{ transform: "translateX(100%)" }}
      >
        <div className="mt-4 sm:mt-5 mx-4 sm:mx-6">
          {/* Links */}
          <div className="mt-8 sm:mt-12">
            {links.map((link, index) => (
              <motion.div
                key={link.id}
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: ANIMATION_DURATION.SLOW, delay: index * 0.1 }}
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-none py-2 sm:py-3 cursor-pointer hover:text-gray-600"
                onClick={closeMenu}
              >
                <Link to={link.id} smooth={true} offset={-100}>
                  {link.title}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex justify-between mt-8 sm:mt-12">
            <div></div>
            <motion.div
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: ANIMATION_DURATION.SLOW, delay: 0.4 }}
              className="flex flex-col gap-2 sm:gap-3"
            >
              <h6 className="text-[#C2C2C2] mb-2 text-sm sm:text-base">Social</h6>
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="text-sm sm:text-base hover:text-gray-600 transition-colors"
                >
                  {social.name}
                </a>
              ))}
            </motion.div>
          </div>

          {/* Contact */}
          <motion.div
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: ANIMATION_DURATION.SLOW, delay: 0.6 }}
            className="mt-6 sm:mt-8"
          >
            <h6 className="text-[#C2C2C2] mb-2 text-sm sm:text-base">Get In touch</h6>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-sm sm:text-base hover:text-gray-600 transition-colors break-all"
            >
              {CONTACT_EMAIL}
            </a>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};
