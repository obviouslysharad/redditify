import React from "react";
import { useShowerThoughtsContext } from "../context/ShowerThoughtsContext";
import { useTagContext } from "../context/TagContext";

const Tags = () => {
  const { setViewShowerThoughts } = useShowerThoughtsContext();
  const { tagClicked, viewShowerThoughts } = useTagContext();
  return (
    <div className="tags">
      <button
        className="btn"
        onClick={(e) => {
          if (viewShowerThoughts) {
            e.target.className = "active";
          } else e.target.className = "btn";
          tagClicked(e);
        }}
      >
        Shower Thoughts
      </button>
      <button className="btn">Memes</button>
      <button className="btn">Beautiful Data</button>
      <button className="btn">Wallpapers</button>
    </div>
  );
};

export default Tags;
