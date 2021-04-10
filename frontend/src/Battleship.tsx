import React from "react";
import Media from "./Media";
import LinkBox from "./LinkBox";
import MiniHeading from "./MiniHeading";
import TerminalTextBox from "./TerminalTextBox";

// images & videos
import githubLogo from "./images/github_logo.png";
import battleship_vid from "./clips/battleship.gif";

const paragraphs: string[] = [
  "Battleship was my very first personal project.",
  "It's nothing too fancy--just a simple text-based game vs. a computer.",
  "Feel free to view the brief demo above, and check out the GitHub repo below!",
];

/**
 * Project page for Battleship
 * @returns
 */
const Battleship = () => {
  return (
    <div>
      <MiniHeading
        heading="Battleship"
        moreInfo={["Sink the enemy's fleet...", "...before they sink yours!"]}
      />

      <TerminalTextBox paragraphs={paragraphs.slice(0, 2)} />

      <Media media={battleship_vid} altText="Battleship video" />

      <TerminalTextBox paragraphs={paragraphs.slice(2)} />

      <div className="link-box-container">
        <LinkBox
          url="https://github.com/Quikks1lver/Battleship"
          siteName="Battleship GitHub"
          image={githubLogo}
        />
      </div>
    </div>
  );
};

export default Battleship;
