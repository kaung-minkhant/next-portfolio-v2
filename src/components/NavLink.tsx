'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  link: MenuItem;
}
export default function NavLink({ link }: Props) {
  const pathname = usePathname() 
  
  return (
    <Link href={link.url} key={link.url} className={`rounded px-2 py-1 ${pathname === link.url && 'bg-black text-white'}`}>
      {link.title}
    </Link>
  );
}
