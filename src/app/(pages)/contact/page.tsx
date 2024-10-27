import Hero from '@/components/Hero'
import React from 'react'
import Form from 'next/form'
import { BsArrowUpRight } from 'react-icons/bs'
const Contact = () => {
    const savedata = async(formData: { get: (arg0: string) => any }) => {
        "use server"
        console.log(formData.get('firstName'))
    }
  return (
    <section>
        <Hero title='Contact' content='Need Any Service? or help related to our products & services. Just Connect with our team by writing a short message to our team!'  />
        <Form action={savedata}>
            <div className='w-1/3 mx-auto grid grid-cols-2 gap-5'>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="firstName" className='font-manrop text-lightwhite font-semibold'>First Name</label>
                    <input type="text" name='firstName' placeholder='John' className='contactinput' />
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="lastName" className='font-manrop text-lightwhite font-semibold'>Last Name</label>
                    <input type="text" name='lastName' placeholder='Doe' className='contactinput' />
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="phone" className='font-manrop text-lightwhite font-semibold'>Phone Number</label>
                    <input type="text" name='phone' placeholder='+92 301 2345678' className='contactinput' />
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="email" className='font-manrop text-lightwhite font-semibold'>Email</label>
                    <input type="text" name='email' placeholder='abc@xyz.com' className='contactinput' />
                </div>
                <div className='flex flex-col col-span-2 gap-2'>
                    <label htmlFor="message" className='font-manrop text-lightwhite font-semibold'>Message</label>
                    <textarea name='message' placeholder='abc@xyz.com' rows={5} className='contactinput' />
                </div>
                <button className='primarybtn flex justify-center gap-5 items-center'>Send Message <BsArrowUpRight size={20} /></button>
            </div>
        </Form>
    </section>
  )
}

export default Contact
