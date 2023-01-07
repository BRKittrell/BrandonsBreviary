import React from "react";

const Projects = () => {
  return (
    <div>
     
      <div>
        <h1>
          Collaborative Projects
          </h1>
          <p>
          <a
          href="https://github.com/Blue-Digital"
          target="_blank"
          rel="noreferrer"
        >
          <em className="externalLink">Athena {""}</em>
        </a>
        :  An IT trouble ticket application.<br></br>
        <a
          href="https://github.com/MCSP-14-Frontend-Capstone/React-FEC-dreams-come-brew_app"
          target="_blank"
          rel="noreferrer"
        >
          <em className="externalLink">Dreams Come Brew {""}</em>
        </a>
          : A themed e-commerce site.
        </p>
        <h1>
        To view my repositories, please visit my{" "}
        <a
          href="https://github.com/BRKittrell"
          target="_blank"
          rel="noreferrer"
        >
          <em className="externalLink">Github</em>
        </a>
        .
      </h1>
      </div>
    </div>
  );
};

export default Projects;
