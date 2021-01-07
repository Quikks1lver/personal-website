import React from "react";
import "./App.css";
import { urlProp } from "./CustomTypes";
import Footer from "./Footer";
import Header from "./Header";
import IntroBlurb from "./IntroBlurb";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  // Footer props
  const GITHUB_URL: string = "https://github.com/Quikks1lver/personal-website";
  const footerProps: urlProp = {
    url: GITHUB_URL,
    hyperlinkName: "Website Source Code",
  };

  return (
    <Router basename="/">
      <div>
        <Header />
        <Route path="/" component={IntroBlurb} />
        <Route path="/blurbtest" component={IntroBlurb} />
        <Footer
          url={footerProps.url}
          hyperlinkName={footerProps.hyperlinkName}
        />
      </div>
    </Router>
  );
};

export default App;
