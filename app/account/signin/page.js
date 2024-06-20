"use client";
import React, { useState } from 'react'
import Logo from '../../components/Logo'
import Link from 'next/link';
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation';

const page = () => {
    const [data, setData] = useState({
        email: "", password: ""
    })
    const [error, setError] = useState()
    const [loading, setLoading] = useState(false)
    const router = useRouter();
    const handleInput = (e) => {
        setData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (data.name == "", data.password == "") {
            setError("Please fill are fields!")
            return 0;
        }
        try {
            setLoading(true)
            const res = await signIn("credentials", {
                email: data.email,
                password: data.password,
                redirect: false
            })
            if(res.error){
                setError("Invalid Credentails");
                setLoading(false)
                return;
            }
            router.replace('/')
        } catch (error) {
            setLoading(false)
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
                                Login to your account
                            </h1>
                            <form className="space-y-2 md:space-y-4" onSubmit={handleSubmit}>

                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Your email</label>
                                    <input type="email" name="email" id="email" className=" border   sm:text-sm rounded-lg focus:ring-primary-600  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white  focus:border-blue-500" placeholder="name@company.com" required="" onChange={handleInput} />
                                </div>

                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">Password</label>
                                    <input type="password" name="password" id="password" placeholder="••••••••" className=" border   sm:text-sm rounded-lg focus:ring-primary-600  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white  focus:border-blue-500" required="" onChange={handleInput} />
                                </div>

                                <p className={` text-white px-3 text-center py-1 rounded-md my-2`}>{error ? error : ''}</p>
                                <button type="submit" onClick={() => handleSubmit} className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center focus:ring-primary-800 disabled:bg-gray-400 disabled:text-gray-800" disabled={loading ? true : false}>{loading ? 'Logging to Account...' : "Login to Account"}</button>
                                <p className="text-sm font-light  text-gray-400">
                                    New Here? <Link href="/account/signup" className="font-medium  hover:underline text-primary-500">Register here</Link>
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
