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

      <HeaderButton buttonName="Projects" toPath="projects" />
      <Filler flexSize={1} />

      <HeaderButton toPath="" isHomeButton={true} />

      <Filler flexSize={1} />
      <HeaderButton buttonName="News Links" toPath="news" />

      <Filler flexSize={1} />
      <HeaderButton buttonName="Contact Me" toPath="contact" />

      <Filler flexSize={3} />
    </div>
  );
};

export default Header;
