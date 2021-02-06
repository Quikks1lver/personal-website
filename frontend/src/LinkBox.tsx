import React, { useState } from "react";
import { linkBoxProp } from "./CustomTypes";

const LinkBox = ({ url, image, siteName }: linkBoxProp) => {
  const hoveredStyle: React.CSSProperties = {
    backgroundColor: "#6e17cb",
  };

  const [isHoveredUpon, setIsHoveredUpon] = useState(false);

  return (
    <a
      onMouseEnter={() => setIsHoveredUpon(true)}
      onMouseLeave={() => setIsHoveredUpon(false)}
      className="link-box"
      style={isHoveredUpon ? hoveredStyle : undefined}
      href={url}
    >
      <img
        src={image}
        alt={`Link to Adam's ${siteName}`}
        className="link-box-image"
      ></img>
    </a>
  );
};

export default LinkBox;
