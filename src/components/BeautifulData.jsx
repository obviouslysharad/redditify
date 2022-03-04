import React from "react";
import { useBeautifulData } from "../context/BeautifulDataContext";

const BeautifulData = () => {
  const { beautifulData } = useBeautifulData();
  return (
    <div>
      {
        <div class="imageContainer">
          {beautifulData &&
            beautifulData.map((el) => {
              if (el.data.post_hint === "image")
                return (
                  <img key={el.data.id} alt={el.data.title} src={el.data.url} />
                );
            })}
        </div>
      }
    </div>
  );
};

export default BeautifulData;
