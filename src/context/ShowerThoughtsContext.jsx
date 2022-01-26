import React, { useState, useEffect, createContext, useContext } from "react";

export const ShowerThoughtsConCreate = createContext();
const ShowerThoughtsContext = ({ children }) => {
  const [viewShowerThoughts, setViewShowerThoughts] = useState(false);
  const [showerThoughts, setShowerThoughts] = useState([]);
  React.useEffect(() => {
    fetch(`https://www.reddit.com/r/showerThoughts.json`)
      .then((res) => res.json())
      .then((res) => res.data.children.map((child) => child.data.title))
      .then((res) => setShowerThoughts(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <ShowerThoughtsConCreate.Provider
      value={{
        showerThoughts,
        setShowerThoughts,
        viewShowerThoughts,
        setViewShowerThoughts,
      }}
    >
      {children}
    </ShowerThoughtsConCreate.Provider>
  );
};

export const useShowerThoughtsContext = () => {
  return useContext(ShowerThoughtsConCreate);
};

export default ShowerThoughtsContext;
