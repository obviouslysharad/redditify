import React from "react";
import { useMemeContext } from "../context/MemeContext";
import { useTagContext } from "../context/TagContext";

const Memes = () => {
  const memeState = useMemeContext();
  const { tagClicked } = useTagContext();
  return (
    <div>
      {memeState && tagClicked === "Memes" && (
        <div id="imgParent">
          {memeState.map((el) => {
            return <img alt={el.data.title} src={el.data.url} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Memes;
