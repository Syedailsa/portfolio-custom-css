import About from "./about/page";
import Contact from "./contact/page";
import Body from "@/app/body/page";

export default function Home() {
  return (
    <div>
      <div className="pt-4 mb-20">
        <Body />
      </div>

      <div className="hidden md:block	 pt-4 mb-20 border-t-2 border-themewhite border-opacity-10">
        <About />
      </div>

      <div className="hidden md:block	 pt-4 mb-20 border-t-2 border-themewhite border-opacity-10">
        <Contact />
      </div>
    </div>
  );
}
