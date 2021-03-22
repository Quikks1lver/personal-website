import React from "react";
import LinkBox from "./LinkBox";
import MiniHeading from "./MiniHeading";

// images
import devpostLogo from "./images/devpost_logo.png";
import githubLogo from "./images/github_logo.png";

import jb_vid from "./clips/jb.gif";
import Gif from "./Gif";
import TerminalTextBox from "./TerminalTextBox";

const paragraphs: string[] = [
  "Justice Bytes was the project a group of friends and I worked on for ShellHacks 2020, the largest hackathon in Florida, headed by Florida International University.",
  "The idea was essentially a search engine for social justice-related news: a central place where anyone could go to learn more.",
  "While the project utilized a full stack, I primarily worked on the backend as a web-scraper, finding news articles which my teammates would supplement with their findings to display to the user. I also worked on some frontend styling",
  "Feel free to view the brief demo above, and check out the Devpost submission and our GitHub repo!",
];

/**
 * Project page for Justice Bytes
 * @returns
 */
const JusticeBytes = () => {
  return (
    <div>
      <MiniHeading
        heading="Justice Bytes"
        moreInfo={['"A Search Engine for Social Justice"', "ShellHacks 2020"]}
      />

      <TerminalTextBox paragraphs={paragraphs.slice(0, 2)} />

      <Gif gif={jb_vid} altText="Justice Bytes video" />

      <TerminalTextBox paragraphs={paragraphs.slice(3)} />

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
    </div>
  );
};

export default JusticeBytes;
