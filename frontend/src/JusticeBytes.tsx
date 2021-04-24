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
import jb_vid from "./clips/jb.gif";

const paragraphs: string[] = [
  "Justice Bytes was the project a group of friends and I worked on for ShellHacks 2020, the largest hackathon in Florida, headed by Florida International University.",
  "The idea was essentially a search engine for social justice-related news: a central place where anyone could go to learn more.",
  "While the project utilized a full stack, I primarily worked on the backend as a web-scraper using Beautiful Soup, finding news articles which my teammates would supplement with their findings to display to the user. I also worked a bit on the React frontend.",
  "Feel free to view the brief demo!",
];

/**
 * Project page for Justice Bytes
 * @returns
 */
const JusticeBytes = () => {
  return (
    <motion.div
      animate="in"
      exit="out"
      initial="out"
      variants={pageVariant}
      transition={pageTransition}
    >
      <MiniHeading
        heading="Justice Bytes"
        moreInfo={[
          '"A Search Engine for Social Justice"',
          "ShellHacks 2020",
          "Sep. 2020",
        ]}
      />

      <TerminalTextBox paragraphs={paragraphs} />

      <Media media={jb_vid} altText="Justice Bytes video" />

      <div className="link-box-container">
        <LinkBox
          url="https://devpost.com/software/justicebytes"
          siteName="Devpost"
          image={devpostLogo}
        />
        <LinkBox
          url="https://github.com/Hevia/JusticeBytes"
          siteName="JusticeBytes GitHub"
          image={githubLogo}
        />
      </div>
    </motion.div>
  );
};

export default JusticeBytes;
