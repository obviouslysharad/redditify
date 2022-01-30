import React from "react";

const BeautifulData = React.createContext();
const BeautifulDataContext = ({ children }) => {
  const [beautifulData, setBeautifulData] = React.useState([]);
  // React.useEffect(() => {
  //   fetch(`https://www.reddit.com/r/dataisbeautiful.json`)
  //     .then((res) => res.json())
  //     .then((res) => setBeautifulData(res.data.children));
  // }, []);

  return (
    <BeautifulData.Provider value={{ beautifulData }}>
      {children}
    </BeautifulData.Provider>
  );
};

export const useBeautifulData = () => {
  return React.useContext(BeautifulData);
};

export default BeautifulDataContext;
