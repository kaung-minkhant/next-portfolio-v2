"use client";

import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Portfolio() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `-${100 - 100 / (5 + 1)}%`]
  );
  // useMotionValueEvent(x, "change", (latest) => {
  //   console.log(latest);
  // });
  // useMotionValueEvent(scrollYProgress, "change", (latest) => {
  //   console.log(latest);
  // });
  const portfolioItems: PortfolioItem[] = [
    {
      id: "1",
      color: "from-red-300 to-blue-300",
      title: "React Commerce",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
      img: "https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      link: "https://lama.dev",
    },
    {
      id: "2",
      color: "from-blue-300 to-violet-300",
      title: "Next.js Medium Blog",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
      img: "https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      link: "https://lama.dev",
    },
    {
      id: "3",
      color: "from-violet-300 to-purple-300",
      title: "Vanilla Book App",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
      img: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      link: "https://lama.dev",
    },
    {
      id: "4",
      color: "from-purple-300 to-red-300",
      title: "Spotify Music App",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
      img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      link: "https://lama.dev",
    },
    {
      id: "5",
      color: "from-purple-300 to-red-300",
      title: "Spotify Music App",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
      img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      link: "https://lama.dev",
    },
  ];
  return (
    <div
      className="overlay"
      style={{ flexDirection: "column" }}
    >
      <div className="h-[600vh] w-screen relative" ref={containerRef}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-6xl md:text-7xl lg:text-8xl">
          My Works
        </div>
        <div className="sticky w-screen top-[6rem] flex items-center h-screen overflow-hidden">
          <div className="">
            <motion.div
              className="flex items-center w-fit border-2"
              style={{ x }}
            >
              <div className="h-screen w-screen flex items-center justify-center px-24 shrink-0"></div>
              {portfolioItems.map((item) => (
                <div
                  className="h-screen w-screen flex items-center justify-center px-0 -mt-10 lg:-mt-24 shrink-0"
                  key={item.id}
                >
                  <div className="flex flex-col gap-6 text-black">
                    <h1 className="font-bold text-2xl sm:text-3xl">
                      {item.title}
                    </h1>
                    <div className="relative w-80 h-56 sm:w-[350px] sm:h-[210px] md:w-96 md:h-64 lg:w-[500px] lg:h-[350px]">
                      <Image
                        src={item.img}
                        alt={item.title}
                        priority={true}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    <p className="w-80 sm:w-[350px] md:w-96 lg:w-[500px]">
                      {item.desc}
                    </p>
                    <Link href={item.link} className="flex justify-end">
                      <button className="p-2 text-sm md:p-4 md:text-lg bg-white text-gray-500 font-semibold rounded">
                        See Demo
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
      <div className="h-screen w-screen flex flex-col gap-8 items-center justify-center text-center pt-[6rem]">
        <h1 className="text-3xl sm:text-5xl">Do you have a project?</h1>
        <div className="relative">
          <motion.svg
            viewBox="0 0 300 300"
            className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px]"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0"
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Full Stack Developer and Enginner
              </textPath>
            </text>
          </motion.svg>
          <Link
            className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] absolute inset-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
            href={"/contact"}
          >
            Hire Me
          </Link>
        </div>
      </div>
    </div>
  );
}
