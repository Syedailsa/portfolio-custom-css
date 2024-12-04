import React from "react";
import { Cards,pData } from "@/components/layout/cards";
import './../styles/projects.css'


function Projects() {

  return (
    <section className="custom-bg">
        <div className="main">
          {/* top */}
          <div className="text">
            <h2 className="text-white">My recect </h2>
            <h2 className="text-blue ">work !</h2>
          </div>

          <div className="card">
          {/* projects cards main */}
            <Cards pData={pData} />
          </div>
        </div>
    </section>
  );
}

export default Projects;
