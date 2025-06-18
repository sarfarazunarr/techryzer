import React from 'react'
import projectsdata from '../data/portfolio'
import Card from './Card'
import Link from 'next/link';
import { BsArrowRight } from 'react-icons/bs';

const Portfolio = ({length}: {length?: number}) => {
    const numberOfResults = length ? length : projectsdata.length;
    return (
        <section className="pt-20 pb-10">
            <h3 className='text-3xl md:text-4xl text-white font-semibold font-outfit text-center'>Some shots of portfolio</h3>
            <section className='grid grid-cols-1 md:grid-cols-4 gap-3 py-5 mx-5'>
                {projectsdata.slice(0, numberOfResults).map((project, index) => {
                    return (
                        <Card img={project.img} key={index} title={project.title} description={project.description} link={project.video} btnText='View Demo' />
                    )
                })}
            </section>
            {length && projectsdata.length > numberOfResults && <Link href={"/portfolio"} className="primarybtn w-44 flex items-center justify-center gap-3 group mx-auto">
                    View All!{" "}
                    <BsArrowRight
                        size={20}
                        className="group-hover:translate-x-3 transition-transform duration-300 ease-linear"
                    />
                </Link>}
        </section>
    )
}

export default Portfolio
