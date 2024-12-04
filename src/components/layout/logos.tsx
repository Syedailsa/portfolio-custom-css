import React from 'react'
import Image from 'next/image'
import './../../app/styles/logos.css'

export default function Logos() {
  return (
    <div className="container no-select">
      <div>
        <Image
          src="/nextlogo.svg"
          alt="Next.js Logo"
          width={80}
          height={80}
          className='img no-select'
        />
      </div>
      <div>
        <Image
          src="/tailwindlogo.svg"
          alt="Tailwind CSS Logo"
          width={80}
          height={80}
          className='img no-select'
        />
      </div>
      <div>
        <Image
          src="/sanitylogo.svg"
          alt="Sanity Logo"
          width={80}
          height={80}
          className='img no-select'
        />
      </div>
      <div>
        <Image
          src="/tslogo.svg"
          alt="TypeScript Logo"
          width={80}
          height={80}
          className='img no-select'
        />
      </div>
      <div>
        <Image
          src="/auth.svg"
          alt="NextAuth Logo"
          width={80}
          height={80}
          className='img no-select'
        />
      </div>
    </div>
  )
}
