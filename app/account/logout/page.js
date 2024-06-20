"use client";
import React, { useEffect } from 'react'
import { signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation';


const page = () => {
  const router = useRouter()
    useEffect(() => {
      const handleLogout = async() => {

        await signOut({redirect: false});
        router.push('/')
      }
      handleLogout()
    }, [router])
  return (
    <div className='flex w-full h-screen justify-center items-center text-3xl text-gray-800'>
      Logging out
    </div>
  )
}

export default page
