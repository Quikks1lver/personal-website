import React from "react";
import "./App.css";
import { urlProp } from "./CustomTypes";

const Footer = ({ url, hyperlinkName }: urlProp) => {
  return (
    <div>
      <a href={url} className="footer-link">
        <p>
          <em>{hyperlinkName}</em>
        </p>
      </a>
    </div>
  );
};

export default Footer;
