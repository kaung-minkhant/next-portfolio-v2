"use client";

import { motion, useScroll, useTransform } from "framer-motion";
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
      style={{ display: "none", flexDirection: "column" }}
    >
      <div className="h-[600vh] relative" ref={containerRef}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl">
          My Works
        </div>
        <div className="sticky border-2 w-screen top-0 flex items-center h-screen overflow-hidden bg-gray-300">
          <div className="">
            <motion.div
              className="flex items-center w-fit border-2 border-green-500"
              style={{ x }}
            >
              <div className="h-screen w-screen flex items-center justify-center px-24 shrink-0"></div>
              {portfolioItems.map((item) => (
                <div
                  className="h-screen w-screen flex items-center justify-center px-24 shrink-0"
                  key={item.id}
                >
                  <div className="flex flex-col gap-8 text-black">
                    <h1 className="text-lg font-bold md:text-2xl lg:text-4xl">
                      {item.title}
                    </h1>
                    <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
                      <Image src={item.img} alt={item.title} fill />
                    </div>
                    <p className="w-80 md:w-96 lg:w-[500px] xl:w-[600px]">{item.desc}</p>
                    <Link href={item.link} className="flex justify-end">
                      <button className="p-2 text-sm md:p-4 md:text-lg bg-white text-gray-500 font-semibold rounded">See Demo</button>
                    </Link>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
      <div className="h-screen w-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-6xl">Do you have a project?</h1>
        <div className="relative">
          <motion.svg
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px]"
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
            className="w-16 h-16 md:w-28 md:h-28 absolute inset-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
            href={"/"}
          >
            Hire Me
          </Link>
        </div>
      </div>
    </div>
  );
}
