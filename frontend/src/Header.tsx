import React from "react";
import "./App.css";
import Filler from "./Filler";
import HeaderButton from "./HeaderButton";

const Header = () => {
  return (
    <div className="header">
      <HeaderButton buttonName="About Me" toPath="aboutme" />
      <Filler flexSize={3} />

      <HeaderButton buttonName="Projects" toPath="projects" />
      <Filler flexSize={3} />

      <HeaderButton toPath="" homeButton={true} />

      <Filler flexSize={3} />
      <HeaderButton buttonName="Resume" toPath="resume" />

      <Filler flexSize={3} />
      <HeaderButton buttonName="Contact Me" toPath="contact" />
    </div>
  );
};

export default Header;
