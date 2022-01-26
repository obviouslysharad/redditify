import React from "react";
import { useShowerThoughtsContext } from "../context/ShowerThoughtsContext";

const Tags = () => {
  const { viewShowerThoughts, setViewShowerThoughts } =
    useShowerThoughtsContext();
  return (
    <div className="tags">
      <button
        className="btn"
        onClick={(e) => {
          e.target.className = "active";
          setViewShowerThoughts(!viewShowerThoughts);
        }}
      >
        Shower Thoughts
      </button>
      <button className="btn">Memes</button>
      <button className="btn">Facts</button>
      <button className="btn">Wallpapers</button>
    </div>
  );
};

export default Tags;
