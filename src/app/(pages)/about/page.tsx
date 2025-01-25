import CardsSection from '@/components/CardsSection'
import Hero from '@/components/Hero'
import { cardsData, testimonialData } from '@/data/cardsdata'
import React from 'react'

export async function generateMetadata() {
  return {
    title: "About Us - Techryzer",
    description:
      "Discover more about Techryzer, a forward-thinking startup focused on web-based solutions and innovative AI technologies. Learn about our mission, vision, and the value we bring to our clients.",
    openGraph: {
      title: "About Us - Techryzer",
      description:
        "Explore Techryzer's journey and expertise in delivering cutting-edge web and AI solutions. Learn how we prioritize quality, innovation, and customer satisfaction.",
      url: `${process.env.NEXT_PUBLIC_URL}/about`,
      images: [
        {
          url: "/logo.jpg",
          width: 400,
          height: 400,
          alt: "About Techryzer",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "About Us - Techryzer",
      description:
        "Learn more about Techryzer, your trusted partner in web and AI innovations. Discover our mission, values, and services tailored to meet your needs.",
      images: ["/logo.jpg"],
    },
  };

}

const About = () => {
  return (
    <>
      <Hero
        title="About Us"
        content="At Techryzer, we are passionate about revolutionizing the digital landscape with cutting-edge web solutions and AI-powered innovations. From web and app development to seamless AI integration, we transform bold ideas into impactful realities. Our mission is to deliver high-quality, user-centric solutions that empower businesses and individuals to thrive in a tech-driven world. Join us as we make technology more accessible, innovative, and beneficial for everyone."
      />


      <CardsSection title="Why Choose Techryzer!" btnText="Connect Now" btnLink="/contact" cards={cardsData} />
      <CardsSection title="What people say about Techryzer!" btnText="Know About Us!" btnLink="/about" cards={testimonialData} />
    </>
  )
}

export default About
