import { Facebook, Github, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
      <footer className="bg-gray-800 text-gray-400 py-4">

        <ul className="flex gap-6 flex-wrap items-center justify-center mb-4">
          <li>
            <Link href="https://facebook.com" target="_blank">
              <Facebook className="p-2 h-8 w-8 sm:w-10 sm:h-10 
              flex justify-center items-center text-themewhite hover:text-opacity-80 bg-themegray rounded-full overflow-visible"  />
            </Link>
          </li>
          <li>
            <Link href="https://instagram.com" target="_blank">
              <Instagram className="p-2 h-8 w-8 sm:w-10 sm:h-10 text-themewhite hover:text-opacity-80 bg-themegray rounded-full overflow-visible" />
            </Link>
          </li>
          <li>
            <Link href="https://linkedin.com" target="_blank">
              <Linkedin className="p-2 h-8 w-8 sm:w-10 sm:h-10 text-themewhite hover:text-opacity-80 bg-themegray rounded-full overflow-visible" />
            </Link>
          </li>
          <li>
            <Link href="https://twitter.com" target="_blank">
              <Twitter className="p-2 h-8 w-8 sm:w-10 sm:h-10 text-themewhite hover:text-opacity-80 bg-themegray rounded-full overflow-visible" />
            </Link>
          </li>
          <li>
            <Link href="https://github.com" target="_blank">
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

