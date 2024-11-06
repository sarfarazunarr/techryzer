import Image from 'next/image'
import React from 'react'
import MainSection from './MainSection'

const Project = () => {
    // {data}: {data: {img: string, title: string, short_description: string, url: string}[]}
  return (
    <section className='w-full py-20'>
        <MainSection title='Notepad AI' content='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate est quidem hic qui quia molestiae cupiditate reprehenderit temporibus accusantium laborum magnam, veniam error placeat itaque eum blanditiis assumenda inventore aut praesentium culpa libero fugit in perferendis architecto? Ea aliquid explicabo quasi libero id atque voluptate?' image='/projects/notepadai.jpg' link='/' btnText='Read and Download' alt='notepadai' span='New' />
        <section className='grid grid-cols-1 md:grid-cols-3 py-20 gap-4 mx-2 md:mx-32'>
            <div className='bg-gray-800 m-3 p-5 gap-y-4 rounded-md border-2 border-darkblue flex flex-col'>
            <Image src={"/projects/schoolmanagement.jpg"} width={600} height={600} className='object-cover w-full h-1/2 rounded-md' alt='schoolmanagement' />
            <h2 className='text-2xl text-lightwhite font-outfit text-left'>School Management</h2>
            <p className='text-sm text-lightwhite font-manrop'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia aperiam illum, quod commodi eligendi, repellat soluta, rerum exercitationem ullam suscipit neque iste dolorem eum. Neque!</p>
            <button className='graybtn'>Visit and Download</button>
            </div>
        </section>
    </section>
  )
}

export default Project
