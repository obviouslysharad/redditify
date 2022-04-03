import React from "react";
import { useFetchContext } from "../context/FetchContext";
import useIntersectionObserver from "./useIntersectionObserver";

const Memes = ({ setLoading, loading }) => {
  const { memes } = useFetchContext();
  const lastElementRef = React.useRef();
  const intersectionObserver = useIntersectionObserver(
    memes.setFetchData,
    setLoading
  );
  console.log("inside memes");
  React.useEffect(() => {
    intersectionObserver.observe(lastElementRef.current, setLoading);
  });
  // useEffect(() => {
  // });
  return (
    <div>
      {
        <div className="imageColContainer">
          {memes.data &&
            memes.data.map((el, index) => {
              if (el.data.post_hint === "image") {
                if (index !== memes.data.length - 1)
                  return (
                    <img
                      key={el.data.id}
                      alt={el.data.title}
                      src={`//images.weserv.nl/?url=${el.data.url}`}
                    />
                  );
                else
                  return (
                    <img
                      key={el.data.id}
                      alt={el.data.title}
                      src={`//images.weserv.nl/?url=${el.data.url}`}
                      ref={lastElementRef}
                    />
                  );
              } else return null;
            })}
        </div>
      }
    </div>
  );
};

export default Memes;
