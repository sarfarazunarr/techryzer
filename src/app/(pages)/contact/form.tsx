"use client";
import React, { useState } from 'react'
import Form from 'next/form'
import { BsArrowUpRight } from 'react-icons/bs'

const ContactForm = () => {
    const [pending, setPending] = useState(false);
    const [message, setMessage] = useState("");
    const savedata = async(formData: FormData) => {
        setPending(true);
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/contact`, {method: "POST", body: formData});
        if(!res.ok){
            setMessage("Failed to submit!")
        }
        setMessage("Message Sent Successfully!");
        setPending(false)
    }
  return (
    <Form action={savedata}>
    <div className='w-full md:w-1/3 mx-auto grid grid-cols-1 md:grid-cols-2 gap-5'>
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
            <textarea name='message' placeholder='Type your message...' rows={5} className='contactinput' />
        </div>
        <div className='flex flex-col items-start justify-center col-span-2'>
        <button className='primarybtn flex justify-center gap-5 items-center'>{pending ? "Sending..." : "Send Message"} {!pending && <BsArrowUpRight size={20} />}</button>
        {message && <p className='p-4 text-center block text-white font-manrop'>{message}</p>}
        </div>
    </div>
</Form>
  )
}

export default ContactForm
