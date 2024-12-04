import '@/app/styles/downloadButton.css'
import { DownloadIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Download() {
  return (
    <div>
      <Link href="/my-resume.pdf" download>
          <button>
            Download resume
            <DownloadIcon height={15} width={15}/>
          </button>
      </Link>
    </div>
  );
}
