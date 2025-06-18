import React from 'react';
import Logo from './Logo';
import Link from 'next/link';
import { GrLocation } from 'react-icons/gr';
import { BiMailSend } from 'react-icons/bi';
import { BsWhatsapp } from 'react-icons/bs';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full pt-14">
      {/* Call to Action */}
      <section className="flex flex-col gap-y-5 my-5 w-full md:w-2/3 mx-auto text-center">
        <h3 className="font-outfit text-5xl md:text-6xl text-white font-semibold">
          Let&apos;s Build the Future with Techryzer!
        </h3>
        <p className="font-manrop text-lightwhite px-4 md:px-0 leading-relaxed">
          Unlock the potential of automation, AI, and modern development. Whether you&apos;re a startup, agency, or enterprise,
          Techryzer helps you streamline, scale, and succeed. Reach out now and discover how we can empower your business through technology.
        </p>
        <Link href="/quote" className="primarybtn w-fit mx-auto">
          Get a Quote
        </Link>
      </section>

      {/* Footer Links & Contact Info */}
      <section className="grid grid-cols-1 md:grid-cols-6 border-t border-darkwhite w-full mt-20">
        {/* Logo & Tagline */}
        <div className="col-span-2 pl-10 border-r border-darkwhite flex flex-col py-6 px-6 gap-y-4">
          <Logo />
          <p className="text-sm text-lightwhite font-manrop leading-relaxed">
            Transforming businesses with AI, automation, and scalable web solutions.
          </p>
        </div>

        {/* Links + Contact */}
        <div className="col-span-4">
          {/* Navigation */}
          <nav className="hidden md:flex justify-between border-b border-darkwhite text-lightwhite text-center p-4 text-base font-outfit font-medium">
            <Link href="/">Home</Link>
            <Link href="/about">About Us</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/career">Careers</Link>
          </nav>

          {/* Contact Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 h-full">
            <div className="border border-darkwhite p-5 flex flex-col gap-y-3">
              <div className="w-10 h-10 p-2 rounded-full bg-gray-700 flex items-center justify-center">
                <GrLocation size={24} className="text-lightwhite" />
              </div>
              <h3 className="text-white text-xl font-semibold">Our Head Office</h3>
              <p className="text-sm text-lightwhite">Opposite Post Office, Hala New, Sindh, Pakistan</p>
            </div>
            <div className="border border-darkwhite p-5 flex flex-col gap-y-3">
              <div className="w-10 h-10 p-2 rounded-full bg-gray-700 flex items-center justify-center">
                <BsWhatsapp size={24} className="text-lightwhite" />
              </div>
              <h3 className="text-white text-xl font-semibold">Connect on WhatsApp</h3>
              <Link href="https://wa.link/abnj43" className="text-sm text-lightwhite">+92 316 1563925</Link>
            </div>
            <div className="border border-darkwhite p-5 flex flex-col gap-y-3">
              <div className="w-10 h-10 p-2 rounded-full bg-gray-700 flex items-center justify-center">
                <BiMailSend size={24} className="text-lightwhite" />
              </div>
              <h3 className="text-white text-xl font-semibold">Email Us</h3>
              <p className="text-sm text-lightwhite">techryzer@gmail.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Footer */}
      <div className="flex flex-col-reverse md:flex-row justify-between px-5 py-5 md:py-3 items-center border-t border-darkwhite mt-8">
        <p className="text-lightwhite text-center md:text-left text-sm">
          © 2024 Techryzer. All rights reserved.
        </p>
        <div className="flex justify-center md:justify-end gap-5 mt-3 md:mt-0">
          <Link href="https://facebook.com/techryzer" aria-label="Facebook">
            <FaFacebook size={22} className="text-white hover:text-blue-400" />
          </Link>
          <Link href="https://linkedin.com/company/techryzer" aria-label="LinkedIn">
            <FaLinkedin size={22} className="text-white hover:text-blue-300" />
          </Link>
          <Link href="https://github.com/techryzer" aria-label="GitHub">
            <FaGithub size={22} className="text-white hover:text-gray-400" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
