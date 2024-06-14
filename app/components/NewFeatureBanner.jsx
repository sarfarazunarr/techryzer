import { hfonts } from '../../fonts/getfonts'
import React from 'react'

const NewFeatureBanner = () => {
    return (
        <div className='w-3/4 mx-auto py-20 px-10 flex justify-center items-center flex-col animate__animated animate__fadeIn'>
            <h4 className={`text-5xl text-white drop-shadow-2xl shadow-primary-400 text-center font-bold ${hfonts.className} animate__animated animate__fadeInUp`}>We are currently working on some open-source projects with amazing features! <br />We will be releasing them soon!</h4>
            <p className='mt-5 text-xs text-center text-gray-400 mb-2'>Subscribe now to get updates instantly!</p>
            <div className="flex mb-5 animate__animated animate__fadeInUp animate__delay-1s">
                <input type="email" placeholder="Enter your email" className="px-4 py-2 rounded-md border border-white text-white bg-transparent mb-4 focus:border-primary-500 focus:outline-none" />
                <button className="bg-primary-500 hover:bg-blue-700 text-white h-10 px-2 ml-2 rounded">
                    Subscribe
                </button>
            </div>
        </div>
    )
}

export default NewFeatureBanner
