import React from 'react'
import Gradbg from '../components/Gradbg'
import { hfont } from '../../fonts/getfonts'
import Image from 'next/image'

const page = () => {
    return (
        <section className='pt-40 pb-28 relative isolate overflow-hidden bg-gray-900 animate__animated animate__fadeIn'>
            <Gradbg />
            <div className='flex justify-center py-20 items-center flex-col text-center'>
                <h1 className={`text-5xl text-center pt-9 text-white ${hfont.className}`}>About Techryzer!</h1>
            </div>
            <div className='flex justify-center items-center w-3/4 mx-auto'>
                <div className="textsection px-10">
                    <h3 className={`${hfont.className} text-5xl text-white font-bold text-left py-5`}>Your Tech <span className='out-text'>Partner!</span></h3>
                    <p className=' text-gray-300'>
                        Techryzer is a tech startup that provides you with the best services in the field of technology. We are a team of passionate people who are dedicated to provide you with the best services in the field of technology.
                        We're a team of passionate technologists dedicated to empowering businesses like yours with cutting-edge web and app solutions. Our journey began with a vision to bridge the gap between technology and innovation, and we've been striving to make a difference ever since.

                        <br /><br />
                        <p className='font-bold text-xl text-primary-400'>Our Story</p>
                        Techryzer was founded on the principles of collaboration, creativity, and a relentless pursuit of excellence. Our team of experts has experience in web development, app development, software development, and API integration. We've worked with numerous clients across various industries, delivering tailored solutions that drive growth and success.
                        <br /><br />
                        <p className='font-bold text-xl text-primary-400'>Our Mission</p>
                        Our mission is to harness the power of technology to help businesses thrive in the digital landscape. We aim to provide innovative solutions that not only meet but exceed our clients' expectations. We believe in building long-term relationships, providing exceptional customer support, and continuously learning and improving to stay ahead of the curve.
                        <br /><br />
                        <p className='font-bold text-xl text-primary-400'>Our Values</p>
                        <ul className='list-disc list-inside'>
                            <li>Innovation: We embrace creativity and innovation in everything we do.</li>      
                            <li>Excellence: We strive for excellence in our work and continuously improve our skills.</li> 
                            <li>Collaboration: We believe in working closely with our clients and team members to achieve common goals.</li> 
                            <li>Integrity: We uphold the highest ethical standards and maintain transparency in our work.</li> 
                        </ul>
                    </p>
                </div>
                <div className='relative p-5 items-start'>
                    <div className='bg-primary-600 rounded-md shadow-2xl shadow-primary-400 w-96 h-96'></div>
                    <Image src={"https://images.unsplash.com/photo-1581092795360-fd1ca04f0952"} width={360} height={360} className='w-96 h-96 absolute top-5 rounded-md object-cover' />
                </div>
            </div>
        </section>
    )
}

export default page
