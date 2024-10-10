"use client"

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { MenuBar } from './menu'; 

export default function Header() {
  
  const pathname = usePathname()

  return (
    <header className='bg-gray-800 select-none '>
        <div className='md:flex justify-between items-center m-10 ml-2 pt-1 mb-2 text-themewhite'>
        <div className=''>
            {/* logo */}
            <p className='text-4xl mb-3'><big className='font-serif font-semibold text-themeblue'>Ilsa</big> <big className='font-serif font-semibold'>Ubaid</big></p>
        </div>
      
        <nav className='hidden md:block'>
            {/* navbar */}
            <ul className='flex gap-5 md:gap-10 md:text-xl font-medium select-none'>
                <li>
                   <Link href='/' className={`hover:font-semibold
                    ${pathname === '/' ? 'drop-shadow-[0_10px_10px_rgba(0,0,0,0.8)] font-semibold' : ''}`}>Home</Link>
                </li>
                <li>
                    <Link href='/about' className={`hover:font-semibold
                    ${pathname === '/about' ? 'drop-shadow-[0_10px_10px_rgba(0,0,0,0.8)] font-semibold' : ''}`}>About Me</Link>
                </li>
                <li>
                    <Link href='/projects' className={`hover:font-semibold
                    ${pathname === '/projects' ? 'drop-shadow-[0_10px_10px_rgba(0,0,0,0.8)] font-semibold' : ''}`}>Projects</Link>
                </li>
                <li>
                    <Link href='/contact' className={`hover:font-semibold
                    ${pathname === '/contact' ? 'drop-shadow-[0_10px_10px_rgba(0,0,0,0.8)] font-semibold' : ''}`}>Contact</Link>
                </li>
                
            </ul>
        </nav>
        <MenuBar/>
        </div>
    </header>
  )
}