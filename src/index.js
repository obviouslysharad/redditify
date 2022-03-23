import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import TagContext from "./context/TagContext";
import FetchContext from "./context/FetchContext";

ReactDOM.render(
  <React.StrictMode>
    <TagContext>
      <FetchContext>
        <App />
      </FetchContext>
    </TagContext>
  </React.StrictMode>,
  document.getElementById("root")
);
