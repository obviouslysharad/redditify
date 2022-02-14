import React from "react";
import { useWallpaperContext } from "../context/WallpapersContext";
import { useTagContext } from "../context/TagContext";

const Wallpapers = () => {
  const wallpapers = useWallpaperContext();
  const { tagClicked } = useTagContext();
  console.log("wallpapers", wallpapers);
  return (
    <div>
      {tagClicked === "Wallpapers" && (
        <div
          style={{
            display: "flex",
            gap: "20px",
            flexWrap: "auto",
            // overflow: "hidden",
          }}
        >
          {wallpapers.map((data) => (
            <img
              style={{
                width: "300px",
                height: "500px",
              }}
              src={data.data.url}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Wallpapers;
