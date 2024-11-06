import Image from 'next/image'
import React from 'react'
import projectsdata from '../data/portfolio'
import Link from 'next/link'
import Card from './Card'

const Portfolio = () => {
    return (
        <>
            <h1 className='text-3xl md:text-4xl pt-20 pb-10 text-white font-semibold font-outfit text-center'>Some shots of portfolio</h1>
            <section className='grid grid-cols-1 md:grid-cols-4 gap-3 pb-20 mx-5'>
                {projectsdata.map((project, index) => {
                    return (
                        <Card img={project.img} key={index} title={project.title} description={project.description} link={project.video} btnText='View Demo' />
                    )
                })}

            </section>
        </>
    )
}

export default Portfolio
