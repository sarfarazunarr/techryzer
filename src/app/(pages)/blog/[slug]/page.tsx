import Hero from '@/components/Hero';
import React from 'react';
import Sidebar from './Sidebar';
import { Blog } from '../page';
import Comment from '@/components/Comment';
import Image from 'next/image';
import { notFound } from 'next/navigation';

// Metadata function for dynamic SEO metadata generation
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/blog/${slug}`);
  if (!res.ok) {
    return notFound();
  }
  const tempPosts = await res.json();
  const post: Blog = tempPosts.blog;

  return {
    title: post.title,
    description: post.meta_description,
    openGraph: {
      title: post.title,
      description: post.meta_description,
      url: `${process.env.NEXT_PUBLIC_URL}/blog/${slug}`,
      images: [
        {
          url: post.imgUrl || '/logo.jpg',
          width: 800,
          height: 600,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.meta_description,
      images: [post.imgUrl],
    },
  };
}

// Updated BlogContent component with async data fetching moved outside params
const BlogContent = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;

  const data = await fetch(`${process.env.NEXT_PUBLIC_URL}/blog/${slug}`);
  if (!data.ok) {
    return notFound();
  }

  const tempPosts = await data.json();
  const post: Blog = tempPosts.blog;
  const otherPosts: Blog[] = tempPosts.otherBlogs;

  return (
    <main className='w-full p-2 md:p-5'>
      <Hero title={post.title} content={post.meta_description} />
      <Image src={post.imgUrl} width={600} height={600} className="mx-auto object-cover rounded-md" alt={post.title} />
      <div className='grid grid-cols-1 md:grid-cols-8'>
        <div className='col-span-1 md:col-span-6 flex flex-col p-5'>
          <div id="blogcontent" className='pb-10' dangerouslySetInnerHTML={{ __html: post.content }}></div>
          <Comment blogId={post._id} />
        </div>
        <div className='col-span-2 p-4 rounded-md bg-[#1d1d1d]'>
          <Sidebar posts={otherPosts} />
        </div>
      </div>
      <hr className='mt-20 border-b border-gray-700' />
    </main>
  );
}

export default BlogContent;
