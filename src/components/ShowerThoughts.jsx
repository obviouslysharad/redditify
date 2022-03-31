import React from "react";
import { useFetchContext } from "../context/FetchContext";
import useIntersectionObserver from "./useIntersectionObserver";

const ShowerThoughts = ({ setLoading }) => {
  const { showerThoughts } = useFetchContext();
  console.log(showerThoughts.data);
  const lastElementRef = React.useRef();
  const intersectionObserver = useIntersectionObserver(
    showerThoughts.setFetchData,
    setLoading
  );
  React.useEffect(() => {
    console.log(showerThoughts.data);
    intersectionObserver.observe(lastElementRef.current, setLoading);
    setLoading(false);
  }, [showerThoughts.data]);
  return (
    <div className="gridWrapper">
      {showerThoughts.data &&
        showerThoughts.data.map((el, index) => {
          if (index !== showerThoughts.data.length - 3)
            return (
              <div
                className="grid"
                key={Math.random().toString(36).substr(0, 5)}
              >
                {el.data.title}
              </div>
            );
          else
            return (
              <div
                className="grid"
                key={Math.random().toString(36).substr(0, 5)}
                ref={lastElementRef}
              >
                {el.data.title}
              </div>
            );
        })}
    </div>
  );
};

export default ShowerThoughts;
