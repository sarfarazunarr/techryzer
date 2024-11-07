import React from 'react';

interface HeroProps {
  title: string;
  content: string;
  bgImage?: string;
}

const Hero = ({ title, content, bgImage }: HeroProps) => {
  return (
    <div
      className={`flex justify-start items-center flex-col w-full md:w-1/2 mx-auto gap-y-5 py-16 
        ${bgImage ? 'bg-center bg-cover filter backdrop:blur-md' : ''}`}
      style={{ backgroundImage: bgImage ? `url(${bgImage})` : undefined }}
    >
      <h2 className='text-5xl md:text-6xl px-3 md:px-0 text-center font-semibold font-outfit capitalize text-white'>
        {title}
      </h2>
      <p className='text-lightwhite text-center font-manrop tracking-wider leading-relaxed'>
        {content}
      </p>
    </div>
  );
};

export default Hero;
