"use client";
import { animate, motion } from "framer-motion";

const text = "Sayyyyy Helloooo";
export default function ContactHeader() {
  return (
    <div className="text-2xl">
      {text.split("").map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 3, repeat: Infinity, delay: index * 0.1 }}
        >
          {letter}
        </motion.span>
      ))}
    </div>
  );
}
