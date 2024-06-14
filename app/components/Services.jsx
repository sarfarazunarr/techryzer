import React from 'react'
import Image from "next/image";
import { hfont } from '../../fonts/getfonts'
import ButtonLine from './ButtonLine';

const Services = ({ title, htitle, subtitle, nos, page = false }) => {
  const data = [
    {
      title: "Web Development",
      description: "Make your web powerful"
    },
    {
      title: "App Development",
      description: "Make your Apps powerful"
    },
    {
      title: "AI Integration",
      description: "Make your Apps AIful"
    }
  ]
  return (
    <section>
      <div className="z-50 py-8 animate__animated animate__fadeIn">
        <h2 className={`${hfont.className} text-5xl text-center text-white pt-10 animate__animated animate__fadeInUp`}>{title}<span className="out-text">{htitle}</span></h2>
        <p className="text-xl text-center text-primary-500 pb-5">{subtitle}</p>
        <hr width={200} className="mx-auto border-b-4 rounded-md shadow-2xl shadow-primary-500 border-primary-400" />
        <div className="grid w-3/4 grid-cols-3 gap-4 h-auto mx-auto">
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
        {page ? '' :
          <ButtonLine link={"/"} title={"View All Services"} />
        }
      </div>

    </section>
  )
}

export default Services
