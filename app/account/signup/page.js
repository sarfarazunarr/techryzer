"use client";
import React, { useState } from 'react'
import Logo from '../../components/Logo'
import Link from 'next/link';
import axios from 'axios';

const page = () => {
    const [data, setData] = useState({
        name: "", email : "", phone: "", account_type: "", password: ""
    })
    const [error, setError] = useState()
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState()

    const handleInput = (e) => {
        setData((prev) => ({...prev, [e.target.name]: e.target.value}))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(data.name == "", data.email  == "", data.phone == "", data.account_type == "", data.password == ""){
            setError("Please fill are fields!")
            return 0;
        }
        if(data.password !== document.getElementById('confirm_password').value){
            setError("Password Does not match!")
            return 0;
        }
        if(data.account_type == ''){
            setError("Select Type to continue")
            return 0;
        }
        try {
            setLoading(true)
            const res = await axios.post('/api/auth/register', data);
            if(res.status == 201){
                setMessage(res.data.message)
                setLoading(false)
                const form = e.target;
                form.reset();
                return 1;
            }
        } catch (error) {
            if(error.response.status === 409){
                setError("Email already exists!")
                setLoading(false)
                return 0;
            }
            setError("Something went wrong!")
        }
    }



    return (
        <div>
            <section className="my-16 bg-gray-900">
                <div id='register' className="flex flex-col items-center justify-center px-6 py-8 mx-auto w-full md:h-screen lg:py-0">
                    <Logo />
                    <div className="w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
                        <div className="p-6 space-y-2 md:space-y-4 sm:p-6">
                            <h1 className="text-xl font-bold leading-tight tracking-tight  md:text-2xl text-white">
                                Create an account
                            </h1>
                            <form className="space-y-2 md:space-y-4" onSubmit={handleSubmit}>
                                <div className='flex flex-row gap-2 w-full'>
                                    <div>
                                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-white">Your Name</label>
                                        <input type="name" name="name" id="name" className=" border   sm:text-sm rounded-lg focus:ring-primary-600  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white  focus:border-blue-500" placeholder="John Doe" required=""  onChange={handleInput} />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Your email</label>
                                        <input type="email" name="email" id="email" className=" border   sm:text-sm rounded-lg focus:ring-primary-600  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white  focus:border-blue-500" placeholder="name@company.com" required="" onChange={handleInput} />
                                    </div>
                                </div>
                                <div className='flex flex-row gap-2 w-full'>
                                    <div>
                                        <label htmlFor="phone" className="block mb-2 text-sm font-medium text-white">Phone Number</label>
                                        <input type="text" name="phone" id="phone" className=" border   sm:text-sm rounded-lg focus:ring-primary-600  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white  focus:border-blue-500" placeholder="03012591774" required="" onChange={handleInput} />
                                    </div>
                                    <div>
                                        <label htmlFor="accounttype" className="block mb-2 text-sm font-medium text-white">Account Type</label>
                                        <select name="account_type" id="account_type" className=" border sm:text-sm rounded-lg focus:ring-primary-600  block w-[180px] p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white  focus:border-blue-500" placeholder={"Select Type"} required="" onChange={handleInput}>
                                            <option className='p-2 bg-gray-950 text-white hover:bg-primary-600' name="account_type" value=''>Select Type</option>
                                            <option className='p-2 bg-gray-950 text-white hover:bg-primary-600' name="account_type" value='client'>Client</option>
                                            <option className='p-2 bg-gray-950 text-white hover:bg-primary-600' value='partner'>Partner</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='flex flex-row gap-2 w-full'>
                                    <div>
                                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">Password</label>
                                        <input type="password" name="password" id="password" placeholder="••••••••" className=" border   sm:text-sm rounded-lg focus:ring-primary-600  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white  focus:border-blue-500" required="" onChange={handleInput} />
                                    </div>
                                    <div>
                                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">Confirm Password</label>
                                        <input type="password" name="confirm_password" id="confirm_password" placeholder="••••••••" className=" border   sm:text-sm rounded-lg focus:ring-primary-600  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white  focus:border-blue-500" required="" />
                                    </div>
                                </div>
                                <p className={` text-white px-3 text-center py-1 rounded-md my-2`}>{error || message ? error || message : ''}</p>
                                <button type="submit" onClick={() => handleSubmit} className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center focus:ring-primary-800 disabled:bg-gray-400 disabled:text-gray-800" disabled={loading ? true : false}>{loading ? 'Creating Account...': "Create Account"}</button>
                                <p className="text-sm font-light  text-gray-400">
                                    Already have an account? <Link href="/account/signin" className="font-medium  hover:underline text-primary-500">Login here</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default page
