import React from 'react'
import Image from 'next/image'

export default function Logos() {
  return (
    <div className="flex gap-4 justify-center items-center">
      <div className="w-20">
        <Image
          src="/nextlogo.svg"
          alt="Next.js Logo"
          width={80}
          height={20}
        />
      </div>
      <div className="w-20">
        <Image
          src="/tailwindlogo.svg"
          alt="Tailwind CSS Logo"
          width={80}
          height={20}
        />
      </div>
      <div className="w-20">
        <Image
          src="/sanitylogo.svg"
          alt="Sanity Logo"
          width={80}
          height={20}
        />
      </div>
      <div className="w-20">
        <Image
          src="/tslogo.svg"
          alt="TypeScript Logo"
          width={80}
          height={20}
        />
      </div>
      <div className="w-20">
        <Image
          src="/auth.svg"
          alt="NextAuth Logo"
          width={80}
          height={20}
        />
      </div>
    </div>
  )
}
