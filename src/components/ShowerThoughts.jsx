import React from "react";
import { useShowerThoughtsContext } from "../context/ShowerThoughtsContext";
import "./ShowerThoughts.css";

const ShowerThoughts = () => {
  const { showerThoughts } = useShowerThoughtsContext();
  return (
    <div className="wrapper">
      {showerThoughts.map((el) => (
        <div className="grid" key={Math.random().toString(36).substr(0, 5)}>
          {el}
        </div>
      ))}
    </div>
  );
};

export default ShowerThoughts;
