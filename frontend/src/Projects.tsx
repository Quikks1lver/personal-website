import React from "react";
import MiniHeading from "./MiniHeading";
import IndividualProjectTile from "./IndividualProjectTile";
import { motion } from "framer-motion";
import { pageVariant, pageTransition } from "./FramerVariants";

import battleship_icon from "./images/battleship_icon.png";
import justice_bytes_icon from "./images/justice_bytes_icon.png";
import movie_icon from "./images/movie_icon.png";
import pizza_icon from "./images/pizza_icon.png";
import visa_icon from "./images/visa_icon.png";

/**
 * Projects page
 * @returns
 */
const Projects = () => {
  return (
    <motion.div
      animate="in"
      exit="out"
      initial="out"
      variants={pageVariant}
      transition={pageTransition}
    >
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
    </motion.div>
  );
};

export default Projects;
