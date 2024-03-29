import React from "react";
import Media from "./Media";
import LinkBox from "./LinkBox";
import MiniHeading from "./MiniHeading";
import TerminalTextBox from "./TerminalTextBox";
import { motion } from "framer-motion";
import { pageVariant, pageTransition } from "./FramerVariants";

// images & videos
import githubLogo from "./images/github_logo.png";
import battleship_vid from "./clips/battleship.gif";

const paragraphs: string[] = [
  "Battleship was my very first personal project.",
  "It's nothing too fancy--just a simple text-based game vs. a computer.",
  "Feel free to view the brief demo!",
];

/**
 * Project page for Battleship
 * @returns
 */
const Battleship = () => {
  return (
    <motion.div
      animate="in"
      exit="out"
      initial="out"
      variants={pageVariant}
      transition={pageTransition}
    >
      <MiniHeading
        heading="Battleship"
        moreInfo={[
          "Sink the enemy's fleet...",
          "...before they sink yours!",
          "Nov. 2019",
        ]}
      />

      <TerminalTextBox paragraphs={paragraphs} />

      <Media media={battleship_vid} altText="Battleship video" />

      <div className="link-box-container">
        <LinkBox
          url="https://github.com/Quikks1lver/Battleship"
          siteName="Battleship GitHub"
          image={githubLogo}
        />
      </div>
    </motion.div>
  );
};

export default Battleship;
