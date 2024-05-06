"use client";

import { AnimatePresence, motion, useIsPresent } from "framer-motion";
import { anim } from "@/lib/utils";
import IsPresenceWrapper from "./IsPresenceWrapper";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function SlideTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const numberOfSlides = 5;
  const slides = {
    initial: {
      top: "0%",
    },
    enter: (custom: any) => ({
      top: "100%",
      transition: {
        duration: 0.5,
        delay: custom * 0.1,
      },
      transitionEnd: {
        top: "0%",
        height: "0%",
      },
    }),
    exit: (custom: any) => ({
      height: "100%",
      transition: {
        duration: 0.5,
        delay: custom * 0.1,
      },
    }),
  };

  useEffect(() => {
    let timeout: any;
    if (document !== undefined) {
      timeout = setTimeout(() => {
        const ele = document.getElementsByClassName("slider-page-transition")[0] as HTMLElement;
        ele.style.zIndex = '-1'
      }, 1500);
    }
    return () => clearTimeout(timeout)
  }, []);

  return (
    <AnimatePresence mode="wait">
      <IsPresenceWrapper key={pathname}>
        <div className="slider-page-transition flex w-screen h-full fixed top-[6rem] left-0 z-[5]">
          {[...Array(numberOfSlides)].map((_, index) => (
            <motion.div
              key={index}
              className="h-full bg-black w-full relative"
              {...anim(slides, numberOfSlides - index)}
              // initial={{
              //   top: "0%",
              //   height: "0%",
              // }}
              // animate={{
              //   top: "100%",
              // }}
              // transition={{
              //   duration: 0.5,
              //   delay: (numberOfSlides - index) * 0.1,
              // }}
            />
          ))}
        </div>
        {children}
      </IsPresenceWrapper>
    </AnimatePresence>
  );
}
