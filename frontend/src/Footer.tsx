import React, { useState } from "react";
import "./App.css";

const Footer = () => {
  const [isHoveredUpon, setIsHoveredUpon] = useState(false);
  const hoveredStyle: React.CSSProperties = {
    color: "#de5f25",
  };

  return (
    <div>
      <a
        onMouseEnter={() => setIsHoveredUpon(true)}
        onMouseLeave={() => setIsHoveredUpon(false)}
        href={"https://github.com/Quikks1lver/personal-website"}
        className="footer-link"
        style={isHoveredUpon ? hoveredStyle : undefined}
        target="_blank"
        rel="noopener noreferrer"
      >
        <p>
          <em>Developed with 💙 by Adam</em>
        </p>
      </a>
    </div>
  );
};

export default Footer;
