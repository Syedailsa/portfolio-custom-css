import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Contactform from "./contactform";
import Image from "next/image";

export function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="rounded-full bg-themeblue text-themewhite hover:bg-opacity-80 drop-shadow-[0_10px_10px_rgba(0,0,0,0.6)] 
      p-5 h-2 flex items-center"
        >
          Hire Me
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-themegray bg-opacity-80">
        <DialogHeader className="text-white">
          <DialogTitle className="text-themeblue">
            Get FREE consultation now !
          </DialogTitle>
          <DialogDescription className="pt-2">
            Help&apos;s to build FAST, SECURE and INTERACTIVE websites
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 text-white">
          <Contactform />
          <div>
            <div className="flex gap-2 justify-center items-center pt-2">
              <div className="w-6 sm:w-10">
                <Image
                  src="/nextlogo.svg"
                  alt="Next.js Logo"
                  width={80}
                  height={20}
                />
              </div>
              <div className="w-10">
                <Image
                  src="/tailwindlogo.svg"
                  alt="Tailwind CSS Logo"
                  width={80}
                  height={20}
                />
              </div>
              <div className="w-10">
                <Image
                  src="/sanitylogo.svg"
                  alt="Sanity Logo"
                  width={80}
                  height={20}
                />
              </div>
              <div className="w-10">
                <Image
                  src="/tslogo.svg"
                  alt="TypeScript Logo"
                  width={80}
                  height={20}
                />
              </div>
              <div className="w-10">
                <Image
                  src="/auth.svg"
                  alt="NextAuth Logo"
                  width={80}
                  height={20}
                />
              </div>
            </div>
          </div>
        </div>
        <DialogFooter className="text-white"></DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
