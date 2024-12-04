import React from 'react'
import Image from "next/image";
import Hireme from "@/components/layout/hireme";
import Download from "@/components/layout/download-resume";
import './../styles/body.css'

export default function Body() {
  return (
    <div>
    <main className="page-body">
      <div className="leftSide">

        {/* left side */}

        <Image className='arrow-img' src='/arrow2.png' alt="arrow" height={80} width={45} />

        <div className="main-text">

          <h1 id="mb">
            <pre>Creative UI/UX</pre>
          </h1>
          <h1 id="text-blue">
            <pre>Web-developer</pre>
          </h1>

          <div className="buttons">
            <Hireme/>
            <Download/>
          </div>
          
        </div>
        
      </div>

    <div className="rightSide"> 
      {/* right side */}

      <Image id='img1' src='/circleDoodle.png' alt="doodle" height={414} width={450} />

      <Image id='img2' src='/personSitting.png' alt="person" height={472} width={400} />
    </div>
</main>
    </div>
  )
}
