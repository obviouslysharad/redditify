import React from "react";
import { useMemeContext } from "../context/MemeContext";

const Memes = () => {
  const memeState = useMemeContext();
  console.log(memeState);
  return (
    <div>
      {
        <div id="temp">
          {memeState &&
            memeState.map((el) => {
              if (
                el.data.post_hint === "image" &&
                el.data.url.slice(el.data.url.length - 4) === ".img"
              )
                return <img alt={el.data.title} src={el.data.url} />;
              return <div>hi</div>;
            })}
        </div>
      }
    </div>
  );
};

export default Memes;
