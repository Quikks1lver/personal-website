import React from "react";
import MiniHeading from "./MiniHeading";

import IndivualProjectTile from "./IndividualProjectTile";

import battleship_icon from "./images/battleship_icon.png";
import justice_bytes_icon from "./images/justice_bytes_icon.png";
import movie_icon from "./images/movie_icon.png";
import pizza_icon from "./images/pizza_icon.png";
import visa_icon from "./images/visa_icon.png";

const Projects = () => {
  return (
    <div>
      <MiniHeading heading={"Projects"} />

      <div
        className="project-tiles-container"
        style={{ justifyContent: "center" }}
      >
        <IndivualProjectTile picture={justice_bytes_icon} />
        <IndivualProjectTile picture={pizza_icon} />
        <IndivualProjectTile picture={visa_icon} />
        <IndivualProjectTile picture={movie_icon} />
        <IndivualProjectTile picture={battleship_icon} />
      </div>
    </div>
  );
};

export default Projects;
