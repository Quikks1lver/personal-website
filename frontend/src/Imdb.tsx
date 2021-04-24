import React from "react";
import Media from "./Media";
import LinkBox from "./LinkBox";
import MiniHeading from "./MiniHeading";
import TerminalTextBox from "./TerminalTextBox";
import { motion } from "framer-motion";
import { pageVariant, pageTransition } from "./FramerVariants";

// images & videos
import githubLogo from "./images/github_logo.png";
import imdb_vid from "./clips/imdb.gif";

const paragraphs: string[] = [
  "IMDB Parsing was my first venture into web scraping. I used Python's Beautiful Soup module to scrape IMDB's movie ratings.",
  "Simply input what time period of movies you enjoy and a general rating threshold, and this program will recommend movies!",
  "Feel free to view the brief demo!",
];

/**
 * Project page for IMDB Parsing
 * @returns
 */
const Imdb = () => {
  return (
    <motion.div
      animate="in"
      exit="out"
      initial="out"
      variants={pageVariant}
      transition={pageTransition}
    >
      <MiniHeading
        heading="IMDB Parsing"
        moreInfo={["Get Movie Recommendations!", "Dec. 2019"]}
      />

      <TerminalTextBox paragraphs={paragraphs} />

      <Media media={imdb_vid} altText="IMDB Parsing video" />

      <div className="link-box-container">
        <LinkBox
          url="https://github.com/Quikks1lver/IMDB-Parsing"
          siteName="IMDB Parsing GitHub"
          image={githubLogo}
        />
      </div>
    </motion.div>
  );
};

export default Imdb;
