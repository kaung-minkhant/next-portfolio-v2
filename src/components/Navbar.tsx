"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NavLink from "./NavLink";
import { motion } from "framer-motion";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const menuItems: MenuItem[] = [
    { url: "/", title: "Home" },
    { url: "/about", title: "About" },
    { url: "/portfolio", title: "Portfolio" },
    { url: "/contact", title: "Contact" },
  ];
  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255, 255, 255)",
    },
  };
  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };
  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255, 255, 255)",
    },
  };

  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      }
    },
  };

  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  }

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-9 md:px-14 lg:px-20 xl:px-36">
      {/* medium screen links */}
      <div className="hidden md:flex gap-5 w-1/3 text-lg">
        {menuItems.map((item) => (
          <NavLink key={item.url} link={item} />
        ))}
      </div>
      {/* logo */}
      <div className="md:hidden lg:flex w-1/3 justify-center">
        <Link href={"/"}>LOGO</Link>
      </div>
      {/* medium screen icons */}
      <div className="hidden md:flex gap-5 w-1/3 justify-end">
        <Link href={"/"}>
          <Image
            src={"/github.png"}
            width={24}
            height={24}
            alt={"github icon"}
          />
        </Link>
        <Link href={"/"}>
          <Image
            src={"/instagram.png"}
            width={24}
            height={24}
            alt={"github icon"}
          />
        </Link>
        <Link href={"/"}>
          <Image
            src={"/linkedin.png"}
            width={24}
            height={24}
            alt={"github icon"}
          />
        </Link>
      </div>
      {/* responsive menu */}
      <div className="md:hidden">
        <button
          className="w-10 h-8 flex flex-col justify-between relative z-50"
          onClick={() => setOpen((prev) => !prev)}
        >
          <motion.div
            className={`w-10 h-1 bg-black rounded origin-left`}
            variants={topVariants}
            animate={open ? "opened" : "closed"}
          ></motion.div>
          <motion.div
            className={`w-10 h-1 bg-black rounded`}
            variants={centerVariants}
            animate={open ? "opened" : "closed"}
          ></motion.div>
          <motion.div
            className={`w-10 h-1 bg-black rounded origin-left`}
            variants={bottomVariants}
            animate={open ? "opened" : "closed"}
          ></motion.div>
        </button>
        {/* menu list */}
        {open && (
          <motion.div
            className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col justify-center items-center gap-8 text-3xl z-40"
            variants={listVariants}
            initial="closed"
            animate="opened"
          >
            {menuItems.map((item) => (
              <motion.div key={item.url} variants={listItemVariants}>
                <Link href={item.url}>
                  {item.title}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}
