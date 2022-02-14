import React from "react";

const WallpaperContext = React.createContext();
const WallpapersContext = ({ children }) => {
  const [wallpapers, setWallpapers] = React.useState([]);
  React.useEffect(() => {
    fetch(`https://www.reddit.com/r/Amoledbackgrounds.json`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res.data.children);
        setWallpapers(res.data.children);
      })
      .catch((err) => console.log("WallpaperErr", err));
  }, []);
  return (
    <WallpaperContext.Provider value={wallpapers}>
      {children}
    </WallpaperContext.Provider>
  );
};
export const useWallpaperContext = () => {
  return React.useContext(WallpaperContext);
};
export default WallpapersContext;
