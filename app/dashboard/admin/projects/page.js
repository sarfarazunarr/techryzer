import React from 'react'
import Table from '../../../components/Table'
import { fetchApiData } from '../../../../lib/utils'

const page = async () => {
    const data = await fetchApiData('/api/projects');

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-[96%] mx-2 bg-gray-900">
            <h3 className='text-white font-semibold text-xl py-2'>All Projects</h3>
            <Table header={['title', 'category', 'client', 'status', 'deadline']} data={data.projects} />
        </div>

    )
}

export default page
