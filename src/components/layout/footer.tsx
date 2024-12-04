import { Facebook, Github, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import React from "react";
import './../../app/styles/footer.css'

export default function Footer() {
  return (
      <footer className="footer">

        <ul className="ul">
          <li>
            <Link href="https://www.facebook.com/profile.php?id=100012511305631&mibextid=LQQJ4d" target="_blank">
              <Facebook className="icon"  />
            </Link>
          </li>
          <li>
            <Link href="https://www.instagram.com/syeda__ilsa/profilecard/?igsh=MWEzdzQ4azZuMHo2ZA==" target="_blank">
              <Instagram className="icon" />
            </Link>
          </li>
          <li>
            <Link href="www.linkedin.com/in/ilsa-ubaid-0a7950272" target="_blank">
              <Linkedin className="icon" />
            </Link>
          </li>
          <li>
            <Link href="https://x.com/ilsaubaid" target="_blank">
              <Twitter className="icon" />
            </Link>
          </li>
          <li>
            <Link href="https://github.com/Syedailsa" target="_blank">
              <Github className="icon" />
            </Link>
          </li>
        </ul>

        <div className="footer-text">
          <small>&copy;2024 All rights reserved.</small>
        </div>
      </footer>
  );
}

