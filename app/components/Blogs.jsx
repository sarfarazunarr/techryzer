import { hfont } from '../../fonts/getfonts'
import Image from 'next/image'
import React from 'react'
import ButtonLine from './ButtonLine'
import img from '../../public/mylogo.png'

const Blogs = ({ title, htitle, subtitle, nob, page=false }) => {

        const data = [
        {
            title: "How to write a blog post",
            description: "Learn the steps to write an engaging blog post that captures your audience's attention."
        },
        {
            title: "Powerful Web Apps",
            description: "Understand how colors influence user behavior and create visually appealing designs."
        },
        {
            title: "Pshycology of color",
            description: "Understand how colors influence user behavior and create visually appealing designs."
        },
        {
            title: "Pshycology of color",
            description: "Understand how colors influence user behavior and create visually appealing designs."
        }
    ]
    const truncateText = (text) => {
      if (text.length > 50) {
        return text.slice(0, 50) + '...';
      }
      return text;
    }
    
    return (
        <div className="z-50 py-8">
            <h2 className={`${hfont.className} text-5xl text-center text-white pt-10 animate__animated animate__fadeInLeft`}>{title}<span className="out-text">{htitle ? htitle : ''}</span></h2>
            <p className="text-xl text-center text-primary-500 pb-5">{subtitle ? subtitle : ''}</p>
            <hr width={200} className="mx-auto border-b-4 rounded-md shadow-2xl shadow-primary-500 border-primary-400" />
            <div className="grid w-3/4 grid-cols-4 gap-4 h-auto mt-5 mx-auto">
                {data.map((item, key) => {
                    return (
                        <article key={key} className='w-full h-min bg-gray-800 rounded-md cursor-pointer group hover:shadow-xl hover:shadow-primary-500 transition-all duration-300 my-10'>
                            <Image src={img} className='h-2/4 object-cover rounded-md brightness-50 group-hover:brightness-100' />
                            <div className='p-4'>
                                <h4 className='text-left mt-3 text-xl text-white truncate'>{item.title}</h4>
                                <p className='text-left text-sm  text-gray-400'>{truncateText(item.description)}</p>
                            </div>
                        </article>
                    )
                })}
            </div>
            {page ? 
            '' : <ButtonLine title={"View More Blogs"} link={'/'} />}
        </div>
    )
}

export default Blogs