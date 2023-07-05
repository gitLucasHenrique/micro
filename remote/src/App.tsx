import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import Home from "./components/Home";

const App = () => (
  <div className="container">
    <Home />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
