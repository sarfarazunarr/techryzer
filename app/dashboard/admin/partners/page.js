import React from 'react'

const page = () => {
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-[96%] mx-2 bg-gray-900">
            <h3 className='text-white font-semibold text-xl py-2'>All Partners</h3>
            <table className="w-full pr-2 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 text-center">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Id
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Email
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Phone
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Total Amount
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Withdrawn
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 px-6 py-4 font-medium text-gray-900 whitespace-nowrap overflow-auto dark:text-white">
                        <td scope="row" className="px-4 py-4 text-center">
                            12345
                        </td>
                        <td scope="row" className="px-4 py-4 text-center">
                            TechRyzer
                        </td>
                        <td scope="row" className="px-4 py-4 text-center">
                            hello@gmail.com
                        </td>
                        <td scope="row" className="px-4 py-4 text-center">
                            0301259174
                        </td>
                        <td scope="row" className="relative  overflow-visible px-4 group py-4 text-center cursor-pointer">
                            Rs.3020
                        </td>
                        <td scope="row" className="relative  overflow-visible px-4 group py-4 text-center cursor-pointer">
                            Rs.3000
                        </td>
                        <td scope="row" className="relative  overflow-visible px-4 group text-blue-500 py-4 text-center cursor-pointer">
                            View Details
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default page