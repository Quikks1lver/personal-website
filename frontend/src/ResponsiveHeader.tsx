import React, { useState } from "react";
import burger from "./images/burger.png";
import Header from "./Header";
import { useMediaQuery } from "./useMediaQuery";

/**
 * Encompasses "normal" header & header buttons, along
 * with the hamburger drop down icon for mobile devices
 */
const ResponsiveHeader = () => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [isHamburgerHoveredUpon, setIsHamburgerHoveredUpon] = useState(false);
  let isMobile = useMediaQuery("(max-width: 425px)");

  return (
    <div>
      {isMobile && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button
            className={
              isHamburgerHoveredUpon
                ? "hamburger-button-hover"
                : "hamburger-button"
            }
            onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}
            onMouseEnter={() => setIsHamburgerHoveredUpon(true)}
            onMouseLeave={() => setIsHamburgerHoveredUpon(false)}
          >
            <img
              src={burger}
              alt="burger drop down header button"
              style={{ alignContent: "center" }}
            ></img>
          </button>
        </div>
      )}
      {(isHamburgerOpen && <Header />) || (!isMobile && <Header />)}
    </div>
  );
};

export default ResponsiveHeader;
