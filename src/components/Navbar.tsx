"use client";
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Logo from './Logo'
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    setIsOpen(false);
  }, [pathname])
  return (
    <div className='w-full bg-dark flex justify-between items-center border-b border-darkwhite sticky py-3 md:py-0 top-0 z-10'>
      <div className='lg:flex hidden items-center ml-10 justify-start font-manrop'>
        <Link className={`${pathname == "/" ? "navbarbtn-active" : "navbarbtn"} border-r-0`} style={{ borderLeft: 0 }} href={"/"}>Home</Link>
        <Link className={`${pathname == "/about" ? "navbarbtn-active" : "navbarbtn"}`} href={"/about"}>About</Link>
        <Link className={`${pathname == "/projects" ? "navbarbtn-active" : "navbarbtn"}`} href={"/projects"}>Projects</Link>
      </div>
      <Logo />
      <div className='lg:flex hidden items-center justify-end font-manrop mr-10'>
        <Link className={`${pathname == "/blog" ? "navbarbtn-active" : "navbarbtn"}`} href={"/blog"}>Blog</Link>
        <Link className={`${pathname == "/career" ? "navbarbtn-active" : "navbarbtn"}`} href={"/career"}>Career</Link>
        <Link className={`${pathname == "/contact" ? "navbarbtn-active" : "navbarbtn"}`} style={{ borderRight: 0 }} href={"/contact"}>Contact</Link>
      </div>
      {/* Mobile menu button */}
      <div className='lg:hidden flex items-center mr-4'>
        <button className='navbar-btn' onClick={() => setIsOpen(!isOpen)}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="w-10 h-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>
      {/* Mobile menu */}
      {isOpen && (
        <div className='lg:hidden fixed top-0 left-0 w-full h-screen bg-dark/45 filter backdrop-blur-md z-20'>
          <button className='navbar-btn relative w-full' onClick={() => setIsOpen(!isOpen)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="w-8 h-8 absolute right-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className='flex flex-col items-center justify-start pt-10 h-full'>
            <Logo />
            <Link className={`${pathname == "/" ? "navbarbtn-active block" : "navbarbtn"} w-full text-center mt-5`} href={"/"}>Home</Link>
            <Link className={`${pathname == "/about" ? "navbarbtn-active" : "navbarbtn"} w-full text-center`} href={"/about"}>About</Link>
            <Link className={`${pathname == "/projects" ? "navbarbtn-active" : "navbarbtn"} w-full text-center`} href={"/projects"}>Projects</Link>
            <Link className={`${pathname == "/blog" ? "navbarbtn-active" : "navbarbtn"} w-full text-center`} href={"/blog"}>Blog</Link>
            <Link className={`${pathname == "/career" ? "navbarbtn-active" : "navbarbtn"} w-full text-center`} href={"/career"}>Career</Link>
            <Link className={`${pathname == "/contact" ? "navbarbtn-active" : "navbarbtn"} w-full text-center`} href={"/contact"}>Contact</Link>
          </div>
        </div>
      )}
    </div>
  )
}

export default Navbar;