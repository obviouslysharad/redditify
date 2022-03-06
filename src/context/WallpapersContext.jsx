import React from "react";

const WallpaperContext = React.createContext();
const WallpapersContext = ({ children }) => {
  const [wallpapers, setWallpapers] = React.useState([]);
  const [after, setAfter] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    fetchMemes();
  }, []);

  function fetchMemes() {
    setIsLoading(true);
    fetch(`https://www.reddit.com/r/Amoledbackgrounds.json?after=${after}`)
      .then((res) => res.json())
      .then((res) => {
        setAfter(res.data.after);
        setWallpapers([...wallpapers, ...res.data.children]);
        setIsLoading(false);
      })
      .catch((err) => console.log("Error in loading wallpaper", err));
  }
  return (
    <WallpaperContext.Provider value={{ wallpapers, fetchMemes, isLoading }}>
      {children}
    </WallpaperContext.Provider>
  );
};
export const useWallpaperContext = () => {
  return React.useContext(WallpaperContext);
};
export default WallpapersContext;
