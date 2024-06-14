import React from 'react'
import Services from '../components/Services'
import Gradbg from '../components/Gradbg'
import { hfonts } from '../../fonts/getfonts'
const page = () => {
  return (
    <section className='pt-40 pb-28 relative isolate overflow-hidden bg-gray-900 animate__animated animate__fadeIn'>
    <Gradbg />
    <div className='flex justify-center items-center flex-col text-center'>
      <h3 className={`${hfonts.className} text-5xl text-white font-semibold animate__animated animate__fadeInUp`}>Our Services</h3>
      <div className="relative p-3 border my-10 border-gray-200 rounded-lg w-full max-w-lg animate__animated animate__fadeIn">
        <input type="text" className="rounded-md w-full p-3 bg-transparent text-white border-white border outline-none " placeholder="Find Services" />
        <button type="submit" className="absolute right-6 top-6">

          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
            stroke="currentColor" className="w-6 h-6 text-white">
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
        </button>
      </div>
    </div>
    <Services page={true} />
  </section>
  )
}

export default page
