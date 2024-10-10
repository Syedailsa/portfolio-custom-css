import * as React from "react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export interface IProject {
    title: string;
    description: string;
    image: {
      src: string; 
      alt: string; 
      width?: number; 
      height?: number; 
    };
    vercelurl: string; 
    githuburl: string;
  }
  
  export const pData: IProject[] = [
    {
      title: 'Creative Themed Calculator',
      description:
        'Creative and responsive pookie themed calculator built on plain HTML, CSS and Typescript',
      image: {
        src: '/calci-project.png',  
        alt: 'Pookie Themed Calculator Screenshot', 
        width: 400,  
        height: 300,  
      },
      vercelurl: 'https://pookie-themed-calculator.vercel.app/',
      githuburl: 'https://github.com/Syedailsa/pookie-calci.git'
    },
    {
        title: 'Figma Design Clone',
      description:
        'Figma design pixel perfect and responsive clone built on plain Next.Js, Tailwind CSS',
      image: {
        src: '/figma-project.png',  
        alt: 'figma clone', 
        width: 400,  
        height: 300,  
      },
      vercelurl: 'https://vercel.com/syedailsas-projects/figma-to-next',
      githuburl: 'https://github.com/Syedailsa/figma-to-next.git'
    }
  ];
  

export function Cards({ pData }:{ pData: IProject[] }) {
  return (
    <div className="md:lg:flex justify-center items-center gap-10 m-20">
        {pData.map((project) => {

            return(
            <div className="flex justify-center  select-none" key={project.title}>
              <Card className="w-[350px] text-themewhite bg-themegray bg-opacity-40 hover:bg-opacity-80 mb-4">
                <CardHeader></CardHeader>
                <CardContent>

                  <div className="grid w-full items-start gap-4">
                    
                  <Link href={project.vercelurl}><Image src={project.image.src} alt={project.image.alt} height={project.image.height} width={project.image.width} className="rounded-xl no-select" /> </Link>
                   
                  </div>
                  <CardTitle className="mt-4 mb-4">{project.title}</CardTitle>
                  <CardDescription >{project.description}</CardDescription>

                </CardContent>
          
                <CardFooter>
                  <div className="flex gap-4 rounded-xl">
                    <Button>
                      <Link href={project.githuburl}>
                        Github repo
                      </Link>
                    </Button>
                    <Button>
                      <Link href={project.vercelurl}>Vercel link</Link>
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </div>    
            )

        })}
    </div>
  );
}
