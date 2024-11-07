import Hero from '@/components/Hero'
import Project from '@/components/Project'
import React from 'react'
export async function generateMetadata() {
  return {
    title: "Projects - Techryzer",
    description: "Explore amazing open source projects and web solutions that are available for free and some are freemium!",
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
