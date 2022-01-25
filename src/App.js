import "./App.css";
import React from "react";
import ShowerThoughts from "./components/ShowerThoughts";
// import { snoowrap } from "snoowrap";

function App() {
  const [showerThoughts, setShowerThoughts] = React.useState([]);
  React.useEffect(() => {
    fetch(`https://www.reddit.com/r/showerThoughts.json`)
      .then((temp) => temp.json())
      .then((response) => response.data.children.map((el) => el.data.title))
      .then((response) => setShowerThoughts(response))
      .catch((err) => console.log(err));
  }, []);
  // console.log(showerThoughts);
  return (
    <div className="App">
      <div className="header">REDDITIFY</div>
      <div className="tags">
        <button className="btn">Shower Thoughts</button>
        <button className="btn">Memes</button>
        <button className="btn">Facts</button>
        <button className="btn">Wallpapers</button>
      </div>
      <ShowerThoughts showerThoughts={showerThoughts} />
    </div>
  );
}

export default App;
