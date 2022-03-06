import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import ShowerThoughtsContext from "./context/ShowerThoughtsContext";
import BeautifulDataContext from "./context/BeautifulDataContext";
import TagContext from "./context/TagContext";
import MemeContext from "./context/MemeContext";
import WallpaperContext from "./context/WallpapersContext";

ReactDOM.render(
  <React.StrictMode>
    <TagContext>
      <WallpaperContext>
        <MemeContext>
          <BeautifulDataContext>
            <ShowerThoughtsContext>
              <App />
            </ShowerThoughtsContext>
          </BeautifulDataContext>
        </MemeContext>
      </WallpaperContext>
    </TagContext>
  </React.StrictMode>,
  document.getElementById("root")
);
