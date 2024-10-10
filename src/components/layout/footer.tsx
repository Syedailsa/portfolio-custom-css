import { Facebook, Github, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
      <footer className="bg-gray-800 text-gray-400 py-4">

        <ul className="flex gap-6 flex-wrap items-center justify-center mb-4">
          <li>
            <Link href="https://www.facebook.com/profile.php?id=100012511305631&mibextid=LQQJ4d" target="_blank">
              <Facebook className="p-2 h-8 w-8 sm:w-10 sm:h-10 
              flex justify-center items-center text-themewhite hover:text-opacity-80 bg-themegray rounded-full overflow-visible"  />
            </Link>
          </li>
          <li>
            <Link href="https://www.instagram.com/syeda__ilsa/profilecard/?igsh=MWEzdzQ4azZuMHo2ZA==" target="_blank">
              <Instagram className="p-2 h-8 w-8 sm:w-10 sm:h-10 text-themewhite hover:text-opacity-80 bg-themegray rounded-full overflow-visible" />
            </Link>
          </li>
          <li>
            <Link href="www.linkedin.com/in/ilsa-ubaid-0a7950272" target="_blank">
              <Linkedin className="p-2 h-8 w-8 sm:w-10 sm:h-10 text-themewhite hover:text-opacity-80 bg-themegray rounded-full overflow-visible" />
            </Link>
          </li>
          <li>
            <Link href="https://x.com/ilsaubaid" target="_blank">
              <Twitter className="p-2 h-8 w-8 sm:w-10 sm:h-10 text-themewhite hover:text-opacity-80 bg-themegray rounded-full overflow-visible" />
            </Link>
          </li>
          <li>
            <Link href="https://github.com/Syedailsa" target="_blank">
              <Github className="p-2 h-8 w-8 sm:w-10 sm:h-10 text-themewhite hover:text-opacity-80
              bg-themegray rounded-full overflow-visible" />
            </Link>
          </li>
        </ul>

        <div className="text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </footer>
  );
}

