import React from "react";

const WallpaperContext = React.createContext();
const WallpapersContext = ({ children }) => {
  const [wallpapers, setWallpapers] = React.useState([]);
  const [after, setAfter] = React.useState("");

  React.useEffect(() => {
    fetchMemes();
  }, []);

  function fetchMemes() {
    fetch(`https://www.reddit.com/r/Amoledbackgrounds.json?after=${after}`)
      .then((res) => res.json())
      .then((res) => {
        setAfter(res.data.after);
        setWallpapers([...wallpapers, ...res.data.children]);
      })
      .catch((err) => console.log("Error in loading wallpaper", err));
  }
  return (
    <WallpaperContext.Provider value={{ wallpapers, fetchMemes }}>
      {children}
    </WallpaperContext.Provider>
  );
};
export const useWallpaperContext = () => {
  return React.useContext(WallpaperContext);
};
export default WallpapersContext;
