"use client";
import Link from 'next/link'
import React from 'react'
import Logo from './Logo'
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div className='hidden w-full bg-dark md:flex justify-between items-center border-b border-darkwhite sticky top-0 z-10'>
      <div className='flex items-center ml-10 justify-start font-manrop'>
            <Link className={`${pathname == "/" ? "navbarbtn-active" : "navbarbtn"} border-r-0`}style={{borderLeft: 0}} href={"/"}>Home</Link>
            <Link className={`${pathname == "/about" ? "navbarbtn-active" : "navbarbtn"}`} href={"/about"}>About</Link>
            <Link className={`${pathname == "/projects" ? "navbarbtn-active" : "navbarbtn"}`} href={"/projects"}>Projects</Link>
      </div>
      <Logo />
      <div className='flex items-center justify-end font-manrop mr-10'>
            <Link className={`${pathname == "/blog" ? "navbarbtn-active" : "navbarbtn"}`}  href={"/blog"}>Blog</Link>
            <Link className={`${pathname == "/career" ? "navbarbtn-active" : "navbarbtn"}`} href={"/career"}>Career</Link>
            <Link className={`${pathname == "/contact" ? "navbarbtn-active" : "navbarbtn"}`} style={{borderRight: 0}} href={"/contact"}>Contact</Link>
      </div>
    </div>
  )
}

export default Navbar
