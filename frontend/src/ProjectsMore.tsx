import React, { useState } from "react";
import { Link } from "react-router-dom";

/**
 * A "return to projects page" button present at the top of each individual project blurb
 * @returns
 */
const ProjectsMore = () => {
  const [isHoveredUpon, setIsHoveredUpon] = useState(false);
  const hoveredStyle: React.CSSProperties = {
    color: "blue",
  };

  return (
    <div className="projects-more-back-button-container">
      <Link to="/projects">
        <button
          style={isHoveredUpon ? hoveredStyle : undefined}
          onMouseEnter={() => setIsHoveredUpon(true)}
          onMouseLeave={() => setIsHoveredUpon(false)}
          className="projects-more-back-button"
        >{` ↩ `}</button>
      </Link>
    </div>
  );
};

export default ProjectsMore;
