"use client";
import Biography from "@/components/Biography";
import Brain from "@/components/Brain";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import { useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);
  const { scrollYProgress } = useScroll({
    container: ref,
  });
  useEffect(() => {
    setShow(true);
  }, []);
  return (
    // <ScrollProvider container={document.getElementsByClassName('about')[0] as HTMLElement}>
    <div
      className="h-full overflow-auto lg-flex overlay"
      ref={ref}
      style={{
        display: "none",
      }}
    >
      {/* text container */}
      <div className="p-4 sm:p-9 md:p-14 lg:p-20 xl:p-36 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 h-full lg:w-2/3 xl:w-1/2">
        {/* biography */}
        <Biography />
        {/* skills */}
        <Skills />
        {/* experience */}
        <Experience />
      </div>
      {/* svg container */}
      <div className="hidden lg:block w-1/3 xl:w-1/2 sticky top-0">
        {show && <Brain scrollYProgress={scrollYProgress} />}
      </div>
    </div>
    // </ScrollProvider>
  );
}
