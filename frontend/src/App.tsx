import React, { useState } from "react";
import "./App.css";
import { urlProp } from "./CustomTypes";
import Footer from "./Footer";
import Header from "./Header";
import IntroBlurb from "./IntroBlurb";
import { HashRouter as Router, Route } from "react-router-dom";
import Resume from "./Resume";
import Projects from "./Projects";
import ContactMe from "./ContactMe";
import AboutMe from "./AboutMe";
import { useMediaQuery } from "./useMediaQuery";
import burger from "./images/burger.png";
import Filler from "./Filler";

// Footer props
const GITHUB_URL: string = "https://github.com/Quikks1lver/personal-website";
const footerProps: urlProp = {
  url: GITHUB_URL,
  hyperlinkName: "Website Source Code",
};

const App = () => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [isHamburgerHoveredUpon, setIsHamburgerHoveredUpon] = useState(false);
  let isMobile = useMediaQuery("(max-width: 425px)");

  return (
    <Router basename="/">
      {isMobile && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button
            className={
              isHamburgerHoveredUpon
                ? "hamburger-button-hover"
                : "hamburger-button"
            }
            onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}
            onMouseEnter={() => setIsHamburgerHoveredUpon(true)}
            onMouseLeave={() => setIsHamburgerHoveredUpon(false)}
          >
            <img src={burger} style={{ alignContent: "center" }}></img>
          </button>
        </div>
      )}
      {(isHamburgerOpen && <Header />) || (!isMobile && <Header />)}

      <Route exact path="/" component={IntroBlurb} />
      <Route exact path="/aboutme" component={AboutMe} />
      <Route exact path="/contact" component={ContactMe} />
      <Route path="/projects" component={Projects} />
      <Route path="/resume" component={Resume} />

      <Footer url={footerProps.url} hyperlinkName={footerProps.hyperlinkName} />
    </Router>
  );
};

export default App;
