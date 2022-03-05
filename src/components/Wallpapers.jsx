import React from "react";
import { useWallpaperContext } from "../context/WallpapersContext";

const Wallpapers = () => {
  const { wallpapers, fetchMemes } = useWallpaperContext();
  const intersecob = new IntersectionObserver(([data]) => {
    console.log("intersecob", data);
    data.isIntersecting && fetchMemes();
  });

  // React.useEffect(() => intersecob.observe(document.getElementById("lastEl")));

  const renderWallpapers = (index, data) => {
    return index < wallpapers.length - 2 ? (
      <img
        key={data.data.id}
        id="hey"
        style={{
          height: "calc(100vh - 200px)",
          boxShadow: "0px 0px 10px rgb(50, 43, 88)",
          borderRadius: "20px",
        }}
        alt={data.data.title}
        src={data.data.url}
      />
    ) : (
      <img
        key="data.data.id"
        id="lastEl"
        style={{
          height: "calc(100vh - 200px)",
          boxShadow: "0px 0px 10px rgb(50, 43, 88)",
          borderRadius: "20px",
        }}
        alt="data.data.title"
        src={data.data.url}
      />
    );
  };
  return (
    <div>
      {wallpapers && (
        <div
          id="imgbar"
          style={{
            display: "flex",
            gap: "30px",
            padding: "20px",
            flexWrap: "auto",
            marginLeft: "40px",
            overflow: "hidden",
          }}
        >
          {wallpapers.map(
            (data, index) =>
              data.data.url.slice(data.data.url.length - 4) === ".png" &&
              renderWallpapers(index, data)
          )}
        </div>
      )}
      <button
        style={{
          position: "fixed",
          right: "0px",
          top: "0px",
          bottom: "0px",
          opacity: "0",
        }}
        onClick={() => {
          document.getElementById("imgbar").scrollLeft += 200;
        }}
      >
        Right
      </button>
    </div>
  );
};

export default Wallpapers;
