"use client";
import { motion, useIsPresent } from "framer-motion";
import { useEffect } from "react";

export default function AfterTransitionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const isPresent = useIsPresent();
  useEffect(() => {
    if (isPresent && document.getElementsByClassName("overlay")[0]) {
      (
        document.getElementsByClassName("overlay")[0] as HTMLElement
      ).style.display = "flex";
    }
  }, [isPresent]);
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-250vh" }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
}
