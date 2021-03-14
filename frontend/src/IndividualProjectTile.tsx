import React from "react";
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

  const determineStyle = (): React.CSSProperties => {
    if (isIpadOrSmaller) {
      return isiPhoneLengthWise
        ? { width: "45vw", height: "23vh" }
        : { width: "24vw", height: "25vh" };
    } else return { border: "none" };
  };

  return (
    <div style={{ marginLeft: "1%", marginRight: "1%" }}>
      <Link to={route}>
        <img
          style={determineStyle()}
          className="project-icon"
          src={picture}
          alt={altText}
        />
      </Link>
    </div>
  );
};

export default IndividualProjectTile;
