import Table from '../../../components/Table'
import React from 'react'
import { fetchApiData } from '../../../../lib/utils'
const MyPage = ({ data }) => {
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-[96%] mx-2 bg-gray-900">
            <h3 className="text-white font-semibold text-xl py-2">All Clients</h3>
            <Table
                header={['name', 'email', 'phone', 'projects', 'payment']}
                data={data}
            />
        </div>
    )
}

const page = async () => {
    const data = await fetchApiData('/api/profile/admin')
    return <MyPage data={data.users} />
}

export default page