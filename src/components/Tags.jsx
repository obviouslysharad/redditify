import React from "react";
import { useTagContext } from "../context/TagContext";
import { motion } from "framer-motion";

const Tags = () => {
  const { tagClickedHandler, tagClicked } = useTagContext();
  let styled = (title) => {
    return tagClicked === title ? "active noSelect" : "btn noSelect";
  };
  return (
    <div className="tags">
      <motion.button
        whileTap={{ scale: 0.9 }}
        className={styled("Shower Thoughts")}
        onClick={(e) => {
          tagClickedHandler(e);
        }}
      >
        Shower Thoughts
      </motion.button>
      <motion.button
        whileTap={{ scale: 0.9 }}
        className={styled("Memes")}
        onClick={(e) => {
          tagClickedHandler(e);
        }}
      >
        Memes
      </motion.button>
      <motion.button
        whileTap={{ scale: 0.9 }}
        className={styled("Wallpapers")}
        onClick={(e) => {
          tagClickedHandler(e);
        }}
      >
        Wallpapers
      </motion.button>
    </div>
  );
};

export default Tags;
