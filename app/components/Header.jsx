import React from 'react'
import Link from 'next/link'
import Logo from './Logo'


const Header = () => {

    return (
        <nav className='flex justify-between items-center py-2 px-10 bg-transparent/45 backdrop-filter backdrop-blur-sm border-b-2 border-gray-800 fixed top-0 w-full z-50 animate__animated animate__fadeIn'>
            <div className='flex flex-col select-none animate__animated animate__fadeInLeft'>
                <Logo />
            </div>
            <div className='flex justify-center items-center animate__animated animate__fadeIn'>
                <ul className='list-none flex gap-5 text-[15px] text-white'>
                    <Link href={"/"} className='hover:text-primary-500 transition cursor-pointer duration-200'>Home</Link>
                    <Link href={"/blog"} className='hover:text-primary-500 transition cursor-pointer duration-200'>Blog</Link>
                    <Link href={"/services"} className='hover:text-primary-500 transition cursor-pointer duration-200'>Services</Link>
                    <Link href={"/projects"} className='hover:text-primary-500 transition cursor-pointer duration-200'>Projects</Link>
                    <Link href={"/offers"} className='hover:text-primary-500 transition cursor-pointer duration-200'>Offers</Link>
                    <Link href={"/careers"} className='hover:text-primary-500 transition cursor-pointer duration-200'>Careers</Link>
                    <Link href={"/about"} className='hover:text-primary-500 transition cursor-pointer duration-200'>About Us</Link>
                </ul>
            </div>
            <div className="flex justify-between gap-2 items-center animate__animated animate__fadeInRight">
                <Link href={"/contact"} className='bg-primary-500 border border-transparent hover:bg-primary-700 text-white rounded-full py-2 px-4'>Send Message</Link>
                <Link href={"/account"} className='bg-transparent  hover:bg-primary-500 text-white rounded-full py-2 px-4 border-2 border-primary-500 hover:border-transparent'>Account</Link>
            </div>
        </nav>
    )
}

export default Header
