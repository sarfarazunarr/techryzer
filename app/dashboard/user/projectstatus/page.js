"use client";
import React, { useState } from 'react'
import CustomDropdown from '../../../components/CustomDropdown'

const page = () => {
    const options = ["Select Project", "TechRyzer", "USMS LMS", "AttendMe"];
    const [selectedOption, setSelectedOption] = useState(options[0]);

    const handleDropdownChange = (option) => {
        setSelectedOption(option);
        document.getElementById('searchsection').classList.replace('block', 'hidden')
        document.getElementById('projectsection').classList.replace('hidden', 'block')
    };

    return (
        <div className='py-5'>
            <div id='searchsection' className='block'>
                <h3 className='animate__animated animate__fadeInUp text-center font-semibold text-3xl text-white'>Check Your Project's Status</h3>
                <div className='flex justify-center py-5 items-center flex-col'>
                    <div className='flex justify-center items-center animate__animated animate__fadeInUp'>
                        <CustomDropdown options={options} onChange={handleDropdownChange} />
                    </div>
                </div>
            </div>
            <div id='projectsection' className="hidden">
                <div id='projectdata' className='flex flex-col'>
                    <h3 className='text-3xl text-white py-3 font-bold'>Project Name</h3>
                    <p className='text-gray-500 text-xs pl-1'>Timeline: 06/12/2024 to 06/12/2025</p>
                    <p className='text-gray-200 py-4 text-sm tracking-wide w-4/5'>Project Description is so outstanding it is great to see this and getting info about our latest featuers awebsite asdkfa lkasdj lllkdf .</p>
                </div>
                <hr className='border-gray-600' />
                <div id='projectstatus' className='py-5'>
                    <h3 className='text-xl text-gray-200 pt-3 pb-1 font-semibold'>Current Status: <span className='text-secondary-400'>Work on Backend</span></h3>
                    <p className='text-gray-200 pt-1 text-sm tracking-wide w-4/5'>Currently we are working on backend to make your apis more secure and powerful</p>
                    <div className='w-full flex justify-center p-5 items-center'>
                        <div className=' w-1/2 border-r border-r-gray-100'>
                            <h4 className='text-white font-semibold py-2'>Key Activities</h4>
                            <ul className='list-disc list-inside'>
                                <li className='text-gray-300 text-sm'>First Activity is great</li>
                            </ul>
                        </div>
                        <div className=' w-1/2 pl-5'>
                            <h4 className='text-white font-semibold py-2'>Milestones</h4>
                            <ul className='list-disc list-inside'>
                                <li className='text-gray-300 text-sm'>Completed Frontend - 12/12/2002</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className='border-gray-600' />
                <div id='payment-section' className='p-2 bg-primary-950 my-2 rounded-md'>
                    <div className='flex justify-between items-center'>
                        <div className='text-3xl font-semibold text-white'>Payments</div>
                        <div className='flex justify-center gap-3'>
                            <div className='mx-2 '>
                                <span className='text-xs text-gray-500 text-left'>Total Amount</span>
                                <h3 className='text-xl font-semibold text-white'>Rs.12000</h3>
                            </div>
                            <div>
                                <span className='text-xs text-gray-500 text-left'>Total Paid</span>
                                <h3 className='text-xl font-semibold text-white'>Rs.8000</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            
        </div>
    )
}

export default page
