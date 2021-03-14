import React from "react";
import { Link } from "react-router-dom";
import { MOBILE_WIDTH_THRESHOLD } from "./Constants";
import { useMediaQuery } from "./useMediaQuery";

/**
 * A "return to projects page" button present at the top of each individual project blurb
 * @returns
 */
const ProjectsMore = () => {
  const isMobile = useMediaQuery(MOBILE_WIDTH_THRESHOLD);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "2%",
        marginBottom: "3%",
      }}
    >
      <Link to="/projects">
        <button
          style={isMobile ? { fontSize: "40px" } : undefined}
          className="projects-more-back-button"
        >{` ↩ `}</button>
      </Link>
    </div>
  );
};

export default ProjectsMore;
