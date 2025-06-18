import Hero from '@/components/Hero';
import React from 'react';
import Sidebar from './Sidebar';
import { Blog } from '../page';
import Comment from '@/components/Comment';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import Link from 'next/link';


export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
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



const BlogContent = async ({ params }: { params: Promise<{ slug: string }> }) => {

  const { slug } = await params;
  if (!slug) {
    return notFound();
  }
  const data = await fetch(`${process.env.NEXT_PUBLIC_URL}/blog/${slug}`);
  if (data.status == 404) {
    return notFound();
  }
  const tempPosts = await data.json();
  const post: Blog = tempPosts.blog;
  const otherPosts: Blog[] = tempPosts.otherBlogs;

  return (
    <>
      {post && <main className='w-full p-2 md:p-5'>
        <Hero title={post.title} content={post.meta_description} />
        <Image src={post.imgUrl} width={600} height={600} className="mx-auto object-cover rounded-md" alt={post.title} />
        <div className='grid grid-cols-1 md:grid-cols-8'>
          <div className='col-span-1 md:col-span-6 flex flex-col p-5'>
            <div id="blogcontent" className='pb-10 p-2'>
              <ReactMarkdown components={{
                img: ({ node, ...props }) => (
                  <Image
                    src={props.src || ''}
                    alt={props.alt || ''}
                    width={600}
                    height={400}
                    style={{ width: '100%', height: 'auto' }}
                  />
                ),
                a: ({ node, href, children, ...props }) => {
                  const isInternalLink = href?.startsWith('/');
                  if (isInternalLink) {
                    return (
                      <Link href={href || ''}>
                        <a {...props}>{children}</a>
                      </Link>
                    );
                  }
                  return (
                    <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
                      {children}
                    </a>
                  );
                },
              }} remarkPlugins={[remarkGfm]}>
                {post.content}
              </ReactMarkdown>
            </div>
            <Comment blogId={post._id} />

          </div>
          <div className='col-span-2 p-4 rounded-md bg-[#1d1d1d]'>
            <Sidebar posts={otherPosts} />
          </div>
        </div>
        <hr className='mt-20 border-b border-gray-700' />
      </main>}
      {!post && <main className='w-full p-10'>
        <h3 className='text-center font-semibold text-4xl text-white'>Failed to Load Blog</h3>
      </main>}
    </>
  );
}

export default BlogContent;
