import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import ShowerThoughtsContext from "./context/ShowerThoughtsContext";
import BeautifulDataContext from "./context/BeautifulDataContext";
import TagContext from "./context/TagContext";

ReactDOM.render(
  <React.StrictMode>
    <TagContext>
      <BeautifulDataContext>
        <ShowerThoughtsContext>
          <App />
        </ShowerThoughtsContext>
      </BeautifulDataContext>
    </TagContext>
  </React.StrictMode>,
  document.getElementById("root")
);
