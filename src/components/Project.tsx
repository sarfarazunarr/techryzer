import Image from 'next/image'
import React from 'react'
import MainSection from './MainSection'
import Link from 'next/link'

const Project = () => {
    // {data}: {data: {img: string, title: string, short_description: string, url: string}[]}
  return (
    <section className='w-full py-20'>
        <MainSection title='Property Tax Calculator' content='Try our property tax calculator where users can easily calculate the property registry value like estamps, taxes value instantly. Note: This tool has currently District Matiari data.' image='/projects/propertytax.jpg' link='https://property-tax-calculator.vercel.app/' btnText='Visit Now' alt='propertytaxtool' span='New' />
        <section className='grid grid-cols-1 md:grid-cols-3 py-20 gap-4 mx-2 md:mx-32'>
            <div className='bg-gray-800 m-3 p-5 gap-y-4 rounded-md border-2 border-darkblue flex flex-col'>
            <Image src={"/projects/invoicy2.jpg"} width={600} height={600} className='object-cover w-full h-1/2 rounded-md' alt='invoicy' />
            <h2 className='text-2xl text-lightwhite font-outfit text-left'>Invoicy</h2>
            <p className='text-sm text-lightwhite font-manrop'>Try our free local invoice management tool where you can create and manage invoices in one place without signup or interacting with our servers!</p>
            <Link href={"https://invoicy-three.vercel.app/"} className='graybtn text-center' >Visit Now</Link>
            </div>
        </section>
    </section>
  )
}

export default Project
