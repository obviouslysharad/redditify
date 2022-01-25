import React from "react";
import "./ShowerThoughts.css";

const ShowerThoughts = ({ showerThoughts }) => {
  return (
    <div className="wrapper">
      {showerThoughts &&
        showerThoughts.map((el) => <div className="grid">{el}</div>)}
    </div>
  );
};

export default ShowerThoughts;
