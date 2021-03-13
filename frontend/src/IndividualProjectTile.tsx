import React from "react";
import { Link } from "react-router-dom";
import {
  IPAD_WIDTH_THRESHOLD,
  IPHONE_VERTICAL_WIDTH_THRESHOLD,
} from "./Constants";
import { projectProp } from "./CustomTypes";
import { useMediaQuery } from "./useMediaQuery";

const IndivualProjectTile = ({ picture, route }: projectProp) => {
  const isIpadOrSmaller = useMediaQuery(IPAD_WIDTH_THRESHOLD);
  const isiPhoneLengthWise = useMediaQuery(IPHONE_VERTICAL_WIDTH_THRESHOLD);

  return (
    <div style={{ marginLeft: "1%", marginRight: "1%" }}>
      <Link to={route}>
        <img
          style={
            isIpadOrSmaller
              ? isiPhoneLengthWise
                ? { width: "45vw", height: "23vh" }
                : { width: "24vw", height: "25vh" }
              : { border: "none" }
          }
          className="project-icon"
          src={picture}
          alt="project icon"
        />
      </Link>
    </div>
  );
};

export default IndivualProjectTile;
