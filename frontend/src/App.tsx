import React from "react";
import "./App.css";
import { HashRouter as Router, Route } from "react-router-dom";
import AboutMe from "./AboutMe";
import ContactMe from "./ContactMe";
import Footer from "./Footer";
import HomePage from "./HomePage";
import News from "./News";
import Projects from "./Projects";
import ProjectsMore from "./ProjectsMore";
import ResponsiveHeader from "./ResponsiveHeader";

// Individual Projects
import JusticeBytes from "./JusticeBytes";
import PizzaPopper from "./PizzaPopper";
import VisaBop from "./VisaBop";
import Imdb from "./Imdb";
import Battleship from "./Battleship";

// React Notifications
import { Notifications } from "react-push-notification";

// Animation
import { AnimatePresence } from "framer-motion";

const App = () => {
  return (
    <AnimatePresence exitBeforeEnter>
      <Router basename="/">
        <Notifications />
        <ResponsiveHeader />

        <Route exact path="/" component={HomePage} />
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
      </Router>
    </AnimatePresence>
  );
};

export default App;
