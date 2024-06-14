import Image from 'next/image'
import React from 'react'
import Gradbg from '../components/Gradbg'

const page = () => {
    return (
        <div>
            <section className='pt-40 pb-28 relative isolate overflow-hidden bg-gray-900 animate__animated animate__fadeIn'>
                <Gradbg />
                <div className='flex justify-center items-center flex-col text-center'>
                    <h3 className='text-5xl text-white font-semibold animate__animated animate__fadeInUp'>Connect with Us!</h3>
                </div>

                <div className='w-3/4 flex justify-center items-center flex-row mx-auto text-left'>
                    <div className='contact-info p-10 my-2'>
                        <h3 className='text-2xl text-white font-bold'>Get in Touch</h3>
                        <p className='text-white'>
                            Just send us a message our team will <br /> get back to you within 24 hours.
                        </p>
                        <br />
                        <p className='font-bold text-primary-400'>Address Info</p>
                        <address className="text-white not-italic">
                            Opposite Post Office<br />
                            Hala New, Sindh 7120<br />
                            Pakistan
                        </address>
                        <br />
                        <p className='font-bold text-primary-400'>Contact Info</p>
                        <ul className="list-none">
                            <li className="flex items-center mb-4">
                                <Image src="https://www.svgrepo.com/show/475692/whatsapp-color.svg" alt="Phone" className="mr-4" width={24} height={24} />

                                <span className="text-white">+92 327 278 9082</span>
                            </li>
                            <li className="flex items-center mb-4">
                                <img src="https://www.svgrepo.com/show/485253/email-opened.svg" alt="Email" className="mr-4" width={24} height={24} />
                                <span className="text-white">techryzer@gmail.com</span>
                            </li>
                        </ul>
                    </div>
                    <div className='p-4 flex justify-center items-center'>
                        <form className='z-10'>
                            <div className='flex items-center my-2 gap-2'>
                                <label className='text-white font-semibold'>Name: </label>
                                <input type="text" name="name" placeholder="Name" className="w-full bg-gray-800 p-2 rounded-md border-2 border-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent" />
                            </div>
                            <div className='flex items-center my-2 gap-2'>
                                <label className='text-white font-semibold'>Email: </label>
                                <input type="email" name="email" placeholder="Email" className="w-full bg-gray-800 p-2 rounded-md border-2 border-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent" />
                            </div>
                            <div className='gap-2'>
                                <label className='text-white font-semibold'>Message: </label>
                                <textarea rows={10} cols={10} name="message" placeholder="Enter Message" className="w-full bg-gray-800 p-2 rounded-md border-2 border-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent"></textarea>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default page
