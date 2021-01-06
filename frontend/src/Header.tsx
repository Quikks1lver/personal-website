import React from "react";
import "./App.css";
import Filler from "./Filler";
import HeaderButton from "./HeaderButton";
import HomeButton from "./HomeButton";

const Header = () => {
  return (
    <div className="header">
      <HeaderButton />
      <Filler flexSize={3} />

      <HeaderButton />
      <Filler flexSize={3} />

      <HomeButton />

      <Filler flexSize={3} />
      <HeaderButton />

      <Filler flexSize={3} />
      <HeaderButton />
    </div>
  );
};

export default Header;
