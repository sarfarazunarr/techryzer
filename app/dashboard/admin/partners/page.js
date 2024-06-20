import React from 'react'
import Table from '../../../components/Table'

const page = () => {
    const data = [
        {
            id: "2",
            name: "Sarfaraz",
            email: "sarfarazunarr@gmail.com",
            phone: "03012591774",
            totalAmount: "15000",
            withdrawn: "Rs.10000"
        },
        {
            id: "2",
            name: "Sarfaraz",
            email: "sarfarazunarr@gmail.com",
            phone: "03012591774",
            totalAmount: "15000",
            withdrawn: "Rs.10000"
        },
        {
            id: "2",
            name: "Sarfaraz",
            email: "sarfarazunarr@gmail.com",
            phone: "03012591774",
            totalAmount: "15000",
            withdrawn: "Rs.10000"
        },
    ]
    function myname() {console.log('name')}
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-[96%] mx-2 bg-gray-900">
            <h3 className='text-white font-semibold text-xl py-2'>All Partners</h3>
            <Table header={['id', 'name', 'email', 'phone', 'totalAmount', 'withdrawn']} data={data} actionbtn={'View'} actionfunction={myname()} />
        </div>
    )
}

export default page
