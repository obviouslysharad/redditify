import React from "react";
import { useFetchContext } from "../context/FetchContext";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { GoChevronLeft } from "react-icons/go";
import useIntersectionObserver from "./useIntersectionObserver";

const Wallpapers = ({ setLoading }) => {
  const { wallpapers } = useFetchContext();
  const lastElementRef = React.useRef();
  const intersectionObserver = useIntersectionObserver(
    wallpapers.setFetchData,
    setLoading
  );
  React.useEffect(() => {
    intersectionObserver.observe(lastElementRef.current);
    setLoading(false);
  }, [wallpapers.data]);

  const renderWallpapers = (index, data) => {
    return index > wallpapers.length ? (
      <img
        style={{
          height: "calc(100vh - 200px)",
          boxShadow: "0px 0px 10px rgb(50, 43, 88)",
          borderRadius: "20px",
          width: "250px",
          minHeight: "500px",
        }}
        alt={data.data.title}
        src={`//images.weserv.nl/?url=${data.data.url}`}
      />
    ) : (
      <img
        style={{
          height: "calc(100vh - 200px)",
          boxShadow: "0px 0px 10px rgb(50, 43, 88)",
          borderRadius: "20px",
          minWidth: "250px",
          minHeight: "500px",
        }}
        alt="data.data.title"
        src={`//images.weserv.nl/?url=${data.data.url}`}
        ref={lastElementRef}
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
              position: "absolute",
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
                document.getElementById("imgbar").scrollLeft -= 10;
              }, 1);

              setTimeout(() => {
                clearInterval(newinterval);
              }, 300);
            }}
          >
            <GoChevronLeft />
          </button>
          {wallpapers.data.map(
            (data, index) =>
              data.data.url.slice(data.data.url.length - 4) === ".png" && (
                <div key={index}>
                  {renderWallpapers(index, data)}
                  <button
                    key={index}
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
                    onClick={(e) => {}}
                  ></button>
                </div>
              )
          )}
        </div>
      )}
      <button
        style={{
          position: "absolute",
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
            document.getElementById("imgbar").scrollLeft += 10;
          }, 1);

          setTimeout(() => {
            clearInterval(newinterval);
          }, 300);
        }}
      >
        <MdOutlineArrowForwardIos />
      </button>
    </div>
  );
};

export default Wallpapers;
