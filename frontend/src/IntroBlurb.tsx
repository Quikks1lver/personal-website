import React from "react";
import MiniHeading from "./MiniHeading";
import TerminalTextBox from "./TerminalTextBox";

const heading: string = "-- Welcome to my website! --";
const paragraphs: string[] = [
  "I'm an aspiring Software Engineer, and currently a sophomore at the UCF Burnett Honors College, pursuing a B.S. in Computer Science and a Minor in Statistics.",
  "So far, I've accumulated solid experience through internships, research, projects, hackathons, and teaching assistantship -- but I'm always game to dive into more ;).",
  "Don't hesitate to reach out if you'd like to get in contact with me, and have fun poking around my website!",
];

const IntroBlurb = () => {
  return (
    <div className="blurb">
      <h1>
        What's up, I'm <strong>Adam</strong>.
      </h1>
      <MiniHeading heading={heading} />
      <TerminalTextBox paragraphs={paragraphs} />
    </div>
  );
};

export default IntroBlurb;
