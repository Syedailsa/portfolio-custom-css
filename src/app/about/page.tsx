import React from "react";
import Image from "next/image";
import Logos from "@/components/layout/logos";

export default function About() {
  return (
    <div className="mt-11 px-5 md:m-19 lg:grid grid-cols-2 md:place-items-center md:pl-28 md:pr-28">
      
    <div className="mb-28 sm:mb-16">
      <div className="flex gap-2 text-6xl font-semibold mb-7">
        <h2 className="text-themewhite">About</h2>
        <h2 className="text-themeblue ">Me</h2>
      </div>
      <p className="font-medium text-themewhite
          text-opacity-85">
            As a <big className="text-themeblue">Software engineering</big> student with a passion for web development, I specialize in creating dynamic and responsive web applications using cutting-edge technologies such as <span className="text-themewhite font-bold">Next.js</span>, <span className="text-themewhite font-bold">TypeScript</span>, and <span className="text-themewhite font-bold">Tailwind CSS</span>. My expertise extends to integrating <span className="text-themewhite font-bold">Sanity Headless CMS</span>, allowing for seamless content management and an engaging user experience. I also have advanced skills in <span className="text-themewhite font-bold">NextAuth</span> for secure authentication, ensuring that user data remains protected while providing a smooth login experience. By combining these technologies, I can deliver high-performance, scalable applications that meet the unique needs of your business. My goal is to help you bring your vision to life with innovative solutions tailored specifically to your requirements, while also ensuring the highest standards of usability and accessibility. Let’s work together to create something exceptional!
          </p>
          <div className="m-5"><Logos/></div>
          
      </div>

    <div className="relative left-5 bottom-20 h-[300px] w-[300px] sm:w-full  sm:h-[500px] flex justify-center items-center lg:col-start-3 lg:col-span-4">
        {/* right side */}

      <Image className='absolute z-0' src='/squareDoodle.png' alt="doodle" height={514} width={514}/>

      <Image className='relative z-10 top-16 drop-shadow-[0_10px_10px_rgba(0,0,0,0.6)]' src='/personOnTable.png'  alt="person" height={472} width={400}/>
      </div>
      
    </div>
  );
}
