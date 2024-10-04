import React from 'react'
import Link from 'next/link'

export default function Header() {
  return (
    <header>
        <div className='md:flex justify-between items-center m-10 mb-2 text-themewhite'>
        <div className=''>
            {/* logo */}
            <p className='text-4xl mb-3'><big className='font-serif font-semibold text-themeblue'>P</big>ortfolio</p>
        </div>
      
        <nav>
            {/* navbar */}
            <ul className='flex gap-10 text-xl font-medium'>
                <li>
                   <Link href='/'>Home</Link>
                </li>
                <li>
                    <Link href='/about'>About Me</Link>
                </li>
                <li>
                    <Link href='/contact'>Contact</Link>
                </li>
            </ul>
        </nav>
        </div>
        <hr className='border-t-2 border-themegray' />
    </header>
  )
}
