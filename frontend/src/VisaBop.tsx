import React from "react";
import Media from "./Media";
import LinkBox from "./LinkBox";
import MiniHeading from "./MiniHeading";
import TerminalTextBox from "./TerminalTextBox";
import { motion } from "framer-motion";
import { pageVariant, pageTransition } from "./FramerVariants";

// images & videos
import devpostLogo from "./images/devpost_logo.png";
import githubLogo from "./images/github_logo.png";
import vb_vid from "./clips/vb.gif";

const paragraphs: string[] = [
  "Visa Bop was the project a couple of friends and I worked on for SwampHacks 2020, headed by the University of Florida.",
  "The idea was a website to connect immigrants to the U.S. with relevant jobs, based on visa type.",
  "I primarily worked on scraping Indeed.com for job postings using Python's Beautiful Soup module; I sent this information back to the front end.",
  "Feel free to view the brief demo!",
];

/**
 * Project page for Visa Bop
 * @returns
 */
const VisaBop = () => {
  return (
    <motion.div
      animate="in"
      exit="out"
      initial="out"
      variants={pageVariant}
      transition={pageTransition}
    >
      <MiniHeading
        heading="Visa Bop"
        moreInfo={[
          '"Matching Visas to Jobs"',
          "SwampHacks 2020",
          "Jan. - Feb. 2020",
        ]}
      />

      <TerminalTextBox paragraphs={paragraphs} />

      <Media media={vb_vid} altText="Visa Bop demo" />

      <div className="link-box-container">
        <LinkBox
          url="https://devpost.com/software/visabop"
          siteName="Visa Bop Devpost"
          image={devpostLogo}
        />
        <LinkBox
          url="https://github.com/Danielle504/visaBop"
          siteName="Visa Bop GitHub"
          image={githubLogo}
        />
      </div>
    </motion.div>
  );
};

export default VisaBop;
