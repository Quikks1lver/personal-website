import React from "react";
import LinkBox from "./LinkBox";
import MiniHeading from "./MiniHeading";

// images
import devpostLogo from "./images/devpost_logo.png";
import githubLogo from "./images/github_logo.png";

import jb_vid from "./clips/jb.gif";
import Gif from "./Gif";

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

      <Gif gif={jb_vid} altText="Justice Bytes video" />

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
