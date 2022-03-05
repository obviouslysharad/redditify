import React from "react";
import { useMemeContext } from "../context/MemeContext";

const Memes = () => {
  const memeState = useMemeContext();
  return (
    <div>
      {
        <div className="imageContainer">
          {memeState &&
            memeState.map((el) => {
              if (el.data.post_hint === "image")
                return (
                  <img key={el.data.id} alt={el.data.title} src={el.data.url} />
                );
              else return null;
            })}
        </div>
      }
    </div>
  );
};

export default Memes;
