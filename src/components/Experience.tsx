"use client";
import { useRef } from "react";
import ExperienceItem from "./ExperienceItem";
import { motion, useInView } from "framer-motion";

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    margin: "-150px",
  });
  const experienceVariants = {
    initial: { x: "-100vw" },
    animate: isInView ? { x: 0, transition: { delay: 0.2 } } : {},
  };
  return (
    <div className="flex flex-col gap-12 justify-between pb-8" ref={ref}>
      <motion.h1
        className="text-2xl font-bold"
        variants={experienceVariants}
        initial="initial"
        animate="animate"
      >
        Experience
      </motion.h1>

      {/* experience list */}
      <motion.div
        className=""
        variants={experienceVariants}
        initial="initial"
        animate="animate"
      >
        {/* list item */}
        <ExperienceItem />
        <ExperienceItem position="right" />
        <ExperienceItem />
      </motion.div>
    </div>
  );
}
