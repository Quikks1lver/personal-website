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
  const linkColor: React.CSSProperties = {
    color: "transparent",
  };

  return (
    <div>
      <Link
        to={`/${toPath}`}
        className={isHomeButton ? "link-color" : undefined}
      >
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
          {isHomeButton && <strong>{buttonName.valueOf()}</strong>}
          {!isHomeButton && buttonName.valueOf()}
        </button>
      </Link>
    </div>
  );
};

export default HeaderButton;
