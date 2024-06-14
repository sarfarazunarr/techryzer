import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <div>
            <h3 className='text-white font-semibold text-3xl py-3 pb-4'>All Projects</h3>
            <div className='grid grid-cols-3 gap-3'>
                <div className='w-full bg-gradient-to-br from-primary-800 to-gray-900 border border-primary-500 p-5 rounded-md'>
                    <span className='bg-primary-600 text-white text-xs px-2 py-1'>Website</span>
                    <h3 className='text-3xl text-white text-center font-semibold py-4'>TechRyzer Web</h3>
                    <div className='flex justify-between px-2 py-1'>
                        <span className='text-white text-sm text-left' title='Id'><span className='text-gray-400 pl-2'>ID: </span>1DD2</span>
                        <span className='ext-gray-500 text-sm text-left' title='Deadline'><span className='text-gray-400 pl-2'>Deadline:</span> 12/12/2024</span>
                    </div>
                    <div id='progress' className='w-[95%] h-3 my-5 rounded-md bg-gray-900/75 overflow-hidden'>
                        <div
                            id='progress-bar'
                            className='bg-secondary-500 z-20 shadow-xl rounded-md shadow-secondary-500 h-full'
                            style={{ width: `50%` }}>
                        </div>
                    </div>
                    <div className='flex justify-center gap-2 px-2 py-1'>
                        <Link href="/" className='text-white bg-secondary-600 px-3 py-2 rounded-md hover:bg-secondary-800 text-sm text-center'>Project Details</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page
