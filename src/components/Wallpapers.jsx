import React from "react";
import { useWallpaperContext } from "../context/WallpapersContext";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { GoChevronLeft } from "react-icons/go";
import { FiDownload } from "react-icons/fi";
import Loading from "./Loading";

const Wallpapers = () => {
  const { wallpapers, fetchMemes, isLoading } = useWallpaperContext();
  const lastElRef = React.useRef();
  const intersecob = new IntersectionObserver(([data]) => {
    if (data.isIntersecting) {
      intersecob.unobserve(lastElRef.current);
      console.log("fetched new memes");
      fetchMemes();
    }
  });

  async function downloadImage(imageSrc) {
    console.log("hi inside downloadimage");
    const blob = new Blob([imageSrc.toString()]);
    console.log(blob);
    const url = window.URL.createObjectURL(blob);
    console.log(url);
  }

  React.useEffect(() => {
    if (lastElRef.current) {
      intersecob.observe(lastElRef.current);
    }
  }, [wallpapers]);

  if (isLoading && !wallpapers) return <Loading isLoading={isLoading} />;
  const renderWallpapers = (index, data) => {
    return index < wallpapers.length - 5 ? (
      <img
        key={index}
        style={{
          height: "calc(100vh - 200px)",
          boxShadow: "0px 0px 10px rgb(50, 43, 88)",
          borderRadius: "20px",
          minWidth: "250px",
          minHeight: "500px",
        }}
        alt={data.data.title}
        src={data.data.url}
        onClick={() => downloadImage(data.data.url)}
      />
    ) : (
      <img
        key={index}
        style={{
          height: "calc(100vh - 200px)",
          boxShadow: "0px 0px 10px rgb(50, 43, 88)",
          borderRadius: "20px",
        }}
        alt="data.data.title"
        src={data.data.url}
        ref={lastElRef}
      />
    );
  };
  return (
    <div>
      {wallpapers && (
        <div
          id="imgbar"
          style={{
            overflowX: "scroll",
            display: "flex",
            gap: "30px",
            flexWrap: "auto",
            marginLeft: "40px",
          }}
        >
          <button
            style={{
              position: "fixed",
              left: "5px",
              top: "50%",
              padding: "10px",
              color: "white",
              background: "transparent",
              border: 0,
              fontSize: "20px",
            }}
            onClick={() => {
              let newinterval = setInterval(function () {
                document.getElementById("imgbar").scrollLeft -= 7;
              }, 1);

              setTimeout(() => {
                clearInterval(newinterval);
              }, 250);
            }}
          >
            <GoChevronLeft />
          </button>
          {wallpapers.map(
            (data, index) =>
              data.data.url.slice(data.data.url.length - 4) === ".png" && (
                <div style={{ position: "relative" }}>
                  {renderWallpapers(index, data)}
                  <button
                    style={{
                      position: "absolute",
                      right: "5px",
                      bottom: "20px",
                      background: "black",
                      border: "0",
                      borderRadius: "100%",
                      color: "white",
                      padding: "5px",
                      fontSize: "20px",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      const url = window.URL.createObjectURL(
                        new Blob([data.data.url])
                      );
                      const link = document.createElement("a");
                      link.href = url;
                      link.setAttribute("download", "image.jpg");
                      document.body.appendChild(link);
                      link.click();
                    }}
                  >
                    <FiDownload />
                  </button>
                </div>
              )
          )}
        </div>
      )}
      <button
        style={{
          position: "fixed",
          right: "10px",
          top: "50%",
          padding: "10px",
          color: "white",
          background: "transparent",
          border: 0,
          fontSize: "20px",
        }}
        onClick={() => {
          let newinterval = setInterval(function () {
            document.getElementById("imgbar").scrollLeft += 7;
          }, 1);

          setTimeout(() => {
            clearInterval(newinterval);
          }, 250);
        }}
      >
        <MdOutlineArrowForwardIos />
      </button>
    </div>
  );
};

export default Wallpapers;
