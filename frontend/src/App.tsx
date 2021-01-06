import React from "react";
import "./App.css";
import Header from "./Header";

const App = () => {
  const welcome: string = "Hi";

  return (
    <div>
      <Header />
      <h1>{welcome}</h1>
    </div>
  );
};

export default App;
