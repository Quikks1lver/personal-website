import React from "react";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import IntroBlurb from "./IntroBlurb";

const App = () => {
  const GITHUB_URL: string = "https://github.com/Quikks1lver/personal-website";

  return (
    <div className="bgrd">
      <Header />
      <IntroBlurb />
      <Footer url={GITHUB_URL} />
    </div>
  );
};

export default App;
