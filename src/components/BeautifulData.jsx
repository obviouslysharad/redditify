import React from "react";
import { useFetchContext } from "../context/FetchContext";

const BeautifulData = () => {
  const { beautifulData } = useFetchContext();
  return (
    <div>
      {
        <div className="imageContainer">
          {beautifulData.data &&
            beautifulData.data.map((el) => {
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
