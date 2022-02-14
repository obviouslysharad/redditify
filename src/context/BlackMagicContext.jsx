import React from "react";

const BlackMagicCon = React.createContext();

const BlackMagicContext = ({ children }) => {
  const [blackMagic, setBlackMagic] = React.useState([]);

  React.useEffect(() => {
    fetch(`https://www.reddit.com/r/blackmagicfuckery.json`)
      .then((res) => res.json())
      .then((res) => setBlackMagic(res.data.children));
  }, []);

  return (
    <BlackMagicCon.Provider value={blackMagic}>
      {children}
    </BlackMagicCon.Provider>
  );
};

export const useBlackMagicContext = () => {
  return React.useContext(BlackMagicCon);
};

export default BlackMagicContext;
