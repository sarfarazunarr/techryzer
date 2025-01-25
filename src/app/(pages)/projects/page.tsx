import Hero from '@/components/Hero'
import Project from '@/components/Project'
import React from 'react'

export async function generateMetadata() {
  return {
    title: "Projects - Techryzer",
    description:
      "Discover innovative open-source projects and cutting-edge web solutions by Techryzer. Access free and freemium tools designed to empower developers and businesses alike.",
    keywords: [
      "Techryzer projects",
      "open-source solutions",
      "web development tools",
      "freemium web solutions",
      "AI projects",
      "developer tools",
      "cutting-edge web solutions",
    ],
    openGraph: {
      title: "Projects - Techryzer",
      description:
        "Explore Techryzer's innovative open-source projects and web solutions. Unlock free and freemium tools for developers and businesses.",
      url: `${process.env.NEXT_PUBLIC_URL}/projects`,
      images: [
        {
          url: "/logo.jpg",
          width: 1200,
          height: 630,
          alt: "Techryzer Projects",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Projects - Techryzer",
      description:
        "Discover Techryzer's projects, including open-source innovations and freemium solutions for developers and businesses.",
      images: ["/logo.jpg"],
    },
  };
}


const Projects = () => {
  return (
    <>
      <Hero title='Our Projects' content='Explore the innovative websites powered and managed by Techryzer, as well as the software solutions developed by us, available for download. We are proud of our work and we are always happy to share our latest projects with you. From Web Development to AI Integrations, we offer a wide range of services to help you achieve your goals.' />
      <Project />
    </>
  )
}

export default Projects
