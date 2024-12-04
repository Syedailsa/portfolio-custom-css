'use client'

import '@/app/styles/hireme.css'
import { useState } from "react";
import Contactform from "./contactform";
import Image from "next/image";

const DialogDemo = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDialog = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Button to Open Dialog */}
      <button className="hireMe" onClick={toggleDialog}>
        Hire Me
      </button>

      {/* Dialog */}
      {isOpen && (
        <div className="dialog-overlay">
          <div className="dialog-content">
            <div className="dialog-header">
              <div>
                <h2 className="dialog-title text-blue">Get FREE consultation now!</h2>
                <p className="dialog-description">
                  Help's to build FAST, SECURE, and INTERACTIVE websites
                </p>                
              </div>
              <button className="close-button" onClick={toggleDialog}>
                ✖
              </button>
            </div>
            <div className="dialog-body">
              <Contactform />
              <div className="tech-logos">
              <div className="w-6 sm:w-10">
                <Image
                  src="/nextlogo.svg"
                  alt="Next.js Logo"
                  width={40}
                  height={40}
                />
              </div>
              <div className="w-10">
                <Image
                  src="/tailwindlogo.svg"
                  alt="Tailwind CSS Logo"
                  width={40}
                  height={40}
                />
              </div>
              <div className="w-10">
                <Image
                  src="/sanitylogo.svg"
                  alt="Sanity Logo"
                  width={40}
                  height={40}
                />
              </div>
              <div className="w-10">
                <Image
                  src="/tslogo.svg"
                  alt="TypeScript Logo"
                  width={40}
                  height={40}
                />
              </div>
              <div className="w-10">
                <Image
                  src="/auth.svg"
                  alt="NextAuth Logo"
                  width={40}
                  height={40}
                />
              </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DialogDemo;



// import { Button } from "@/components/ui/button";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import Contactform from "./contactform";
// import Image from "next/image";

// export function DialogDemo() {
//   return (
//     <Dialog>
//       <DialogTrigger asChild>
//         <Button className='hireMe'>
//           Hire Me
//         </Button>
//       </DialogTrigger>
//       <DialogContent className="dialog-content">
//         <DialogHeader className="text-white">
//           <DialogTitle className="text-blue">
//             Get FREE consultation now !
//           </DialogTitle>
//           <DialogDescription className="">
//             Help&apos;s to build FAST, SECURE and INTERACTIVE websites
//           </DialogDescription>
//         </DialogHeader>
//         <div className="grid gap-4 text-white">
//           <Contactform />
//           <div>
//             <div className="flex gap-2 justify-center items-center pt-2">
              // <div className="w-6 sm:w-10">
              //   <Image
              //     src="/nextlogo.svg"
              //     alt="Next.js Logo"
              //     width={80}
              //     height={20}
              //   />
              // </div>
              // <div className="w-10">
              //   <Image
              //     src="/tailwindlogo.svg"
              //     alt="Tailwind CSS Logo"
              //     width={80}
              //     height={20}
              //   />
              // </div>
              // <div className="w-10">
              //   <Image
              //     src="/sanitylogo.svg"
              //     alt="Sanity Logo"
              //     width={80}
              //     height={20}
              //   />
              // </div>
              // <div className="w-10">
              //   <Image
              //     src="/tslogo.svg"
              //     alt="TypeScript Logo"
              //     width={80}
              //     height={20}
              //   />
              // </div>
              // <div className="w-10">
              //   <Image
              //     src="/auth.svg"
              //     alt="NextAuth Logo"
              //     width={80}
              //     height={20}
              //   />
              // </div>
//             </div>
//           </div>
//         </div>
//         <DialogFooter className="text-white"></DialogFooter>
//       </DialogContent>
//     </Dialog>
//   );
// }
