import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import burger from "./images/burger.png";
import Header from "./Header";
import { useMediaQuery } from "./useMediaQuery";
import { MOBILE_WIDTH_THRESHOLD } from "./Constants";

/**
 * Encompasses "normal" header & header buttons, along
 * with the hamburger drop down icon for mobile devices
 */
const ResponsiveHeader = () => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  let isMobile = useMediaQuery(MOBILE_WIDTH_THRESHOLD);
  const location = useLocation();

  // if the page changes, close the hamburger icon, because that means the user has clicked
  // on a new route. Don't keep the burger menu open.
  useEffect(() => {
    setIsHamburgerOpen(false);
  }, [location]);

  return (
    <div>
      {isMobile && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button
            className={
              isHamburgerOpen ? "hamburger-button-open" : "hamburger-button"
            }
            onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}
          >
            <img
              src={burger}
              alt="burger drop down header button"
              style={{ alignContent: "center", width: "100%", height: "100%" }}
            ></img>
          </button>
        </div>
      )}
      {(isHamburgerOpen && <Header />) || (!isMobile && <Header />)}
    </div>
  );
};

export default ResponsiveHeader;
