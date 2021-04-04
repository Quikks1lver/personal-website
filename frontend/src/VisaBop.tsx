import React from "react";
import Media from "./Media";
import LinkBox from "./LinkBox";
import MiniHeading from "./MiniHeading";
import TerminalTextBox from "./TerminalTextBox";

// images & videos
import devpostLogo from "./images/devpost_logo.png";
import githubLogo from "./images/github_logo.png";
import vb_vid from "./clips/vb.gif";

const paragraphs: string[] = [
  "Visa Bop was the project a couple of friends and I worked on for SwampHacks 2020, headed by the University of Florida.",
  "The idea was a website to connect immigrants to the U.S. with relevant jobs, based on visa type.",
  "I primarily worked on scraping Indeed.com for job postings using Python's Beautiful Soup module; I sent this the information back to the front end.",
  "Feel free to view the brief demo of my part of the project, and check out our Devpost submission and our GitHub repo below!",
];

/**
 * Project page for Visa Bop
 * @returns
 */
const VisaBop = () => {
  return (
    <div>
      <MiniHeading
        heading="Visa Bop"
        moreInfo={['"Matching Visas to Jobs"', "SwampHacks 2020"]}
      />

      <TerminalTextBox paragraphs={paragraphs.slice(0, 3)} />

      <Media media={vb_vid} altText="Visa Bop demo" />

      <TerminalTextBox paragraphs={paragraphs.slice(3)} />

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
    </div>
  );
};

export default VisaBop;
