"use client";
import React from 'react'

const Table = ({ header, data, actionbtn, actionfunction }) => {
    const printdata = () => {
        console.log('hello')
    }
    return (
        <>
            <table className="w-full pr-2 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 text-center">
                    <tr>
                        {header.map((item, id) => {
                            return (
                                <th scope="col" key={id} className="px-6 py-3 uppercase">
                                    {item}
                                </th>
                            )
                        })}
                        <th scope="col" className="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, id) => {
                        return (

                            <tr key={id} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 px-6 py-4 font-medium text-gray-900 whitespace-nowrap overflow-auto dark:text-white">
                                {header.map((keyvalue, keyindex) => {
                                    return (
                                        <td scope="row" key={keyindex} className="px-4 py-4 text-center">
                                            {item[keyvalue]}
                                        </td>
                                    )
                                })}
                                <td scope="row" className="relative  overflow-visible px-4 group text-blue-500 py-4 text-center cursor-pointer" onClick={() => printdata()}>
                                    View More
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}

export default Table
