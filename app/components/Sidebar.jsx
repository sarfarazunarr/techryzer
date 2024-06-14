import React from 'react'
import Logo from './Logo'
import Link from 'next/link'

const Sidebar = ({ data=[{link: '/', name: "Loading"}] }) => {
    return (
        <div className='w-80 my-24 -ml-5 h-full rounded-md p-10 bg-primary-700 text-white'>
            <Logo onSidebar={true} />
            <ul className='list-none mt-10 flex flex-col'>
                {data.map((item, key) => {
                    return (
                        <Link key={key} href={item.link} className='bg-primary-100 text-center rounded-md my-1 text-primary-600 py-2 px-3 hover:bg-primary-900 transition-colors duration-200 hover:text-white cursor-pointer'>{item.name}</Link>
                    )
                })}
            </ul>
        </div>
    )
}

export default Sidebar
