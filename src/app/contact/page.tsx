"use client"

import Image from 'next/image';
import Links from '@/components/layout/links';
import Contactform from '@/components/layout/contactform';
import './../styles/contact.css'


export default function Contact() {

  return (
    <section className="text-white py">
      <div className="container main">
        {/* Left Side - Text and Image */}
        <div className="leftSide">
          <h2>
            <span className='text-white block'>Got a project in</span>
            <span className="text-blue block"> mind?</span>
          </h2>
          <div className="img-style">
            <Image
              src="/personGraph.png"
              alt="Person walking on graph"
              width={250}
              height={320}
              className="img no-select"
            />
          </div>
        </div>

        {/* Right Side - Form */}
        
        <div className="contact-form">
          <div className='mb'>
            <Links/>
          </div>
          <Contactform/>
        </div>
     </div>
    </section>
  );
}

