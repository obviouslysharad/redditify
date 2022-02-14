import React from "react";
import { useBeautifulData } from "../context/BeautifulDataContext";
import { useTagContext } from "../context/TagContext";
import "./BeautifulData.css";
const BeautifulData = () => {
  const { beautifulData } = useBeautifulData();
  console.log(beautifulData);
  const { tagClicked } = useTagContext();
  console.log(tagClicked);
  return (
    <div>
      {tagClicked === "Beautiful Data" && (
        <div id="imgParent">
          {beautifulData.map((img, index) => {
            return <img src={img.data.url} alt={img.data.topic} key={index} />;
          })}
        </div>
      )}
    </div>
  );
};

export default BeautifulData;
