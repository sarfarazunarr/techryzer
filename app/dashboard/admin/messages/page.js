import { fetchApiData } from '../../../../lib/utils'
import Table from '../../../components/Table'
import React from 'react'

const page = async() => {
    const data = await fetchApiData('/api/message');
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-[96%] mx-2 bg-gray-900">
            <h3 className='text-white font-semibold text-xl py-2'>All Messages</h3>
            <Table header={["id", "name", "email", "message", "date"]} data={data.message} />
        </div>
    )
}

export default page
