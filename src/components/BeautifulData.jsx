import React from "react";
import { useBeautifulData } from "../context/BeautifulDataContext";
import "./BeautifulData.css";
const BeautifulData = () => {
  const { beautifulData } = useBeautifulData();
  console.log(beautifulData);
  return (
    <div className="grid">
      {beautifulData.map((e) => {
        return (
          <img src={e.data.url} alt={e.data.topic} className="grid-items" />
        );
      })}
    </div>
  );
};

export default BeautifulData;
