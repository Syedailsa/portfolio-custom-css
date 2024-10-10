import Link from 'next/link'
import React from 'react'
import { GithubIcon, Linkedin, Mail } from "lucide-react";

export default function Links() {
  return (
    <div>
      <ul className="text-themeblue mb-4 flex gap-3 no-select">
           <li>
            <Link
              href="mailto:ilsasyeda24@gmail.com"
              className="flex items-center space-x-2"
            >
              <Mail />
            </Link>
          </li>
          <br />
          <li>
            <Link
              href="https://www.linkedin.com/in/ilsa-ubaid-0a7950272/"
              className="flex items-center space-x-2"
            >
              <Linkedin />
            </Link>
          </li>
          <br />
          <li>
            <Link
              href="https://github.com/Syedailsa"
              className="flex items-center space-x-2"
            >
              <GithubIcon />
            </Link>
          </li>
        </ul>
    </div>
  )
}
