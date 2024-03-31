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
  const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${100 - 100/(5+1)}%`]);
  useMotionValueEvent(x, "change", (latest) => {
    console.log(latest);
  });
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
    <div className="overlay" style={{ display: "none" }}>
      <div className="h-[600vh] relative" ref={containerRef}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl">
          My Works
        </div>
        <div
          // style={{ x }}
          className="sticky border-2 border-red-500 w-screen top-0 h-screen overflow-hidden"
        >
          <div className="">
            <motion.div className="flex items-center w-fit border-2 border-green-500" style={{ x }}>
              <div className="h-screen w-screen flex items-center justify-center px-24 shrink-0"></div>
              {portfolioItems.map((item) => (
                <div
                  className="h-screen w-screen flex items-center justify-center px-24 shrink-0"
                  key={item.id}
                >
                  <div className="flex flex-col gap-8 text-black">
                    <h1 className="">{item.title}</h1>
                    <div className="relative">
                      <Image src={item.img} alt={item.title} fill />
                    </div>
                    <p className="">{item.desc}</p>
                    <Link href={item.link}>
                      <button className="">See Demo</button>
                    </Link>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
