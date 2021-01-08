import React, { useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import { headerButtonProp } from "./CustomTypes";

const HeaderButton = ({
  buttonName,
  toPath,
  isHomeButton,
}: headerButtonProp) => {
  const [isHoveredUpon, setIsHoveredUpon] = useState(false);

  return (
    <div>
      <Link to={`/${toPath}`}>
        <button
          onMouseEnter={() => setIsHoveredUpon(true)}
          onMouseLeave={() => setIsHoveredUpon(false)}
          className={
            isHomeButton?.valueOf()
              ? "home-button"
              : isHoveredUpon
              ? "hovered-button"
              : "normal-button"
          }
        >
          {buttonName?.valueOf()}
        </button>
      </Link>
    </div>
  );
};

export default HeaderButton;
