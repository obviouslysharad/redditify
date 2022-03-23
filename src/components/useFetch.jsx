import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState("");
  const [after, setAfter] = useState("");
  const [fetchData, setFetchData] = useState(false);
  useEffect(() => {
    fetch(`${url}?after=${after}`)
      .then((res) => res.json())
      .then((res) => {
        setAfter(res.data.after);
        console.log("fetch kra");
        setData([...data, ...res.data.children]);
      })
      .catch((err) => {
        console.log("Error in loading", err);
      });
  }, [fetchData]);

  return { data, setFetchData };
};

export default useFetch;
