import CardsSection from '@/components/CardsSection'
import Hero from '@/components/Hero'
import { cardsData, testimonialData } from '@/data/cardsdata'
import React from 'react'

export async function generateMetadata() {
  return {
    title: "About Us - Techryzer",
    description: "Wants to know about Techryzer? Here you will learn more about techryzer and thier features!",
    openGraph: {
      title: "About Us - Techryzer",
      description: "Wants to know about Techryzer? Here you will learn more about techryzer and thier features!",
      url: `${process.env.NEXT_PUBLIC_URL}/about`,
      images: [
        {
          url: '/logo.jpg',
          width: 400,
          height: 400,
          alt: "About",
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: "About Us - Techryzer",
      description: "Wants to know about Techryzer? Here you will learn more about techryzer and thier features!",
      images: ["/logo.jpg"],
    },
  };
}

const About = () => {
  return (
    <>
      <Hero title='About Us' content='Techryzer is dedicated to creating innovative web solutions that transform ideas into reality. We specialize in web development, app development, and AI integrations, ensuring that our projects not only meet but exceed the expectations of our clients. Our team is committed to delivering high-quality services that enhance digital experiences and make technology more accessible and beneficial for everyone.' />

      <CardsSection title="Why Choose Techryzer!" btnText="Connect Now" btnLink="/contact" cards={cardsData} />
      <CardsSection title="What people say about Techryzer!" btnText="Know About Us!" btnLink="/about" cards={testimonialData} />
    </>
  )
}

export default About
