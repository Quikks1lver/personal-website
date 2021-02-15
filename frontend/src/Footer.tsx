import React, { useState } from "react";
import "./App.css";
import { urlProp } from "./CustomTypes";

const Footer = ({ url, hyperlinkName }: urlProp) => {
  const [isHoveredUpon, setIsHoveredUpon] = useState(false);
  const hoveredStyle: React.CSSProperties = {
    color: "rgba(255, 245, 245, 0.927)",
  };

  return (
    <div>
      <a
        onMouseEnter={() => setIsHoveredUpon(true)}
        onMouseLeave={() => setIsHoveredUpon(false)}
        href={url}
        className="footer-link"
        style={isHoveredUpon ? hoveredStyle : undefined}
        target="_blank"
        rel="noopener noreferrer"
      >
        <p>
          <em>{hyperlinkName}</em>
        </p>
      </a>
    </div>
  );
};

export default Footer;
