import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Card = ({ img, title, description, link, btnText }: { img: string, title: string, description: string, link: string, btnText: string }) => {
    return (
        <div className='bg-gray-800 p-5 gap-y-2 rounded-md border-2 border-darkblue/25 hover:bg-blue-950 cursor-pointer flex flex-col'>
            <Image src={img} width={600} height={600} className='object-cover w-full h-1/2 rounded-md' alt={title} />
            <h2 className='text-2xl text-lightwhite font-outfit text-left line-clamp-1'>{title}</h2>
            <p className='showlines-3 text-lightwhite font-manrop text-sm'>{description}</p>
            <Link href={link} className='primarybtn text-center'>{btnText}</Link>
        </div>
    )
}

export default Card
