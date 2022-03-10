import React from "react";
import { useState } from "react";

const useFetchAgain = (WrappedComponent, url) => {
  const [payload, setPayload] = useState([]);
  const [after, setAfter] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  React.useEffect(() => {
    fetchResults();
  }, []);

  function fetchResults() {
    setIsLoading(true);
    fetch(`https://www.reddit.com/r/Amoledbackgrounds.json?after=${after}`)
      .then((res) => res.json())
      .then((res) => {
        setIsLoading(false);
        setAfter(res.data.after);
        setPayload([...payload, ...res.data.children]);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log("Error in loading wallpaper", err);
      });
  }
  return <WrappedComponent isLoading={isLoading} payload={payload} />;
};

export default useFetchAgain;
