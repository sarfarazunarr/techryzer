import React from 'react'
import Hero from '@/components/Hero'
import { TbArrowsDiagonal } from 'react-icons/tb'
import { BsArrowUpRight } from 'react-icons/bs'
const Career = () => {
    return (
        <section>
            <Hero title='Join Our Team!' content='Find a best career opportunity according to your skillset and experience and join Techryzer Army!' />
            <div className="w-full h-96 flex flex-row justify-center border-y border-darkwhite my-10">
                <div className="flex w-1/2 justify-center items-center flex-col gap-y-3">
                    <h3 className="text-4xl text-left font-bold text-white">We are hiring!</h3>
                    <button className="primarybtn">Open Applications</button>
                </div>
                <div className={"flex flex-col w-1/2 border border-darkwhite"}>
                    <div className='flex justify-between items-center p-4 px-7 border-b border-darkwhite'>
                        <div className='flex flex-col gap-4'>
                            <h3 className='text-3xl text-lightwhite font-semibold font-outfit'>UI/UX Developer (Hired)</h3>
                            <div className='flex gap-3'>
                                <span className=' rounded-full text-white px-3 py-2 border border-darkwhite'>Full Time</span>
                                <span className='rounded-full text-white px-3 py-2 border border-darkwhite'>Remote</span>
                            </div>
                        </div>
                        <BsArrowUpRight size={35} color='white' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Career
