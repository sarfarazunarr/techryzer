import React from 'react'
import Logo from './Logo'
import Link from 'next/link'
import { GrLocation } from 'react-icons/gr'
import { BiMailSend } from 'react-icons/bi'
import { BsWhatsapp } from 'react-icons/bs'
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className='w-full pt-14'>
            <section className='flex flex-col gap-y-5 my-5 w-full md:w-2/3 mx-auto'>
                <h3 className='font-outfit text-6xl text-white text-center font-semibold'>Let&#39;s Work Together!</h3>
                <p className='font-manrop text-center text-lightwhite leading-relaxed px-2 md:px-0'>Take the first step towards a transformative future by partnering with us today. Explore our cutting-edge solutions in Blockchain, Data Engineering, and AI, and experience the power of innovation and seamless connectivity. Contact us now for a personalized consultation, and together, let&#39;s build a brighter tomorrow. Your success awaits!</p>
                <button className='primarybtn w-32 mx-auto'>Get a Quote</button>
            </section>

            <section className='grid grid-cols-1 md:grid-cols-6 border mt-20 border-darkwhite w-full'>
                <div className='col-span-2 pl-10 border-r border-darkwhite flex flex-col py-4 px-6 gap-y-4 justify-start items-start'>
                    <Logo />
                    <p className='text-sm text-lightwhite font-manrop leading-relaxed'>
                        YOUR OWN WEB!
                    </p>
                </div>
                <div className='flex flex-col col-span-4'>
                    <nav className='hidden md:flex justify-between border-b border-darkwhite text-lightwhite text-center p-4'>
                        <Link href={"/"} >Home</Link>
                        <Link href={"/about"} >About</Link>
                        <Link href={"/projects"} >Projects</Link>
                        <Link href={"/blog"} >Blogs</Link>
                        <Link href={"/contact"} >Contact</Link>
                        <Link href={"/career"} >Career</Link>
                    </nav>
                    <div className='grid grid-cols-1 md:grid-cols-3 h-full'>
                        <div className='w-full  border border-darkwhite p-5 flex justify-start items-start flex-col gap-y-3'>
                            <div className='w-10 h-10 p-2 flex justify-center items-center rounded-full bg-gray-700'>
                            <GrLocation size={25} className='text-lightwhite' />
                            </div>
                            <h3 className='text-white font-semibold text-2xl'>Our Head Office</h3>
                            <p className='text-sm text-lightwhite'>Opposite Post Office, Hala New, Sindh, Pakistan</p>
                        </div>
                        <div className='w-full  border border-darkwhite p-5 flex justify-start items-start flex-col gap-y-3'>
                            <div className='w-10 h-10 p-2 flex justify-center items-center rounded-full bg-gray-700'>
                            <BsWhatsapp size={25} className='text-lightwhite' />
                            </div>
                            <h3 className='text-white font-semibold text-2xl'>Connect on Whatsapp</h3>
                            <p className='text-sm text-lightwhite'>+92 301 2591774</p>
                        </div>
                        <div className='w-full  border border-darkwhite p-5 flex justify-start items-start flex-col gap-y-3'>
                            <div className='w-10 h-10 p-2 flex justify-center items-center rounded-full bg-gray-700'>
                            <BiMailSend size={25} className='text-lightwhite' />
                            </div>
                            <h3 className='text-white font-semibold text-2xl'>Mail Us</h3>
                            <p className='text-sm text-lightwhite'>techryzer@gmail.com</p>
                        </div>
                    </div>
                </div>
            </section>
            <div className='flex flex-col-reverse md:flex-row justify-between px-5 py-5 md:py-2'>
                <p className='text-lightwhite text-center md:text-left'>Copyright 2024 All rights reserved by Techryzer.</p>
                <div className='flex justify-center mb-4 md:mb-0 md:justify-end gap-5'>
                    <Link href={"https://facebook.com/techryzer"}>
                        <FaFacebook size={25} className='text-white' />
                    </Link>
                    <Link href={"https://linkedin.com/company/techryzer"}>
                        <FaLinkedin size={25} className='text-white' />
                    </Link>
                    <Link href={"https://github.com/techryzer"}>
                        <FaGithub size={25} className='text-white' />
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer
