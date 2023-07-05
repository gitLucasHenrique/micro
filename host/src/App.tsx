import React from "react";
import ReactDOM from "react-dom";

import Home from "remote/Home";

import "./index.css";

const App = () => (
  <div className="container">
    <Home />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
