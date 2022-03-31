import React, { createContext, useContext } from "react";
import useFetch from "../components/useFetch";

const FetchCon = createContext();
const FetchContext = ({ children }) => {
  let memes = useFetch("https://www.reddit.com/r/memes.json");
  let showerThoughts = useFetch("https://www.reddit.com/r/showerThoughts.json");
  let wallpapers = useFetch("https://www.reddit.com/r/Amoledbackgrounds.json");
  return (
    <FetchCon.Provider value={{ memes, showerThoughts, wallpapers }}>
      {children}
    </FetchCon.Provider>
  );
};
export const useFetchContext = () => {
  return useContext(FetchCon);
};
export default FetchContext;
