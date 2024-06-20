import React from 'react'
import { Ubuntu } from "next/font/google";
import Sidebar from '../../components/Sidebar'
import { getUserSession } from '../../../lib/utils';
import NotFound from '../../not-found';
const ubuntu = Ubuntu({ subsets: ["latin"], weight: '400' });

const layout = async ({ children }) => {
    const udata = await getUserSession()
    if(udata.type !== 'admin'){
        return <NotFound />
    }
    const links = [{ link: '/dashboard/admin', name: "Home" }, { link: '/dashboard/admin/projects', name: "Projects" }, { link: '/dashboard/admin/clients', name: "Clients" }, { link: '/dashboard/admin/payments', name: "Payments" }, { link: '/dashboard/admin/messages', name: "Messages" }, { link: '/dashboard/admin/partners', name: "Partners" }, { link: '/account/logout', name: "Logout" }]
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
