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
    margin: "-150px",
  });
  const skills = [
    "JavaScript",
    "HTML",
    "CSS",
    "Bootstrap",
    "Tailwindcss",
    "React",
    "NextJS",
  ];
  const skillVariants = {
    initial: { x: "-100vw" },
    animate: isSkillInView ? { x: 0, transition: { delay: 0.2 } } : {},
  };
  return (
    <div className="flex flex-col gap-12 justify-center" ref={ref}>
      {/* title */}
      <motion.h1
        className="text-2xl font-bold"
        variants={skillVariants}
        initial='initial'
        animate='animate'
      >
        Skills
      </motion.h1>
      {/* skill list  */}
      <motion.div
        className="flex gap-4 flex-wrap"
        variants={skillVariants}
        initial='initial'
        animate='animate'
      >
        {skills.map((skill) => (
          <Skill key={skill} skill={skill} />
        ))}
      </motion.div>
      {/* scroll svg */}
      <div className="">
        <ScrollMouse />
      </div>
    </div>
  );
}
