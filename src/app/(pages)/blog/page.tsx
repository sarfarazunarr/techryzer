import Card from '@/components/Card'
import Hero from '@/components/Hero'
import MainSection from '@/components/MainSection'
import React from 'react'
import { BiSearch } from 'react-icons/bi'

const Blogs = () => {
    return (
        <div>

            <Hero title='Our Blog' content='Welcome to our blog where we share insights, stories, and updates about our projects, industry trends, and the innovative solutions we are working on.' />
            <div className='w-1/4 flex p-2 mx-auto bg-white rounded-full'>
                <input type="text" name='search' id='search' placeholder='Search Blog' className='outline-none text-xl ml-8 bg-transparent' />
                <button className='primarybtn'><BiSearch size={20} /></button>
            </div>
            <div className='w-full py-20'>
                <MainSection title='Make Your Site An AI Agent!' content=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur placeat repudiandae distinctio officiis non assumenda ullam laborum quae voluptatum possimus recusandae libero debitis quia ex, tenetur, voluptas dolore dolor. Sapiente vero ipsum eum quos ad, quo reprehenderit deserunt cupiditate sunt tempore a beatae hic nesciunt?" btnText='Read this Blog' link='/blogs/aisite' alt='aisite' image='/blog.png' span='Recent' />
            </div>

            <section className='grid grid-cols-4 gap-3 pb-20 mx-10'>
                <Card img={"/blog.png"} title={"Make your site secure!"} description={"r sit amet consectetur adipisicing elit. Consequatur placeat repudiandae distinctio officiis non assumenda ullam laborum quae voluptatum possimus recusandae libero debitis quia ex, tenetur, vo"} link={"/blogs"} btnText='Read More' />
            </section>
        </div>
    )
}

export default Blogs
