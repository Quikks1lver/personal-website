import React, { useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import { headerButtonProp } from "./CustomTypes";

/**
 * Header button component
 * @param param0 buttonName (string), toPath (string), and isHomeButton (boolean)
 * @returns
 */
const HeaderButton = ({
  buttonName,
  toPath,
  isHomeButton,
}: headerButtonProp) => {
  const [isHoveredUpon, setIsHoveredUpon] = useState(false);

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
