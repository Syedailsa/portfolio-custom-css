import React from 'react'
import Link from 'next/link'

export default function Header() {
  return (
    <header className='bg-gray-800'>
        <div className='md:flex justify-between items-center m-10 ml-2 pt-1 mb-2 text-themewhite'>
        <div className=''>
            {/* logo */}
            <p className='text-4xl mb-3'><big className='font-serif font-semibold text-themeblue'>Ilsa</big> <big className='font-serif font-semibold'>Ubaid</big></p>
        </div>
      
        <nav>
            {/* navbar */}
            <ul className='flex gap-5 md:gap-10 md:text-xl font-medium'>
                <li>
                   <Link href='/' className='hover:drop-shadow-[0_10px_10px_rgba(0,0,0,0.8)] hover:font-semibold'>Home</Link>
                </li>
                <li>
                    <Link href='/about' className='hover:drop-shadow-[0_10px_10px_rgba(0,0,0,0.8)] hover:font-semibold'>About Me</Link>
                </li>
                <li>
                    <Link href='/projects' className='hover:drop-shadow-[0_10px_10px_rgba(0,0,0,0.8)] hover:font-semibold'>Projects</Link>
                </li>
                <li>
                    <Link href='/contact' className='hover:drop-shadow-[0_10px_10px_rgba(0,0,0,0.8)] hover:font-semibold'>Contact</Link>
                </li>
                
            </ul>
        </nav>
        </div>
    </header>
  )
}
