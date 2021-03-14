import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  IPAD_WIDTH_THRESHOLD,
  IPHONE_VERTICAL_WIDTH_THRESHOLD,
} from "./Constants";
import { projectProp } from "./CustomTypes";
import { useMediaQuery } from "./useMediaQuery";

/**
 * Individual project tiles present on projects page,
 * which link to a separate project page for each project
 * @param param0 projectProp, containing a picture string, a route within the app, and alt text
 * @returns
 */
const IndividualProjectTile = ({ picture, route, altText }: projectProp) => {
  const isIpadOrSmaller = useMediaQuery(IPAD_WIDTH_THRESHOLD);
  const isiPhoneLengthWise = useMediaQuery(IPHONE_VERTICAL_WIDTH_THRESHOLD);
  const [isHoveredUpon, setIsHoveredUpon] = useState(false);

  const overlayTextStyle: React.CSSProperties = {
    position: "relative",
    marginBottom: "0%",
    textAlign: "center",
    color: "#11FfEE",
    top: "90px",
    zIndex: 1,
  };
  const determineStyle = (): React.CSSProperties => {
    if (isIpadOrSmaller) {
      return isiPhoneLengthWise
        ? { width: "45vw", height: "23vh", border: "none" }
        : { width: "32vw", height: "23vh", border: "none" };
    } else return { border: "none" };
  };

  return (
    <div
      style={{ marginLeft: "1%", marginRight: "1%" }}
      onMouseEnter={() => setIsHoveredUpon(true)}
      onMouseLeave={() => setIsHoveredUpon(false)}
    >
      <Link to={route}>
        <h2 style={overlayTextStyle}> {isHoveredUpon && altText}</h2>
        <span style={isHoveredUpon ? { filter: "blur(8px)" } : undefined}>
          <img
            style={determineStyle()}
            className="project-icon"
            src={picture}
            alt={altText}
          />
        </span>
      </Link>
    </div>
  );
};

export default IndividualProjectTile;
