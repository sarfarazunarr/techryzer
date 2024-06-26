import React from 'react'
import Gradbg from './components/Gradbg'
import Link from 'next/link'

const NotFound = () => {
  return (
    <section className='pt-40 h-screen pb-28 relative isolate overflow-hidden bg-gray-900 animate__animated animate__fadeIn'>
      <Gradbg />
      <h2 className='text-center text-4xl font-semibold text-white'>Page Not Found</h2>
      <p className='text-center text-gray-400 text-sm'>Sorry your are required page not found!</p>
      <div className='flex justify-center items-center'>
        <Link href={"/offers"} className='px-4 py-2 mx-auto rounded-md bg-primary-600 text-white hover:shadow-2xl hover:shadow-primary-400 transition duration-200'>View Offers</Link>
      </div>
    </section>
  )
}

export default NotFound
