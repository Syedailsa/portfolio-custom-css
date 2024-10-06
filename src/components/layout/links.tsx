import Link from 'next/link'
import React from 'react'
import { GithubIcon, Linkedin, Mail } from "lucide-react";

export default function Links() {
  return (
    <div>
      <ul className="text-themeblue mb-4 flex gap-3">
           <li>
            <Link
              href="mailto:ilsasyeda24@gmail.com"
              className="flex items-center space-x-2"
            >
              <Mail />
              {/* <span className="text-themewhite text-opacity-85">
                ilsasyeda24@gmail.com
              </span> */}
            </Link>
          </li>
          <br />
          <li>
            <Link
              href="https://www.linkedin.com/in/ilsa-ubaid-0a7950272/"
              className="flex items-center space-x-2"
            >
              <Linkedin />
              {/* <span className="text-themewhite text-opacity-85">
                Ilsa Ubaid
              </span> */}
            </Link>
          </li>
          <br />
          <li>
            <Link
              href="https://github.com/Syedailsa"
              className="flex items-center space-x-2"
            >
              <GithubIcon />
              {/* <span className="text-themewhite text-opacity-85">
                Ilsa Ubaid
              </span> */}
            </Link>
          </li>
        </ul>
    </div>
  )
}
