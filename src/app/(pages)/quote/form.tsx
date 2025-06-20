"use client";
import React, { useState } from 'react'
import Form from 'next/form'
import { BsArrowUpRight } from 'react-icons/bs'

const QuoteForm = () => {
    const [pending, setPending] = useState(false);
    const [message, setMessage] = useState("");
    const savedata = async(formData: FormData) => {
        setPending(true);
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/quote`, {method: "POST", body: formData});
        if(!res.ok){
            setMessage("Failed to submit!")
        }
        setMessage("Details Sent Successfully! You will recieve email from our side, Thanks!");
        setPending(false)
    }
  return (
    <Form action={savedata} >
    <div className='w-full md:w-1/3 mx-auto grid grid-cols-2 gap-5 md:px-0 px-4'>
        <div className='flex flex-col gap-2 col-span-2 md:col-span-1'>
            <label htmlFor="firstName" className='font-manrop text-lightwhite font-semibold'>First Name</label>
            <input type="text" name='firstName' placeholder='John' className='contactinput' required />
        </div>
        <div className='flex flex-col gap-2 col-span-2 md:col-span-1'>
            <label htmlFor="lastName" className='font-manrop text-lightwhite font-semibold'>Last Name</label>
            <input type="text" name='lastName' placeholder='Doe' className='contactinput' required />
        </div>
        <div className='flex flex-col gap-2 col-span-2 md:col-span-1'>
            <label htmlFor="phone" className='font-manrop text-lightwhite font-semibold'>Phone Number</label>
            <input type="text" name='phone' placeholder='+92 301 2345678' className='contactinput' required />
        </div>
        <div className='flex flex-col gap-2 col-span-2 md:col-span-1'>
            <label htmlFor="email" className='font-manrop text-lightwhite font-semibold'>Email</label>
            <input type="email" name='email' placeholder='abc@xyz.com' className='contactinput' required />
        </div>
        <div className='flex flex-col gap-2 col-span-2'>
            <label htmlFor="project_title" className='font-manrop text-lightwhite font-semibold'>Project Title</label>
            <input type="text" name='project_title' placeholder='Restaurant Agent' className='contactinput' required />
        </div>
        <div className='flex flex-col col-span-2 gap-2'>
            <label htmlFor="project_details" className='font-manrop text-lightwhite font-semibold'>Project Details</label>
            <textarea name='project_details' placeholder='Type your Project Details...' rows={5} className='contactinput' required />
        </div>
        <div className='flex flex-col gap-2 col-span-2'>
            <label htmlFor="budget" className='font-manrop text-lightwhite font-semibold'>Project Budget ($)</label>
            <input type="number" name='project_budget' placeholder='500' className='contactinput' required />
        </div>
        <div className='flex flex-col items-start justify-center col-span-2'>
        <button className='primarybtn flex justify-center gap-5 items-center'>{pending ? "Sending..." : "Send Details"} {!pending && <BsArrowUpRight size={20} />}</button>
        {message && <p className='p-4 text-center block text-white font-manrop'>{message}</p>}
        </div>
    </div>
</Form>
  )
}

export default QuoteForm
