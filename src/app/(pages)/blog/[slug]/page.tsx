import Hero from '@/components/Hero'
import React from 'react'
import Sidebar from './Sidebar';
import { Blog } from '../page';
import Comment from '@/components/Comment';

const BlogContent = async ({ params }: { params: { slug: string } }) => {

    const { slug } = await params;
    const data = await fetch(`${process.env.NEXT_PUBLIC_URL}/blog/${slug}`)
    const tempPosts = await data.json()
    const post: Blog = tempPosts.blog;
    const otherPosts: Blog[] = tempPosts.otherBlogs;
    return (
        <main className='w-full p-2 md:p-5'>
            <Hero title={post.title} content={post.meta_description} />
            <div className='grid grid-cols-1 md:grid-cols-8'>
                <div className='col-span-1 md:col-span-6 flex flex-col p-5 '>
                    <div id="blogcontent" dangerouslySetInnerHTML={{ __html: post.content }}></div>
                    <Comment blogId={post._id} />
                </div>
                <div className='col-span-2 p-4 rounded-md bg-[#1d1d1d]'>
                    <Sidebar posts={otherPosts} />
                </div>
            </div>
            <hr className='mt-20 border-b border-gray-700' />
        </main>
    )
}

export default BlogContent
