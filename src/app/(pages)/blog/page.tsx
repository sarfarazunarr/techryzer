import Card from '@/components/Card'
import Hero from '@/components/Hero'
import MainSection from '@/components/MainSection'
import React from 'react'
import { BiSearch } from 'react-icons/bi'

export interface Blog {
    "_id": string,
    "title": string,
    "meta_description": string,
    "content": string,
    "tags": string[],
    "status": string,
    "slug": string,
    "imgUrl": string,
    "author": string,
    "category": string,
}

const Blogs = async () => {
    
    let data = await fetch(`${process.env.NEXT_PUBLIC_URL}/blog`)
    let tempPosts = await data.json()
    const posts: Blog[] = tempPosts.blogsData;
    return (
        <div>

            <Hero title='Our Blog' content='Welcome to our blog where we share insights, stories, and updates about our projects, industry trends, and the innovative solutions we are working on.' />
            <div className='w-full md:w-1/4 flex p-2 mx-auto bg-white rounded-full'>
                <input type="text" name='search' id='search' placeholder='Search Blog' className='outline-none text-xl ml-2 md:ml-8 bg-transparent' />
                <button className='primarybtn'><BiSearch size={20} /></button>
            </div>
            <div className='w-full py-20'>
                {posts && <MainSection title={posts[0].title} content={posts[0].meta_description} btnText='Read this Blog' link={`${process.env.NEXT_URL}blog/${posts[0].slug}`} alt={posts[0].title} image={posts[0].imgUrl} span='Recent' />}
            </div>

            <section className='grid grid-cols-1 md:grid-cols-4 gap-3 pb-20 mx-4 md:mx-10'>
                {posts.map((post: Blog, index: number) => {
                    return (
                        <Card key={index} img={post.imgUrl} title={post.title} description={post.meta_description} link={process.env.NEXT_URL + "blog/" + post.slug } btnText='Read More' />
                    )
                })}

            </section>
        </div>
    )
}

export default Blogs
