"use client";
import { useScroll } from "framer-motion";
export default function ScrollProvider({
  children,
  container
}: {
  children: React.ReactNode;
  container: HTMLElement
}) {
  const {} = useScroll()
  console.log(container)
  return <>{children}</>;
}
