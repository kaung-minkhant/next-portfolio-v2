"use client";
import { AnimatePresence, motion } from "framer-motion";
import NavBar from "./Navbar";
import { usePathname } from "next/navigation";
import AfterTransitionProvider from "./AfterTransitionProvider";

export default function TransitionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <AnimatePresence mode="wait">
      <div
        key={pathname}
        className="w-screen h-screen bg-gradient-to-b from-blue-200 to-red-300"
      >
        <motion.div
          className="bg-black h-0 w-screen fixed rounded-b-[60px] z-40"
          // animate={{ height: "0vh" }}
          exit={{ height: "115vh" }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
        />
        <motion.div
          className="bg-black text-white m-auto w-fit h-fit fixed bottom-0 top-0 left-0 right-0 text-7xl cursor-default z-50"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >
          {pathname.substring(1).length === 0 ? "Home" : pathname.substring(1)}
        </motion.div>
        <motion.div
          className="bg-black h-screen w-screen fixed text-white cursor-default bottom-0 rounded-t-[60px] z-40"
          initial={{ height: "115vh" }}
          animate={{
            height: "0vh",
            transition: {
              delay: 0.5,
            },
          }}
        />

        <div className="h-24">
          <NavBar />
        </div>
        <div className="h-[calc(100vh-6rem)]">
          <AfterTransitionProvider>{children}</AfterTransitionProvider>
        </div>
      </div>
    </AnimatePresence>
  );
}