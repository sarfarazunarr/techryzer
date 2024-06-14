"use client";
import Link from 'next/link';
import React from 'react'
import Gradbg from '../../components/Gradbg';
import Image from 'next/image';

const page = ({ params }) => {
    const share = () => {
        navigator.share({
            title: "This is blog",
            text: "Read blog and increase your knowledge!",
            url: `https://hello.com/blog/${params.slug}`
        })
    }
    return (
        <>
            <div className='py-5 pt-20 z-0 pb-28 relative overflow-hidden bg-gray-900 '>
                <Gradbg />

                <div className='w-[60%] mx-auto'>
                    <div id='header' className='py-5'>
                        <button onClick={() => history.back()} className='px-4 py-1 rounded-md border border-primary-500 text-white my-2 bg-gradient-to-br from-primary-950 to-gray-900 cursor-pointer'>Go Back</button>
                        <p className='text-sm text-gray-300 pt-5 z-10'>Firday, June 14th 2024</p>
                        <h1 className='text-center py-14 font-normal text-white text-5xl'>Why you should buy happiness?</h1>
                        <div>
                            <div className='flex items-center'>
                                <Image src={"https://images.unsplash.com/photo-1564564321837-a57b7070ac4f"} width={50} height={50} className='w-12 h-12 rounded-full object-cover' />
                                <div className='flex flex-col'>
                                    <p className='text-left text-gray-400 text-sm pl-2'>Posted By</p>
                                    <span className='text-white pl-2'>Sarfaraz Unar</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id='blog-body' className='mt-5 text-[16px] p-2 text-gray-200 text-justify'>
                        React Server Components (RSC) in App Router is a novel paradigm that eliminates much of the redundancy and potential risks linked with conventional methods. Given the newness, developers and subsequently security teams may find it challenging to align their existing security protocols with this model.

                        This document is meant to highlight a few areas to look out for, what protections are built-in, and include a guide for auditing applications. We focus especially on the risks of accidental data exposure.
                    </div>
                </div>
                <div id='share' className='w-[60%] mx-auto bg-gradient-to-br from-gray-900 to-secondary-800 border border-secondary-600 px-3 py-2 rounded-md flex justify-between items-center my-5'>
                    <h3 className='text-xl text-white font-semibold'>Thank you for reading this blog! Share it with your friends</h3>
                    <button onClick={() => share()} className='bg-white text-secondary-600 px-3 py-2 rounded-md hover:bg-secondary-900 transition-colors duration-200 z-10 hover:text-whites'>Share Now</button>
                </div>
            </div>
        </>
    )
}

export default page
