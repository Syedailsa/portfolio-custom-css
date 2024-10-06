"use client"

import Image from 'next/image';
import { ChangeEvent, useState } from 'react';
import Links from '@/components/layout/links';
import Contactform from '@/components/layout/contactform';


export default function Contact() {
  // State for form data (optional if you plan to process the form later)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  function HandleChange(event: ChangeEvent<HTMLInputElement>): void {
    throw new Error('Function not implemented.');
  }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };

  return (
    <section className="text-themewhite py-12">
      <div className="container mx-auto px-6 lg:flex lg:justify-between lg:items-center">
        {/* Left Side - Text and Image */}
        <div className="lg:w-1/2 m-9 mb-8 lg:mb-0 text-center lg:text-left">
          <h2 className="text-5xl md:text-6xl font-bold leading-snug">
            <span className=' text-themewhite block'>Got a project in</span>
            <span className="text-themeblue block"> mind?</span>
          </h2>
          <div className="flex justify-center items-center mt-6 pb-3 drop-shadow-[0_10px_10px_rgba(0,0,0,0.6)]">
            <Image
              src="/personGraph.png"
              alt="Person walking on graph"
              width={250}
              height={150}
              className="mx-auto lg:mx-0"
            />
          </div>
        </div>

        {/* Right Side - Form */}
        
        <div className="lg:w-1/2 bg-themegray p-8 rounded-xl
        hover:outline-none hover:ring-2 hover:ring-gray-700 shadow-lg">

        <div className='mb-5'>
        <Links/>
        </div>
          <Contactform/>
        </div>
        </div>
    </section>
  );
}

