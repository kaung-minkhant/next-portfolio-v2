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
    animate: isInView
      ? {
          x: 0,
          transition: {
            delay: 0.1,
            type: "spring",
            mass: 1,
            stiffness: 80,
            damping: 16,
          },
        }
      : {},
  };
  const experience = [
    {
      title: "Junior Full Stack Developer",
      company: "Ackaya Tech Co. Ltd",
      description:
        "I develop and maintain internal applications using React and Vue and worked under a SCRUM team. As a backend, I had to setup and develop serverless functions and deployed them to AWS.",
      from: "Sept 2023",
      to: "March 2024",
    },
    {
      title: "Junior Full Stack Developer (NextJS)",
      company: "Digital Copilot",
      description:
        "My main role was management. I wrote some scripts that helps automate the process",
      from: "2021",
      to: "2023",
    },
  ];
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
        {experience.map((item, index) => (
          <ExperienceItem
            company={item.company}
            description={item.description}
            from={item.from}
            key={index}
            title={item.title}
            to={item.to}
            position={index % 2 !== 0 ? "right" : "left"}
          />
        ))}
      </motion.div>
    </div>
  );
}
