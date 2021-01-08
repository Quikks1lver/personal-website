import React from "react";
import "./App.css";
import { HashRouter as Router, Route } from "react-router-dom";
import AboutMe from "./AboutMe";
import ContactMe from "./ContactMe";
import Footer from "./Footer";
import footerProps from "./FooterProps";
import IntroBlurb from "./IntroBlurb";
import Projects from "./Projects";
import ResponsiveHeader from "./ResponsiveHeader";
import Resume from "./Resume";

const App = () => {
  return (
    <Router basename="/">
      <ResponsiveHeader />

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
