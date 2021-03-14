import React from "react";
import "./App.css";
import { HashRouter as Router, Route } from "react-router-dom";
import AboutMe from "./AboutMe";
import ContactMe from "./ContactMe";
import Footer from "./Footer";
import IntroBlurb from "./IntroBlurb";
import News from "./News";
import Projects from "./Projects";
import ProjectsMore from "./ProjectsMore";
import ResponsiveHeader from "./ResponsiveHeader";
import { urlProp } from "./CustomTypes";

// Individual Projects
import JusticeBytes from "./JusticeBytes";
import PizzaPopper from "./PizzaPopper";
import VisaBop from "./VisaBop";
import Imdb from "./Imdb";
import Battleship from "./Battleship";

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

      <Route path="/more/" component={ProjectsMore} />
      <Route path="/more/justice-bytes" component={JusticeBytes} />
      <Route path="/more/pizza-popper" component={PizzaPopper} />
      <Route path="/more/visa-bop" component={VisaBop} />
      <Route path="/more/imdb" component={Imdb} />
      <Route path="/more/battleship" component={Battleship} />

      <Footer url={footerProps.url} hyperlinkName={footerProps.hyperlinkName} />
    </Router>
  );
};

export default App;
