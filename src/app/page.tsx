import Image from "next/image";

export default function Home() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-4">
      
      <div className="flex justify-center items-center m-40 md:mr-0">
        {/* left side */}
      <Image className='' src='/arrow2.png' alt="arrow" height={50} width={35}/>
      <div className="text-4xl md:text-6xl text-themewhite font-sans font-semibold ">
      <h1 className="mb-2">
        <pre>Creative UI/UX</pre>
      </h1>
      <h1 className="text-themeblue">
        <pre>Web-developer</pre>
      </h1>
      </div>
      </div>
      
      
      <div className="relative w-full h-[500px] flex sm:justify-center p-20  top-5 md:col-start-3 md:col-span-4">
        {/* right side */}

      <Image className='absolute z-0' src='/circleDoodle.png' alt="doodle" height={514} width={514}/>

      <Image className='relative z-10 top-48' src='/personSitting.png'  alt="person" height={472} width={400}/>
      
      </div>


    </main>
  );
}
