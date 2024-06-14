import React from 'react'
import { Ubuntu } from "next/font/google";
import Sidebar from '../../components/Sidebar'
const ubuntu = Ubuntu({ subsets: ["latin"], weight: '400' });

const layout = ({ children }) => {

    const links = [{ link: '/dashboard/user', name: "Home" }, { link: '/dashboard/user/projects', name: "Projects" }, { link: '/dashboard/user/payments', name: "Payments" }, { link: '/dashboard/user/projectstatus', name: "Project Status" }, { link: '/dashboard/user/helpline', name: "Help" }, { link: '/account/logout', name: "Logout" }]

    return (
        <div className={`${ubuntu.className} bg-[#100C08] w-full flex `}>
            <Sidebar data={links} />
            <div className='ml-10 w-full mr-10 h-full rounded-md mt-24 bg-gray-900 p-10 text-white'>
                {children}
            </div>
        </div>
    )
}

export default layout
