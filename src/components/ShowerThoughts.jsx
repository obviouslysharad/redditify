import React from "react";
import { useShowerThoughtsContext } from "../context/ShowerThoughtsContext";
import "./ShowerThoughts.css";
import { useTagContext } from "../context/TagContext";

const ShowerThoughts = () => {
  const { showerThoughts } = useShowerThoughtsContext();
  const { viewShowerThoughts } = useTagContext();
  return (
    <div className="wrapper">
      {viewShowerThoughts &&
        showerThoughts.map((el) => (
          <div className="grid" key={Math.random().toString(36).substr(0, 5)}>
            {el}
          </div>
        ))}
    </div>
  );
};

export default ShowerThoughts;
