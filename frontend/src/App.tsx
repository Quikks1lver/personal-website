import React from "react";
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

const App = () => {
  // Footer props
  const GITHUB_URL: string = "https://github.com/Quikks1lver/personal-website";
  const footerProps: urlProp = {
    url: GITHUB_URL,
    hyperlinkName: "Website Source Code",
  };

  return (
    <Router basename="/">
      <Header />

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
