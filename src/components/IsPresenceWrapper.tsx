"use client";

import { useIsPresent } from "framer-motion";
import { useEffect } from "react";

export default function IsPresenceWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const isPresent = useIsPresent();
  useEffect(() => {
    console.log(document.getElementsByClassName("overlay")[0]);
    console.log({ isPresent });
    if (isPresent && document.getElementsByClassName("overlay")[0]) {
      (
        document.getElementsByClassName("overlay")[0] as HTMLElement
      ).style.display = "flex";
      (
        document.getElementsByClassName("page-title")[0] as HTMLElement
      ).style.display = "none";
    }
  }, [isPresent]);
  return (
    <div className="min-h-[calc(100vh-6rem)] flex flex-col relative">
      {children}
    </div>
  );
}
