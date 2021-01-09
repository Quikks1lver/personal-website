import React from "react";
import "./App.css";
import { MOBILE_WIDTH_THRESHOLD } from "./Constants";
import Filler from "./Filler";
import { useMediaQuery } from "./useMediaQuery";

const IntroBlurb = () => {
  const paragraphStyles: React.CSSProperties = {
    margin: "5%",
    fontSize: 16,
  };

  let renderFillers = useMediaQuery(MOBILE_WIDTH_THRESHOLD);

  return (
    <div className="blurb">
      <h1>
        What's up, I'm <strong>Adam</strong>.
      </h1>
      <h2>-- Welcome to my website! --</h2>

      <div style={{ display: "flex", flexDirection: "row" }}>
        {!renderFillers && <Filler flexSize={1} />}
        <div className="paragraph-container">
          <p style={paragraphStyles}>
            {">"} I'm an aspiring Software Engineer, and currently a sophomore
            at the <strong>UCF</strong> Burnett Honors College, pursuing a B.S.
            in <strong>Computer Science</strong> and a Minor in{" "}
            <strong>Statistics</strong>.
            <br />
            <br />
            {">"} So far, I've accumulated solid experience through internships,
            research, my own projects, hackathons, and teaching assistant
            experience -- but I'm always game to dive into more ;).
            <br />
            <br />
            {">"} Don't hesitate to reach out if you'd like to get in contact
            with me, and <strong>have fun</strong> poking around my website! =)
          </p>
        </div>
        {!renderFillers && <Filler flexSize={1} />}
      </div>
    </div>
  );
};

export default IntroBlurb;
