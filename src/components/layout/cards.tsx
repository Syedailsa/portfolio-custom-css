import React from "react";
import Image from "next/image";
import Link from "next/link";
import '@/app/styles/card.css'

// Define the interface for a project
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

// Example project data
export const pData: IProject[] = [
  {
    title: "Creative Themed Calculator",
    description:
      "Creative and responsive pookie-themed calculator built on plain HTML, CSS, and TypeScript",
    image: {
      src: "/calci-project.png",
      alt: "Pookie Themed Calculator Screenshot",
      width: 310,
      height: 150,
    },
    vercelurl: "https://pookie-themed-calculator.vercel.app/",
    githuburl: "https://github.com/Syedailsa/pookie-calci.git",
  },
  {
    title: "Figma Design Clone",
    description:
      "Figma design pixel-perfect and responsive clone built on plain Next.js, Tailwind CSS",
    image: {
      src: "/figma-project.png",
      alt: "Figma clone",
      width: 310,
      height: 150,
    },
    vercelurl: "https://vercel.com/syedailsas-projects/figma-to-next",
    githuburl: "https://github.com/Syedailsa/figma-to-next.git",
  },
];

// Main Cards component
export function Cards({ pData }: { pData: IProject[] }) {
  return (
    <div className="main" style={{ display: "flex", position: 'absolute', justifyContent: "center", gap: "20px", margin: "20px", padding: '15px' }}>
      {pData.map((project) => (
        <div
          key={project.title}
          className="card" 
          style={{
            width: "350px",
            padding: "20px",
            backgroundColor: "rgba(57, 62, 70, 0.4)",
            borderRadius: "8px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div>
            <Link href={project.vercelurl}>
              <Image
                src={project.image.src}
                alt={project.image.alt}
                width={project.image.width}
                height={project.image.height}
                style={{ borderRadius: "8px", cursor: "pointer" }}
              />
            </Link>
          </div>
          <h3 style={{ marginTop: "15px", marginBottom: "10px", fontSize: "18px", color: "#eeeeee" }}>{project.title}</h3>
          <p style={{ marginBottom: "15px", fontSize: "14px", color: "#eeeeee" }}>{project.description}</p>
          <div style={{ display: "flex", gap: "10px" }}>
            <Link href={project.githuburl}>
              <button
                style={{
                  padding: "10px 20px",
                  backgroundColor: "#00ADB5",
                  color: "#eeeeee",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
              >
                Github Repo
              </button>
            </Link>
            <Link href={project.vercelurl}>
              <button
                style={{
                  padding: "10px 20px",
                  backgroundColor: "#00ADB5",
                  color: "#eeeeee",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
              >
                Vercel Link
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
