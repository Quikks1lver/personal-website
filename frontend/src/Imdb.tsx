import React from "react";
import Media from "./Media";
import LinkBox from "./LinkBox";
import MiniHeading from "./MiniHeading";
import TerminalTextBox from "./TerminalTextBox";

// images & videos
import githubLogo from "./images/github_logo.png";
import imdb_vid from "./clips/imdb.gif";

const paragraphs: string[] = [
  "IMDB Parsing was my first venture into web scraping. I used Python's Beautiful Soup module to scrape IMDB's movie ratings.",
  "Simply input what time period of movies you enjoy and a general rating threshold, and this program will recommend movies!",
  "Feel free to view the brief demo above, and check out the GitHub repo below!",
];

/**
 * Project page for IMDB Parsing
 * @returns
 */
const Imdb = () => {
  return (
    <div>
      <MiniHeading
        heading="IMDB Parsing"
        moreInfo={["Get Movie Recommendations!", "Dec. 2019"]}
      />

      <TerminalTextBox paragraphs={paragraphs.slice(0, 2)} />

      <Media media={imdb_vid} altText="IMDB Parsing video" />

      <TerminalTextBox paragraphs={paragraphs.slice(2)} />

      <div className="link-box-container">
        <LinkBox
          url="https://github.com/Quikks1lver/IMDB-Parsing"
          siteName="IMDB Parsing GitHub"
          image={githubLogo}
        />
      </div>
    </div>
  );
};

export default Imdb;
