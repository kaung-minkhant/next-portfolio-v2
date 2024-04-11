'use client'
import {motion} from 'framer-motion'
interface Props {
  sizeSub?: number 
}
export default function ScrollMouse({sizeSub=10}: Props) {
  const variants = {
    initial: {
      opacity: 0.2, y: 0,
    },
    animate: {
      opacity: 1, y: '10px',
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut'
      }
    }
  }
  return (
    <motion.svg
      variants={variants}
      initial='initial'
      animate='animate'
      width={40 - sizeSub}
      height={62 - sizeSub}
      viewBox="0 0 40 62"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.75"
        y="0.75"
        width="38.5"
        height="60.5"
        rx="19.25"
        fill="white"
        stroke="black"
        strokeWidth="2"
      />
      <path
        d="M19.4697 35.5303C19.7626 35.8232 20.2374 35.8232 20.5303 35.5303L25.3033 30.7574C25.5962 30.4645 25.5962 29.9896 25.3033 29.6967C25.0104 29.4038 24.5355 29.4038 24.2426 29.6967L20 33.9393L15.7574 29.6967C15.4645 29.4038 14.9896 29.4038 14.6967 29.6967C14.4038 29.9896 14.4038 30.4645 14.6967 30.7574L19.4697 35.5303ZM19.25 19L19.25 35L20.75 35L20.75 19L19.25 19Z"
        fill="black"
      />
    </motion.svg>
  );
}
