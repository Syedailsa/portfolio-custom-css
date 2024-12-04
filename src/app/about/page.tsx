import './../styles/about.css';
import React from "react";
import Image from "next/image";
import Logos from "@/components/layout/logos";

export default function About() {
  return (
    <div className="About">
      <div className="about-section">
        <div className="about-heading">
          <h2 id="color-white">About</h2>
          <h2 id="color-blue">Me</h2>
        </div>
        <p className='no-select'>
          As a <big id="color-blue">Software engineering</big> student with a
          passion for web development, I specialize in creating dynamic and
          responsive web applications using cutting-edge technologies such as
          <span> Next.js</span>,
          <span> TypeScript</span>, and
          <span> Tailwind CSS</span>. My
          expertise extends to integrating
          <span> Sanity Headless CMS</span>
          , allowing for seamless content management and an engaging user
          experience. I also have advanced skills in
          <span> NextAuth</span> for secure
          authentication, ensuring that user data remains protected while
          providing a smooth login experience. By combining these technologies,
          I can deliver high-performance, scalable applications that meet the
          unique needs of your business. My goal is to help you bring your
          vision to life with innovative solutions tailored specifically to your
          requirements, while also ensuring the highest standards of usability
          and accessibility. Let’s work together to create something
          exceptional!
        </p>
        <div className="logo">
          <Logos />
        </div>
      </div>

      <div className="about-rightSide">
        <div className='about-imgs'>
          {/* right side */}

          <Image
            id="img1"
            src="/squareDoodle.png"
            alt="doodle"
            height={214}
            width={314}
          />

          <Image
            id="img2"
            src="/personOnTable.png"
            alt="person"
            height={272}
            width={300}
          />
        </div>
      </div>
    </div>
  );
}

