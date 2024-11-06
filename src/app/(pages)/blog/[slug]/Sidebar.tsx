"use client";
import Card from '@/components/Card';
import Form from 'next/form'
import React, { useState } from 'react'
import { Blog } from '../page';


const Sidebar = ({ posts }: { posts: Blog[] }) => {
    const [msg, setMsg] = useState("")
    async function subscribe(data: FormData) {
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/subscribe`, { method: "POST", body: data })
        if (!res.ok) {
            setMsg("Try Again");
        }
        setMsg("Thanks For Subscribing!")
    }
    return (
        <section className='flex flex-col gap-y-2'>
            <Form action={subscribe} className='border flex flex-col gap-y-2 border-gray-400 rounded-md p-4'>
                <h2 className='text-2xl font-bold my-5 text-center text-lightwhite'>Subscribe Newsletter</h2>
                <p className='text-center text-sm text-white font-manrop'>{msg}</p>
                <input type="text" required name='name' placeholder='Enter Name' className='px-4 py-2 w-full bg-transparent text-white rounded-md border border-lightwhite text-[15px] focus:border-darkblue' />
                <input type="email" required name='email' placeholder='Enter Email' className='px-4 py-2 w-full bg-transparent rounded-md border border-lightwhite text-white text-[15px] focus:border-darkblue' />
                <button type='submit' className='bg-lightwhite w-full py-2 rounded-full hover:bg-darkblue hover:text-white text-darkblue'>Subscribe Newsletter!</button>
            </Form>
            {posts.length > 0 && posts.map((post, index) => {
                return (
                    <Card key={index} img={post.imgUrl} title={post.title} description={post.meta_description} link={process.env.NEXT_URL + "blog/" + post.slug} btnText='Read More' />
                )
            })}

        </section>
    )
}

export default Sidebar
