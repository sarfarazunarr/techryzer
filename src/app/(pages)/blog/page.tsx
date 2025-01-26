import Card from '@/components/Card'
import Hero from '@/components/Hero'
import MainSection from '@/components/MainSection'
import React from 'react'
import { BiSearch } from 'react-icons/bi'

export interface Blog {
  _id: string,
  title: string,
  meta_description: string,
  content: string,
  tags: string[],
  status: string,
  slug: string,
  imgUrl: string,
  author: string,
  category: string,
}

export async function generateMetadata() {
  return {
    title: "Blogs - Techryzer",
    description:
      "Discover insightful blogs by Techryzer on the latest trends in technology, web development, and AI innovations. Gain valuable knowledge and stay ahead in the tech world with our expert articles.",
    metadataBase: "https://techryzer.com/",
    openGraph: {
      title: "Blogs - Techryzer",
      description:
        "Explore Techryzer's blog for expert insights and knowledge on technology, web development, and AI. Stay updated with the latest trends and innovations.",
      url: `${process.env.NEXT_PUBLIC_URL}/blog`,
      images: [
        {
          url: "/logo.jpg",
          width: 400,
          height: 400,
          alt: "Techryzer Blogs",
        },
      ],
    }
  };
  
}

const Blogs = async () => {
  let posts: Blog[] = [];
  const data = await fetch(`${process.env.NEXT_PUBLIC_URL || 'http://techryzer.com/api'}/blog`, {next:{revalidate: 3600}})
  if(data.ok){
    const tempPosts = await data.json();
    posts = tempPosts.blogsData as Blog[] || [];
  }

  return (
    <div>

      <Hero title='Our Blog' content='Welcome to our blog where we share insights, stories, and updates about our projects, industry trends, and the innovative solutions we are working on.' />
      {posts && posts.length > 0 && <>
        <div className='w-[85%] md:w-1/4 flex p-2 py-3 mx-auto bg-white rounded-md relative'>
          <input type="text" name='search' id='search' placeholder='Search Blog' className='outline-none text-xl ml-2 md:ml-8 bg-transparent' />
          <button className='primarybtn absolute top-1 right-2'><BiSearch size={20} /></button>
        </div>
        <div className='w-full py-20'>
          {posts && <MainSection title={posts[0].title} content={posts[0].meta_description} btnText='Read this Blog' link={`${process.env.NEXT_URL}blog/${posts[0].slug}`} alt={posts[0].title || 'blog-image'} image={posts[0].imgUrl} span='Recent' />}
        </div>

        <section className='grid grid-cols-1 md:grid-cols-4 gap-3 pb-20 mx-4 md:mx-10'>
          {posts && posts.slice(1,).map((post: Blog, index: number) => {
            return (
              <Card key={index} img={post.imgUrl} title={post.title} description={post.meta_description} link={"blog/" + post.slug} btnText='Read More' />
            )
          })}

        </section>
      </>}
      {posts && posts.length <= 0 && (
        <div className='w-full py-20'>
            <h3 className='font-semibold text-center text-2xl text-gray-400'>No Posts Available!</h3>
        </div>
      )}
      {!posts && (
        <div className='w-full py-10'>
            <h3 className='font-semibold text-xl text-gray-400'>Failed to Load Posts! Please Try Later</h3>
        </div>
      )}
    </div>
  )
}

export default Blogs
