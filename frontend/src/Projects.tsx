import React from "react";
import MiniHeading from "./MiniHeading";

import IndividualProjectTile from "./IndividualProjectTile";

import battleship_icon from "./images/battleship_icon.png";
import justice_bytes_icon from "./images/justice_bytes_icon.png";
import movie_icon from "./images/movie_icon.png";
import pizza_icon from "./images/pizza_icon.png";
import visa_icon from "./images/visa_icon.png";

const Projects = () => {
  return (
    <div>
      <MiniHeading heading={"Cool Projects"} />

      <div
        className="project-tiles-container"
        style={{ justifyContent: "center" }}
      >
        <IndividualProjectTile
          picture={justice_bytes_icon}
          route="more/justice-bytes"
          altText="Justice Bytes"
        />
        <IndividualProjectTile
          picture={pizza_icon}
          route="more/pizza-popper"
          altText="Pizza Popper"
        />
        <IndividualProjectTile
          picture={visa_icon}
          route="more/visa-bop"
          altText="Visa Bop"
        />
        <IndividualProjectTile
          picture={movie_icon}
          route="more/imdb"
          altText="IMDB Parsing"
        />
        <IndividualProjectTile
          picture={battleship_icon}
          route="more/battleship"
          altText="Battleship"
        />
      </div>
    </div>
  );
};

export default Projects;
