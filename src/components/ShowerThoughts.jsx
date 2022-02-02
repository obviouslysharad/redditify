import React from "react";
import { useShowerThoughtsContext } from "../context/ShowerThoughtsContext";
import "./ShowerThoughts.css";
import { useTagContext } from "../context/TagContext";

const ShowerThoughts = () => {
  const { showerThoughts } = useShowerThoughtsContext();
  const { tagClicked } = useTagContext();
  return (
    <div className="wrapper">
      {tagClicked === "Shower Thoughts" &&
        showerThoughts.map((el) => (
          <div className="grid" key={Math.random().toString(36).substr(0, 5)}>
            {el}
          </div>
        ))}
    </div>
  );
};

export default ShowerThoughts;
