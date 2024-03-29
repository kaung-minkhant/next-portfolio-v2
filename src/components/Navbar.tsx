"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NavLink from "./NavLink";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const menuItems: MenuItem[] = [
    { url: "/", title: "Home" },
    { url: "/about", title: "About" },
    { url: "/portfolio", title: "Portfolio" },
    { url: "/contact", title: "Contact" },
  ];
  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-9 md:px-14 lg:px-20 xl:px-36">
      {/* medium screen links */}
      <div className="hidden md:flex gap-5 w-1/3 text-lg">
        {
          menuItems.map(item => (
            <NavLink key={item.url} link={item} />
          ))
        }
      </div>
      {/* logo */}
      <div className="md:hidden lg:flex w-1/3 justify-center">
        <Link href={"/"}>LOGO</Link>
      </div>
      {/* medium screen icons */}
      <div className="hidden md:flex gap-5 w-1/3 justify-end">
        <Link href={'/'}>
          <Image src={"/github.png"} width={24} height={24} alt={"github icon"} />
        </Link>
        <Link href={'/'}>
          <Image src={"/instagram.png"} width={24} height={24} alt={"github icon"} />
        </Link>
        <Link href={'/'}>
          <Image src={"/linkedin.png"} width={24} height={24} alt={"github icon"} />
        </Link>
      </div>
      {/* responsive menu */}
      <div className="md:hidden">
        <button className="w-10 h-7 flex flex-col justify-between relative z-50" onClick={() => setOpen((prev) => !prev)}>
          <div className={ `w-10 h-1 ${open ? 'bg-white' : 'bg-black'} rounded` }></div>
          <div className={ `w-10 h-1 ${open ? 'bg-white' : 'bg-black'} rounded` }></div>
          <div className={ `w-10 h-1 ${open ? 'bg-white' : 'bg-black'} rounded` }></div>
        </button>
        {/* menu list */}
        {open && (
          <div className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col justify-center items-center gap-8 text-3xl">
            {menuItems.map((item) => (
              <Link href={item.url} key={item.url}>
                {item.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
