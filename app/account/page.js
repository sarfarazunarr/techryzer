"use client";
import React from 'react'
import Logo from '../components/Logo'

const page = () => {
    function changeit(){
        document.getElementById('register').classList.toggle('hidden');
        document.getElementById('login').classList.toggle('hidden');
    }
    return (
        <div>
            <section class="mt-10 bg-gray-900 ">
                <div id='register' class="hidden flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <Logo />
                    <div class="w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
                        <div class="p-6 space-y-2 md:space-y-4 sm:p-6">
                            <h1 class="text-xl font-bold leading-tight tracking-tight  md:text-2xl text-white">
                                Create an account
                            </h1>
                            <form class="space-y-2 md:space-y-4" action="#">
                                <div>
                                    <label for="email" class="block mb-2 text-sm font-medium text-white">Your email</label>
                                    <input type="email" name="email" id="email" class=" border   sm:text-sm rounded-lg focus:ring-primary-600  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white  focus:border-blue-500" placeholder="name@company.com" required="" />
                                </div>
                                <div>
                                    <label for="password" class="block mb-2 text-sm font-medium text-white">Password</label>
                                    <input type="password" name="password" id="password" placeholder="••••••••" class=" border   sm:text-sm rounded-lg focus:ring-primary-600  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white  focus:border-blue-500" required="" />
                                </div>
                                <div>
                                    <label for="confirm-password" class="block mb-2 text-sm font-medium text-white">Confirm password</label>
                                    <input type="confirm-password" name="confirm-password" id="confirm-password" placeholder="••••••••" class=" border   sm:text-sm rounded-lg focus:ring-primary-600  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white  focus:border-blue-500" required="" />
                                </div>
                                
                                <button type="submit" class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center focus:ring-primary-800">Create an account</button>
                                <p class="text-sm font-light  text-gray-400">
                                    Already have an account? <span class="font-medium  hover:underline text-primary-500" onClick={() => changeit()}>Login here</span>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
                <div id='login' class="flex flex-col mt-5 items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div className='my-3'>
                        <Logo />
                    </div>
                    <div class="w-full  rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
                        <div class="p-6 space-y-2 md:space-y-4 sm:p-6">
                            <h1 class="text-xl font-bold leading-tight tracking-tight  md:text-2xl text-white">
                                Login to your account
                            </h1>
                            <form class="space-y-2 md:space-y-4" action="#">
                                <div>
                                    <label for="email" class="block mb-2 text-sm font-medium text-white">Your email</label>
                                    <input type="email" name="email" id="email" class=" border   sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white " placeholder="name@company.com" required="" />
                                </div>
                                <div>
                                    <label for="password" class="block mb-2 text-sm font-medium text-white">Password</label>
                                    <input type="password" name="password" id="password" placeholder="••••••••" class="border   sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white" required="" />
                                </div>
                                <button type="submit" class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center focus:ring-primary-800">Login to account</button>
                                <p class="text-sm font-light  text-gray-400">
                                    New Here? <span class="font-medium  hover:underline text-primary-500" onClick={() => changeit()}>Register Now</span>
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
