import React from "react";
import "./App.css";

const IntroBlurb = () => {
  return (
    <div>
      <h1 className="blurb">
        <span>What's up, I'm </span>
        <span style={{ color: "gold" }}>Adam</span>
      </h1>
      <p className="blurb" style={{ fontSize: 16 }}>
        blurb placeholder
      </p>
    </div>
  );
};

export default IntroBlurb;
