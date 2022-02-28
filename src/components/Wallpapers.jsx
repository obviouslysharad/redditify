import React from "react";
import { useWallpaperContext } from "../context/WallpapersContext";
import { useTagContext } from "../context/TagContext";

const Wallpapers = () => {
  const { wallpapers, fetchMemes } = useWallpaperContext();
  const { tagClicked } = useTagContext();
  console.log("inside wallpapers");
  let interval = null;
  const intersecob = new IntersectionObserver(([data]) => {
    data.isIntersecting && fetchMemes();
  });
  // tagClicked === "Wallpapers" &&
  //   wallpapers.length > 40 &&

  React.useEffect(() => intersecob.observe(document.getElementById("lastEl")));
  React.useEffect(() => console.log("without args"));
  React.useEffect(() => console.log("with empty args", []));

  const renderWallpapers = (index, data) => {
    console.log(index, wallpapers.length - 2);
    return index < wallpapers.length - 2 ? (
      <img
        key={data.data.id}
        style={{
          width: "400px",
          height: "500px",
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
          width: "400px",
          height: "500px",
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
      {tagClicked === "Wallpapers" && (
        <div
          id="imgbar"
          style={{
            display: "flex",
            gap: "20px",
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
        onMouseOver={() => {
          console.log("over here");
          interval = setInterval(
            () => (document.getElementById("imgbar").scrollLeft += 10),
            50
          );
        }}
        onMouseOut={() => {
          console.log("out");
          clearInterval(interval);
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
