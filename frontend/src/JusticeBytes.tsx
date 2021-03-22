import React from "react";
import LinkBox from "./LinkBox";
import MiniHeading from "./MiniHeading";

// images
import devpostLogo from "./images/devpost_logo.png";
import githubLogo from "./images/github_logo.png";

/**
 * Project page for Justice Bytes
 * @returns
 */
const JusticeBytes = () => {
  return (
    <div>
      <MiniHeading
        heading="Justice Bytes"
        moreInfo='"A Search Engine for Social Justice"'
      />
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
