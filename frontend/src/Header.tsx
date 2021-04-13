import React from "react";
import "./App.css";
import Filler from "./Filler";
import HeaderButton from "./HeaderButton";

const Header = () => {
  return (
    <div className="header">
      <Filler flexSize={3} />

      <HeaderButton buttonName="About Me" toPath="aboutme" />
      <Filler flexSize={1} />

      <HeaderButton buttonName="Cool Projects" toPath="projects" />
      <Filler flexSize={1} />

      <HeaderButton toPath="" buttonName="{α}" isHomeButton={true} />

      <Filler flexSize={1} />
      <HeaderButton buttonName="In the News" toPath="news" />

      <Filler flexSize={1} />
      <HeaderButton buttonName="Contact Me" toPath="contactme" />

      <Filler flexSize={3} />
    </div>
  );
};

export default Header;
