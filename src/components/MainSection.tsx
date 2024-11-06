import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const MainSection = ({title, content, image, alt, link, btnText, span}: {title: string, content: string, image: string, alt: string, link:string, btnText: string, span?:string}) => {
    return (
        <section className='flex flex-col-reverse md:flex-row md:items-center mx-2 md:mx-32'>
            <div className='flex flex-col justify-start items-start gap-y-4 my-3'>
                {span && <span className='px-6 py-1 rounded-full text-white bg-gradient-to-br from-blue-600 to-purple-600'>{span}</span>}
                <h2 className='text-4xl font-semibold text-white font-outfit text-right md:text-left'>{title}</h2>
                <p className='md:text-xl text-white font-manrop leading-relaxed'>{content}</p>
                <Link href={link} className='secondarybtn'>{btnText}</Link>
            </div>
            <Image src={image} alt={alt} width={500} height={500} />
        </section>
    )
}

export default MainSection
