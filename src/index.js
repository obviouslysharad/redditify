import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import ShowerThoughtsContext from "./context/ShowerThoughtsContext";

ReactDOM.render(
  <React.StrictMode>
    <ShowerThoughtsContext>
      <App />
    </ShowerThoughtsContext>
  </React.StrictMode>,
  document.getElementById("root")
);
