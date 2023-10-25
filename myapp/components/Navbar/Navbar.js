"use client"
import React from 'react'
import { signIn, signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import { AiOutlineShoppingCart } from 'react-icons/ai'


const Navbar = () => {
    const { data: session } = useSession()

  return (
    <header className='px-4 py-8 w-full'>
       <div className='flex justify-between max-w-screen-xl mx-auto'>
        <Link
        href={'/'}
        >DonutShop</Link>
        <div>
            {
                session?.user

                ? (
                    <div className='flex items-center'>
                    <AiOutlineShoppingCart className='mr-2' />
                    <button onClick={() => signOut()}>Logout</button>
                    </div>
                ) : (
                    <>
                    <Link href={'/login'}>Login</Link>
                    <Link href={'/register'}>Register</Link>
                    </>
                )
            }
        </div>
       </div>
    </header>
  )
}

export default Navbar