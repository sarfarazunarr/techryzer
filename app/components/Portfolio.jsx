import { hfont } from '../../fonts/getfonts'
import Image from 'next/image'
import React from 'react'

const Portfolio = () => {
    const data = [
        {
            title: "BaraBazar"
        },
        {
            title: "AI Coder"
        },
        {
            title: "Warrantty"
        },
        {
            title: "File Extractor"
        }
    ]
    return (
        <div className="z-50 py-8">
            <h2 className={`${hfont.className} text-5xl text-center text-white pt-10`}>Some Shots <span className="out-text">of Portfolio</span></h2>
            <p className="text-xl text-center text-primary-500 pb-5">Here are some shots of our previous work</p>
            <hr width={200} className="mx-auto border-b-4 rounded-md shadow-2xl shadow-primary-500 border-primary-400" />
            <div className="grid w-3/4 grid-cols-4 gap-4 h-auto mt-5 mx-auto">
                {data.map((item, key) => {
                    return (
                        <article key={key} className="w-full relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-sm mx-auto mt-24">
                            <Image src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a" width={100} alt="University of Southern California" className="absolute inset-0 h-full w-full object-cover" height={100} />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                            <h3 className="z-10 mt-3 text-3xl font-bold text-white">{item.title}</h3>
                            <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">{item.description}</div>
                        </article>
                    )
                })}
            </div>
        </div>
    )
}

export default Portfolio
