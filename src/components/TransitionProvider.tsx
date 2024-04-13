"use client";
import { AnimatePresence, motion } from "framer-motion";
import NavBar from "./Navbar";
import { usePathname } from "next/navigation";
import AfterTransitionProvider from "./AfterTransitionProvider";
import { useEffect, useRef } from "react";

export default function TransitionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const coverRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const timeout = setTimeout(() => {
      coverRef.current!.style.zIndex = "-1";
    }, 1500);
    return () => clearTimeout(timeout);
  }, [pathname]);
  return (
    <AnimatePresence mode="wait">
      <div
        key={pathname}
        className="w-screen min-h-screen bg-gradient-to-b from-blue-200 to-red-300"
      >
        <motion.div
          className="bg-black h-screen w-screen fixed rounded-b-[60px] z-[1]"
          animate={{ height: "0vh" }}
          exit={{ height: "115vh" }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
        />
        <motion.div
          ref={coverRef}
          className="bg-black text-white m-auto w-fit h-fit absolute bottom-0 top-0 left-0 right-0 text-7xl cursor-default z-[3]"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >
          {pathname.substring(1).length === 0
            ? "Home"
            : pathname.substring(1)[0].toUpperCase() +
              pathname.substring(1).slice(1)}
        </motion.div>
        <motion.div
          className="bg-black h-screen w-screen fixed text-white cursor-default bottom-0 rounded-t-[60px] z-[1]"
          initial={{ height: "115vh" }}
          animate={{
            height: "0vh",
            transition: {
              delay: 0.5,
            },
          }}
        />

        <div className="h-24 nav-container relative z-[10]">
          <NavBar />
        </div>
        <div className="min-h-[calc(100vh-6rem)] flex flex-col relative z-[0]">
          <AfterTransitionProvider>{children}</AfterTransitionProvider>
        </div>
      </div>
    </AnimatePresence>
  );
}
