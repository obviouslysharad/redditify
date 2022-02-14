import React, { createContext, useContext, useEffect, useState } from "react";

const MemeCon = createContext();
const MemeContext = ({ children }) => {
  const [memeState, setMemeState] = useState("");
  useEffect(() => {
    fetch("https://www.reddit.com/r/memes.json")
      .then((res) => res.json())
      .then((res) => setMemeState(res.data.children));
  }, []);
  return <MemeCon.Provider value={memeState}>{children}</MemeCon.Provider>;
};
export const useMemeContext = () => {
  return useContext(MemeCon);
};
export default MemeContext;
