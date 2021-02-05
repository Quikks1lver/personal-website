import React from "react";
import "./App.css";
import { HashRouter as Router, Route } from "react-router-dom";
import AboutMe from "./AboutMe";
import ContactMe from "./ContactMe";
import Footer from "./Footer";
import IntroBlurb from "./IntroBlurb";
import Projects from "./Projects";
import ResponsiveHeader from "./ResponsiveHeader";
import News from "./News";
import { urlProp } from "./CustomTypes";

// React Notifications
import { Notifications } from "react-push-notification";

const App = () => {
  const GITHUB_URL: string = "https://github.com/Quikks1lver/personal-website";
  const footerProps: urlProp = {
    url: GITHUB_URL,
    hyperlinkName: "Developed with 💛 by Adam",
  };

  return (
    <Router basename="/">
      <Notifications />
      <ResponsiveHeader />

      <Route exact path="/" component={IntroBlurb} />
      <Route exact path="/aboutme" component={AboutMe} />
      <Route exact path="/contactme" component={ContactMe} />
      <Route path="/projects" component={Projects} />
      <Route path="/news" component={News} />

      <Footer url={footerProps.url} hyperlinkName={footerProps.hyperlinkName} />
    </Router>
  );
};

export default App;
