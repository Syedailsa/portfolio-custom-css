import { DownloadIcon } from 'lucide-react'
import React from 'react'

export default function Download() {
  return (
    <button className='rounded-full bg-button text-themewhite hover:bg-opacity-80 drop-shadow-[0_10px_10px_rgba(0,0,0,0.6)] p-5 h-2 flex items-center gap-2'>
        Download resume
        <DownloadIcon className="w-4 h-4" />
    </button>
  )
}
