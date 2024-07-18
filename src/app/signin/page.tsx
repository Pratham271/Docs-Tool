import SigninForm from '@/components/SigninForm'
import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'

import { redirect } from 'next/navigation'
import React from 'react'

const page = async() => {
  const session = await getServerSession(authOptions)
  if(session?.user){
    redirect("/")
  }
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className='p-6 md:p-12 lg:p-24'>
                <h1 className="scroll-m-20 text-md md:text-lg lg:text-xl font-bold tracking-tight text-center md:text-left mb-6 lg:mb-10 flex justify-center text-balance">Welcome Back</h1>
                <div className='lg:pl-20'>
                  <SigninForm/>
                </div>
            </div>
        <div className="hidden lg:block bg-slate-200 h-screen dark:bg-neutral-800"></div>
    </div>
  )
}

export default page
