import React from 'react'

const page = () => {
  return (
    <div>
      <h3 className='text-3xl text-white font-bold'>Welcome Sarfaraz!</h3>
      <h6 className='text-white text-xl pt-5'>General Overview</h6>
      <div className='grid grid-cols-4 '>
        <div className='p-3 my-3 rounded-md bg-gradient-to-bl border border-primary-500 from-primary-900 to-gray-800 mx-2'>
          <h4 className='text-center w-full font-semibold text-4xl'>150</h4>
          <p className='text-center text-gray-400 text-sm'>Clients</p>
        </div>
        <div className='p-3 my-3 rounded-md bg-gradient-to-bl border border-purple-500 from-purple-900 to-gray-800 mx-2'>
          <h4 className='text-center w-full font-semibold text-4xl'>360</h4>
          <p className='text-center text-gray-400 text-sm'>Projects</p>
        </div>
        <div className='p-3 my-3 rounded-md bg-gradient-to-bl border border-secondary-500 from-secondary-900 to-gray-800 mx-2'>
          <h4 className='text-center w-full font-semibold text-4xl'>15</h4>
          <p className='text-center text-gray-400 text-sm'>Messages</p>
        </div>
        <div className='p-3 my-3 rounded-md bg-gradient-to-bl border border-yellow-500 from-yellow-900 to-gray-800 mx-2'>
          <h4 className='text-center w-full font-semibold text-4xl'>20</h4>
          <p className='text-center text-gray-400 text-sm'>Partners</p>
        </div>
      </div>
      <h6 className='text-white text-xl pt-5'>Projects Overview</h6>
      <div className='grid grid-cols-4 '>
        <div className='p-3 my-3 rounded-md bg-gradient-to-bl border border-primary-500 from-primary-900 to-gray-800 mx-2'>
          <h4 className='text-center w-full font-semibold text-4xl'>17</h4>
          <p className='text-center text-gray-400 text-sm'>Working on</p>
        </div>
        <div className='p-3 my-3 rounded-md bg-gradient-to-bl border border-purple-500 from-purple-900 to-gray-800 mx-2'>
          <h4 className='text-center w-full font-semibold text-4xl'>5</h4>
          <p className='text-center text-gray-400 text-sm'>Under review</p>
        </div>
        <div className='p-3 my-3 rounded-md bg-gradient-to-bl border border-secondary-500 from-secondary-900 to-gray-800 mx-2'>
          <h4 className='text-center w-full font-semibold text-4xl'>10</h4>
          <p className='text-center text-gray-400 text-sm'>Completed</p>
        </div>
        <div className='p-3 my-3 rounded-md bg-gradient-to-bl border border-yellow-500 from-yellow-900 to-gray-800 mx-2'>
          <h4 className='text-center w-full font-semibold text-4xl'>5</h4>
          <p className='text-center text-gray-400 text-sm'>Payment Pending</p>
        </div>
      </div>
    </div>
  )
}

export default page
