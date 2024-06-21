"use client";
import { getUserSession } from '../../../../../lib/utils';
import React, { useEffect, useState } from 'react'
import { connectDB } from '../../../../../lib/db_connection';

function Prform() {
    const [pending, setPending] = useState(false);
    const [userid, setUserid] = useState();
    const [message, setMessage] = useState('');
    const [data, setData] = useState({
      title: '',
      category: '',
      description: '',
      clientName: getUserSession()?.name || '',
      budget: 0,
      deadline: '',
    });
    useEffect(() => {
        const fetchData = async () => {
        await connectDB();
          const sessiondata = await getUserSession();
          setUserid(sessiondata?.id || '');
          setData({
            title: '',
            category: '',
            description: '',
            clientName: sessiondata?.name || '',
            budget: 0,
            deadline: '',
          });
        };
        fetchData();
      }, []);
    const handleSubmit = () => {
        setPending(true)
        try {
            console.log(data, userid)
            setMessage('Data Recieved')
            setPending(false)
            
        } catch (error) {
            setPending(false)
            setMessage('Error')
            console.log(error)
        }
    }

    const onChange = (e) => {
        setData({
            ...data,
            [e.target.id]: e.target.value
        })
    }
    return (
        <div className='flex flex-col mx-auto justify-center items-center w-2/4 '>
            <form className='w-full'>
                <h3 className='text-center text-3xl font-semibold my-5'>Initialize Project</h3>
                <div className='flex flex-col space-y-2'>
                    <label className="text-white">Title</label>
                    <input
                        type="text"
                        id='title'
                        value={data.title}
                        onChange={(e) => {
                            onChange(e);
                        }}
                        className="px-3 py-2 bg-gray-700 text-white rounded"
                    />
                </div>

                <div className='flex flex-col space-y-2'>
                    <label className="text-white">Category</label>
                    <input
                        type="text"
                        id='category'
                        value={data.category}
                        onChange={(e) => {
                            onChange(e);
                        }}
                        className="px-3 py-2 bg-gray-700 text-white rounded"
                    />
                </div>

                <div className='flex flex-col space-y-2'>
                    <label className="text-white">Description</label>
                    <textarea
                        type="text"
                        id='description'
                        value={data.description}
                        onChange={(e) => {
                            onChange(e);
                        }}

                        className="px-3 py-2 bg-gray-700 h-40 text-white rounded"
                    />
                </div>

                <div className='flex flex-col space-y-2'>
                    <label className="text-white">Client Name</label>
                    <input
                        type="text"
                        value={data.clientName}
                        className="px-3 py-2 bg-gray-700 text-white rounded disabled:opacity-65"
                        disabled />
                </div>

                <div className='flex flex-col space-y-2'>
                    <label className="text-white">Budget</label>
                    <input
                        type="text"
                        value={data.budget}
                        id='budget'
                        onChange={(e) => {
                            onChange(e);
                        }}
                        className="px-3 py-2 bg-gray-700 text-white rounded"
                    />
                </div>

                <div className='flex flex-col space-y-2'>
                    <label className="text-white">Deadline</label>
                    <input
                        type="date"
                        id='deadline'
                        value={data.deadline}
                        onChange={(e) => {
                            onChange(e);
                        }}
                        className="px-3 py-2 bg-gray-700 text-white rounded"
                    />
                </div>
                {message && <p className="text-white">{message}</p>}
                <button
                    type="submit"
                    onClick={handleSubmit}
                    className="px-4 py-2 bg-blue-500 my-2 text-white rounded hover:bg-blue-600"
                >
                    {pending ? "Creating..." : "Create"}
                </button>
            </form>
        </div>
    )
}

export default Prform
