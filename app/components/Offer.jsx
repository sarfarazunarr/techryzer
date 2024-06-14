import React from 'react'
import { hfont } from '../../fonts/getfonts'
import Image from 'next/image'
import ButtonLine from './ButtonLine'

const Offer = () => {
  return (
    <>
      <section className='w-3/4 mx-auto p-5 flex justify-center items-center'>
        <div className="textsection px-10">
          <h3 className={`${hfont.className} text-5xl text-white font-bold text-left py-5`}>Mega Offer For  <span className='out-text'>Creators!</span> 🎉</h3>
          <p className=' text-xl text-yellow-500'>Are you a new Content Creator?</p>
          <p className='text-xl text-gray-300'>Here is best offer for you. Here is mega content creators offer in which you will get complete setup of Social Media Accounts, YouTube Channel and complete Functional Custom Blog. By which you can easily get start your creator journey. And you <span className='bg-secondary-700 text-white rounded-md px-2'>Don't have to pay full amount now.</span> Just Give us domain and hosting and let's get start!</p>
        </div>
        <div className='relative p-5'>
          <div className='bg-primary-600 rounded-md shadow-2xl shadow-primary-400 w-80 h-96'></div>
          <Image src={"https://images.unsplash.com/photo-1581368129682-e2d66324045b"} width={320} height={384} className='w-80 h-96 absolute top-5 rounded-md object-cover' />
        </div>
      </section>
      <ButtonLine title={"Availe Mega Offer"} link={'/'} />
    </>
  )
}

export default Offer
