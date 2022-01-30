import React from "react";

const TagCon = React.createContext();
const TagContext = ({ children }) => {
  const [viewShowerThoughts, setViewShowerThoughts] = React.useState(false);
  const [viewBeautifulData, setViewBeautifulData] = React.useState(false);
  const tagClicked = (e) => {
    if (e.target.innerText == "Shower Thoughts") {
      setViewShowerThoughts(!viewShowerThoughts);
      setViewBeautifulData(false);
    }
  };
  return (
    <TagCon.Provider value={{ tagClicked, viewShowerThoughts }}>
      {children}
    </TagCon.Provider>
  );
};

export const useTagContext = () => {
  return React.useContext(TagCon);
};
export default TagContext;
