import React from "react";
import githubLogo from "./images/github_logo.png";

const LinkBox = () => {
  const imageStyles: React.CSSProperties = {
    width: "30px",
    height: "30px",
    marginLeft: "10%",
    marginRight: "3%",
    alignSelf: "center",
  };

  return (
    <a className="link-box" href="https://github.com/Quikks1lver">
      <img src={githubLogo} alt="news article" style={imageStyles}></img>
      <h3 style={{ textAlign: "end" }}>GitHub</h3>
    </a>
  );
};

export default LinkBox;
