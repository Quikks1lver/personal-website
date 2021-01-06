import React from "react";
import "./App.css";
import { urlProp } from "./CustomTypes";
import Footer from "./Footer";
import Header from "./Header";
import IntroBlurb from "./IntroBlurb";

const App = () => {
  // Footer props
  const GITHUB_URL: string = "https://github.com/Quikks1lver/personal-website";
  const footerProps: urlProp = {
    url: GITHUB_URL,
    hyperlinkName: "Website Source Code",
  };

  return (
    <div>
      <Header />
      <IntroBlurb />
      <Footer url={footerProps.url} hyperlinkName={footerProps.hyperlinkName} />
    </div>
  );
};

export default App;
