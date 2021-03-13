import React from "react";
import { Link } from "react-router-dom";

/**
 * A "return to projects page" button present at the top of each individual project blurb
 * @returns
 */
const ProjectsMore = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "1%",
      }}
    >
      <Link to="/projects">
        <button className="projects-more-back-button">{`Return to Projects ↩ `}</button>
      </Link>
    </div>
  );
};

export default ProjectsMore;
