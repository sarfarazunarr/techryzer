import React from 'react'
import Gradbg from '../components/Gradbg'
import { hfont } from '../../fonts/getfonts'
import Offer from '../components/Offer'

const page = () => {
    return (
        <section className='pt-40 pb-28 relative isolate overflow-hidden bg-gray-900 animate__animated animate__fadeIn'>
            <Gradbg />
            <div className='flex justify-center py-20 items-center flex-col text-center'>
                <h1 className={`text-5xl text-center pt-9 text-white ${hfont.className}`}>Offers Just For You!</h1>
                <p className='text-center text-gray-500 pb-9'>Browse Offers Read T&C of offers carefully!</p>
            </div>
            <div className='backdrop-filter backdrop-blur-sm '>
            <Offer />
            </div>
        </section>
    )
}

export default page
