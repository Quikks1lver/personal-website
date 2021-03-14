import React from "react";
import { Link } from "react-router-dom";

/**
 * A "return to projects page" button present at the top of each individual project blurb
 * @returns
 */
const ProjectsMore = () => {
  return (
    <div className="projects-more-back-button-container">
      <Link to="/projects">
        <button className="projects-more-back-button">{` ↩ `}</button>
      </Link>
    </div>
  );
};

export default ProjectsMore;
