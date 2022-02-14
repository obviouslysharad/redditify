import React from "react";
import { useTagContext } from "../context/TagContext";

const Tags = () => {
  const { tagClickedHandler } = useTagContext();
  return (
    <div className="tags">
      <button
        className="btn"
        onClick={(e) => {
          tagClickedHandler(e);
        }}
      >
        Shower Thoughts
      </button>
      <button
        className="btn"
        onClick={(e) => {
          tagClickedHandler(e);
        }}
      >
        Memes
      </button>
      <button
        className="btn"
        onClick={(e) => {
          tagClickedHandler(e);
        }}
      >
        Beautiful Data
      </button>
      <button
        className="btn"
        onClick={(e) => {
          tagClickedHandler(e);
        }}
      >
        Black Magic
      </button>
      <button
        className="btn"
        onClick={(e) => {
          tagClickedHandler(e);
        }}
      >
        Wallpapers
      </button>
    </div>
  );
};

export default Tags;
