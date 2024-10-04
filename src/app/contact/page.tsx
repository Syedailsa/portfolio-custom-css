import React from 'react'
import Link from 'next/link'

export default function Contact() {
  return (
    <div className='text-themewhite m-16'>
      <h2 className="text-3xl mb-7"><big className='text-themeblue'>C</big>ontact Me</h2>
            <p className="font-semibold text-themeblue">
                If you'd like to get in touch, feel free to reach out via email or
                through my social media channels:
            </p>
            <br />
            <div className='border-double border-themegray border-4  m-16'>
            <ul className='text-themeblue m-16'>
                <li>
                  Email:
                    <Link className='text-themewhite' href="mailto:ilsasyeda24@gmail.com"> ilsasyeda24@gmail.com</Link>
                </li>
                <br />
                <li>
                    LinkedIn:
                    <Link className='text-themewhite' href="www.linkedin.com/in/ilsa-ubaid-0a7950272"> Ilsa Ubaid</Link>
                </li>
                <br />
                <li>
                     Github: <Link className='text-themewhite' href="https://github.com/Syedailsa"> Github Profile</Link>
                </li>
            </ul>
            </div>
            <br />
    </div>
  )
}
