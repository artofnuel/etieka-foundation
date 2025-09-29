"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import Link from "next/link";

const navLinks = [
  { label: "About", href: "/about-us" },
  { label: "Projects", href: "/projects" },
  { label: "Get Involved", href: "/get-involved", button: true },
  // { label: "Donate", href: "/donate" },
];

const headerVariants = {
  hidden: { y: -80, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 80 } },
};

const menuVariants = {
  closed: { x: "100%", opacity: 0 },
  open: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 60 } },
};

const NavigationHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.header
      className="fixed top-0 left-0 w-full h-auto z-50 bg-white backdrop-blur shadow-md text-background"
      initial="hidden"
      animate="visible"
      variants={headerVariants}
    >
      <nav className="max-w-7xl mx-auto h-[70px] flex items-center justify-between px-4 py-3 xl:px-0 md:py-4">
        {/* Logo or Brand */}
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-background"
        >
          Etieka Foundation
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className={`${
                  link.button
                    ? "p-2 px-4 bg-background text-white rounded-2xl"
                    : ""
                } text-background hover:underline font-medium transition-colors`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-background flex items-center justify-center w-10 h-10 rounded"
          aria-label="Open menu"
          onClick={() => setMenuOpen(true)}
        >
          <FaBars />
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 bg-black/40 z-50 flex"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <motion.div
              className="ml-auto w-3/4 max-w-xs bg-white h-screen flex flex-col"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 60 }}
            >
              <button
                className="self-end mb-8"
                aria-label="Close menu"
                onClick={() => setMenuOpen(false)}
              >
                <IoIosClose size={35} className="text-background m-3" />
              </button>
              <div className="w-full bg-white h-screen p-6">
                <ul className="w-full flex flex-col gap-6">
                  {navLinks.map((link) => (
                    <li className="w-full h-[40px]" key={link.label}>
                      <Link
                        href={link.href}
                        className={`flex items-center w-full h-full ${
                          link.button
                            ? "p-2 border border-background px-4 bg-background text-white rounded-2xl justify-center"
                            : ""
                        } text-lg text-background hover:text-background hover:bg-white font-medium transition-colors`}
                        onClick={() => setMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default NavigationHeader;
