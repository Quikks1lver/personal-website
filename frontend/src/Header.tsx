import React from "react";
import "./App.css";
import Filler from "./Filler";
import HeaderButton from "./HeaderButton";
import HomeButton from "./HomeButton";

const Header = () => {
  return (
    <div className="header">
      <HeaderButton />
      <Filler />
      <HomeButton />
      <Filler />
      <HeaderButton />
    </div>
  );
};

export default Header;
