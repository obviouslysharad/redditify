import React from "react";
import { useFetchContext } from "../context/FetchContext";
import useIntersectionObserver from "./useIntersectionObserver";

const Memes = ({ setLoading }) => {
  const { memes } = useFetchContext();
  const lastElementRef = React.useRef();
  const intersectionObserver = useIntersectionObserver(
    memes.setFetchData,
    setLoading
  );
  React.useEffect(() => {
    console.log(memes.data);
    intersectionObserver.observe(lastElementRef.current, setLoading);
    setLoading(false);
  }, [memes.data]);
  return (
    <div>
      {
        <div className="imageContainer">
          {memes.data &&
            memes.data.map((el, index) => {
              if (el.data.post_hint === "image") {
                if (index != memes.data.length - 1)
                  return (
                    <img
                      key={el.data.id}
                      alt={el.data.title}
                      src={el.data.url}
                    />
                  );
                else
                  return (
                    <img
                      key={el.data.id}
                      alt={el.data.title}
                      src={el.data.url}
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
