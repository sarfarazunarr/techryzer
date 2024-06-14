"use client";
import React, { useState } from 'react'
import CustomDropdown from '../../../components/CustomDropdown'

const page = () => {
    const options = ["Select Project", "TechRyzer", "USMS LMS", "AttendMe"];
    const [selectedOption, setSelectedOption] = useState(options[0]);
    const handleDropdownChange = (option) => {
        setSelectedOption(option);
    };
  return (
    <div className='p-5'>
      <h3 className='text-center text-white text-2xl font-semibold'>Need Any Help related to your project!</h3>
      <div className='flex flex-col w-[90%] items-center justify-center'>
        <CustomDropdown options={options} onChange={handleDropdownChange} />
        <textarea className='w-full h-40 outline-none border-2 border-gray-400 focus:border-primary-500 text-gray-300 bg-gray-800/55 rounded-md my-2 p-2' placeholder={`Enter message about ${selectedOption ? selectedOption : " Project"}`}></textarea>
      </div>
    </div>
  )
}

export default page
