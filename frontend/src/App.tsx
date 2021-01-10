import React from "react";
import "./App.css";
import { HashRouter as Router, Route } from "react-router-dom";
import AboutMe from "./AboutMe";
import ContactMe from "./ContactMe";
import Footer from "./Footer";
import IntroBlurb from "./IntroBlurb";
import Projects from "./Projects";
import ResponsiveHeader from "./ResponsiveHeader";
import InTheNews from "./InTheNews";
import { urlProp } from "./CustomTypes";

const App = () => {
  const GITHUB_URL: string = "https://github.com/Quikks1lver/personal-website";
  const footerProps: urlProp = {
    url: GITHUB_URL,
    hyperlinkName: "Developed with <3 by Adam",
  };

  return (
    <Router basename="/">
      <ResponsiveHeader />

      <Route exact path="/" component={IntroBlurb} />
      <Route exact path="/aboutme" component={AboutMe} />
      <Route exact path="/contact" component={ContactMe} />
      <Route path="/projects" component={Projects} />
      <Route path="/news" component={InTheNews} />

      <Footer url={footerProps.url} hyperlinkName={footerProps.hyperlinkName} />
    </Router>
  );
};

export default App;
