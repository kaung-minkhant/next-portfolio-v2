"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NavLink from "./NavLink";
import { AnimatePresence, motion } from "framer-motion";

  const keys: { [key: number]: number } = {
    37: 1,
    38: 1,
    39: 1,
    40: 1,
    33: 1,
    34: 1,
    35: 1,
    36: 1,
  };
  function preventDefault(e: any) {
    e.preventDefault();
    e.stopPropagation();
  }

  function preventDefaultForScrollKeys(e: any) {
    if (keys[e.keyCode]) {
      preventDefault(e);
      e.stopPropagation();
      return false;
    }
  }
  function disableScroll() {
    window.addEventListener("wheel", preventDefault, { passive: false }); // older FF
    window.addEventListener("touchmove", preventDefault, { passive: false }); // mobile
    window.addEventListener("keydown", preventDefaultForScrollKeys, false);
  }

  // call this to Enable
  function enableScroll() {
    window.removeEventListener("wheel", preventDefault, {}); // older FF
    window.removeEventListener("touchmove", preventDefault, false); // mobile
    window.removeEventListener("keydown", preventDefaultForScrollKeys, false);
    // window.removeEventListener("DOMMouseScroll", preventDefault, false);
    // window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
    // window.removeEventListener("touchmove", preventDefault, wheelOpt);
    // window.removeEventListener("keydown", preventDefaultForScrollKeys, false);
  }
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
      },
    },
    exit: {
      x: "-100vw",
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
  };
  const toggleNav = () => {
    if (!open) {
      console.log('disabling')
      disableScroll();
    } else {
      console.log('enabling')
      enableScroll();
    }
    setOpen(!open);
  };
  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-9 md:px-14 lg:px-20 xl:px-36 bg-transparent">
      <div className="hidden md:flex  justify-start md:gap-4 lg:gap-7 xl:gap-9 md:w-2/3 lg:w-3/5 text-lg bg-transparent">
        {menuItems.map((item) => (
          <NavLink key={item.url} link={item} />
        ))}
      </div>
      <div className="hidden md:flex gap-6 w-1/2 md:w-1/3 lg:w-1/5 justify-end">
        <Link href={"/"}>
          <Image
            src={"/github.png"}
            priority={true}
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
      <div className="md:hidden">
        <button
          className="w-10 h-8 flex flex-col justify-between relative z-[1]"
          onClick={toggleNav}
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
        <AnimatePresence mode="wait">
          {open && (
            <div className="absolute top-0 left-0 bottom-0 w-screen h-screen bg-transparent flex flex-col justify-center items-center z-[0] overflow-hidden">
              <motion.div
                className="absolute top-0 bottom-0 left-0 w-full bg-black text-white flex-grow flex flex-col justify-center items-center gap-8 text-3xl"
                variants={listVariants}
                initial="closed"
                // style={{
                //   transform: 'translateX(10px)'
                // }}
                animate="opened"
                exit="exit"
              >
                {menuItems.map((item) => (
                  <motion.div key={item.url} variants={listItemVariants}>
                    <Link href={item.url} onClick={toggleNav}>
                      {item.title}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
