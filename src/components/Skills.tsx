"use client";
import { useRef } from "react";
import ScrollMouse from "./ScrollMouse";
import { motion, useInView } from "framer-motion";

function Skill({ skill }: { skill: string }) {
  return (
    <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
      {skill}
    </div>
  );
}
export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const isSkillInView = useInView(ref, {
    margin: "-120px",
  });
  const skills = [
    "HTML",
    "CSS",
    "Bootstrap",
    "Tailwindcss",
    "JavaScript",
    "React",
    "NextJS",
    "VewJS",
    "ThreeJS",
    "FramerMotion",
    "NodeJS",
    "ExpressJS",
    "Python",
    "Docker",
    "AWS",
  ];
  const skillVariants = {
    initial: { x: "-100vw" },
    animate: isSkillInView
      ? {
          x: 0,
          transition: { delay: 0.1, type: "spring", mass: 1, stiffness: 80, damping: 13 },
        }
      : {},
  };
  return (
    <div className="flex flex-col gap-12 justify-center" ref={ref}>
      <motion.h1
        className="text-2xl font-bold"
        variants={skillVariants}
        initial="initial"
        animate="animate"
        // transition={{
        //   type: "spring",
        //   d
        //   mass: 1,
        //   stiffness: 1,
        // }}
      >
        Skills
      </motion.h1>
      <motion.div
        className="flex gap-4 flex-wrap"
        variants={skillVariants}
        initial="initial"
        animate="animate"
      >
        {skills.map((skill) => (
          <Skill key={skill} skill={skill} />
        ))}
      </motion.div>
      <div className="">
        <ScrollMouse />
      </div>
    </div>
  );
}
