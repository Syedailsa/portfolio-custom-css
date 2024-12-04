import Link from 'next/link'
import './../../app/styles/links.css'
import React from 'react'
import { GithubIcon, Linkedin, Mail } from "lucide-react";

export default function Links() {
  return (
    <div>
      <ul className="icons no-select">
           <li>
            <Link
              href="mailto:ilsasyeda24@gmail.com"
              className="style"
            >
              <Mail />
            </Link>
          </li>
          <br />
          <li>
            <Link
              href="https://www.linkedin.com/in/ilsa-ubaid-0a7950272/"
              className="style"
            >
              <Linkedin />
            </Link>
          </li>
          <br />
          <li>
            <Link
              href="https://github.com/Syedailsa"
              className="style"
            >
              <GithubIcon />
            </Link>
          </li>
        </ul>
    </div>
  )
}
