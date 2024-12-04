"use client"

import './../../app/styles/header.css';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  
  const pathname = usePathname()

  return (
    <header className='header'>
      <div className='header-align'>
        <div className=''>
            {/* logo */}
            <p className='logo'><big className='text-blue'>Ilsa</big> <big  className='text-white'>Ubaid</big></p>
        </div>
      
        <nav className=''>
            {/* navbar */}
            <ul className='nav-list'>
                <li>
                   <Link href={'/'} className={`navbar-link ${pathname === '/' ? 'active' : ''}`}>Home</Link>
                </li>
                <li>
                    <Link href={'/about'} className={`navbar-link ${pathname === '/about' ? 'active' : ''}`}>About Me</Link>
                </li>
                <li>
                    <Link href='/projects' className={`navbar-link ${pathname === '/projects' ? 'active' : ''}`}>Projects</Link>
                </li>
                <li>
                    <Link href='/contact' className={`navbar-link ${pathname === '/contact' ? 'active' : ''}`}>Contact</Link>
                </li>
                
            </ul>
        </nav>
      </div>
    </header>
  )
}

