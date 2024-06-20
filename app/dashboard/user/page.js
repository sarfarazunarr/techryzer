import { getUserSession } from '../../../lib/utils'
import React from 'react'

const page = async () => {
  const {name} = await getUserSession();
  return (
    <div>
      <h3 className='text-3xl text-white font-bold'>Welcome {name}</h3>
      <h6 className='text-white text-xl pt-5'>Projects Overview</h6>
      <div className='grid grid-cols-3 '>
        <div className='p-3 my-3 rounded-md bg-gradient-to-bl border border-yellow-500 from-yellow-900 to-gray-800 mx-2'>
          <h4 className='text-center w-full font-semibold text-4xl'>02</h4>
          <p className='text-center text-gray-400 text-sm'>Pending</p>
        </div>
        <div className='p-3 my-3 rounded-md bg-gradient-to-bl border border-primary-500 from-primary-900 to-gray-800 mx-2'>
          <h4 className='text-center w-full font-semibold text-4xl'>03</h4>
          <p className='text-center text-gray-400 text-sm'>Completed</p>
        </div>
        <div className='p-3 my-3 rounded-md bg-gradient-to-bl border border-purple-500 from-purple-900 to-gray-800 mx-2'>
          <h4 className='text-center w-full font-semibold text-4xl'>5</h4>
          <p className='text-center text-gray-400 text-sm'>Rate Us</p>
        </div>
      </div>
      <div className='grid grid-cols-1 '>
      <h6 className='text-white text-xl pt-5'>Current Project</h6>

        <div className='p-3 my-3 rounded-md bg-gradient-to-bl border border-primary-500 from-primary-900 to-gray-800 mx-2 text-left'>
          <h4 className='text-left w-full font-semibold text-xl'>Techryzer</h4>
          <p className='text-center text-gray-400 text-sm'>Completed</p>
        </div>
      </div>
    </div>
  )
}

export default page
