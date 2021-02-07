import React from "react";
import LinkBox from "./LinkBox";
import MiniHeading from "./MiniHeading";
import TerminalTextBox from "./TerminalTextBox";

// Images
import githubLogo from "./images/github_logo.png";
import linkedInLogo from "./images/linkedin_logo.png";
import emailLogo from "./images/email_logo.png";

const heading: string = "Welcome to my website!";
const paragraphs: string[] = [
  "I'm an aspiring Software Engineer, and currently a sophomore at the UCF Burnett Honors College, pursuing a B.S. in Computer Science and a Minor in Statistics.",
  "So far, I've accumulated solid experience through internships, research, projects, hackathons, and teaching assistantship -- but I'm always game to dive into more ;).",
  "Don't hesitate to reach out if you'd like to get in contact with me, and have fun poking around my website!",
];

/**
 * Home Page with links to other relevant websites (GitHub, LinkedIn, etc.)
 */
const IntroBlurb = () => {
  return (
    <div className="blurb">
      <h1>
        What's up, I'm <strong>Adam</strong>.
      </h1>
      <MiniHeading heading={heading} />
      <TerminalTextBox paragraphs={paragraphs} />
      <div className="link-box-container">
        <LinkBox
          url="mailto:fernadam8@gmail.com"
          siteName="Email"
          image={emailLogo}
        />
        <LinkBox
          url="https://github.com/Quikks1lver"
          siteName="GitHub"
          image={githubLogo}
        />
        <LinkBox
          url="https://www.linkedin.com/in/adam-n-fernandes/"
          siteName="LinkedIn"
          image={linkedInLogo}
        />
      </div>
    </div>
  );
};

export default IntroBlurb;
