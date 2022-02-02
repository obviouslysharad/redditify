import React from "react";

const TagCon = React.createContext();
const TagContext = ({ children }) => {
  const [tagClicked, setTagClicked] = React.useState("");
  const tagClickedHandler = (e) => {
    setTagClicked(e.target.innerText);
  };
  return (
    <TagCon.Provider value={{ tagClicked, tagClickedHandler }}>
      {children}
    </TagCon.Provider>
  );
};

export const useTagContext = () => {
  return React.useContext(TagCon);
};
export default TagContext;
