import React from "react";
import { Cards,pData } from "@/components/layout/cards";


function Projects() {

  return (
    <section className="custom-bg">
        <div className="sm:grid grid-cols-1 justify-start items-center">
        {/* top */}
          <div className="flex justify-start p-6 sm:pl-20 m-0 pb-0 gap-2 text-4xl md:text-6xl font-semibold">
          <h2 className="text-themewhite">My recect </h2>
          <br />
          <h2 className="text-themeblue ">work !</h2>
          </div>
        

          <div className="pb-5 md:pb-0 md:flex">
          {/* projects cards main */}
            <Cards pData={pData} />
          </div>


        </div>
    </section>
  );
}

export default Projects;
