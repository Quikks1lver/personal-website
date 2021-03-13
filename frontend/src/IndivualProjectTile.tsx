import React from "react";
import { projectProp } from "./CustomTypes";

const IndivualProjectTile = ({ picture }: projectProp) => {
  return (
    <div
      style={{ marginLeft: "1%", marginRight: "1%" }}
      onClick={() => console.log("hi")}
    >
      <img className="project-icon" src={picture} alt="project icon" />
    </div>
  );
};

export default IndivualProjectTile;
