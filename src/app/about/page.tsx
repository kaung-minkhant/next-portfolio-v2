"use client";
import Biography from "@/components/Biography";
import Brain from "@/components/Brain";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);
  const { scrollYProgress } = useScroll({
    target: ref,
  });
  useEffect(() => {
    setShow(true);
  }, []);
  return (
    // <ScrollProvider container={document.getElementsByClassName('about')[0] as HTMLElement}>
    <div
      className="flex-grow lg:flex overlay relative"
      ref={ref}
      style={{
        display: "none",
      }}
    >
      {/* text container */}
      <div className="p-4 sm:p-9 md:p-14 lg:p-20 lg:py-14 xl:p-36 xl:py-24 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 h-full flex-grow lg:basis-[15rem] xl:basis-[38rem]">
        {/* biography */}
        <Biography />
        {/* skills */}
        <Skills />
        {/* experience */}
        <Experience />
      </div>
      {/* svg container */}
      <div className="hidden lg:block sticky top-[6rem] h-[calc(100vh-6rem)] self-start flex-grow lg:basis-0 xl:basis-1">
        {show && <Brain scrollYProgress={scrollYProgress} />}
      </div>
    </div>
    // </ScrollProvider>
  );
}
