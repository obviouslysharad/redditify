import "./App.css";
import React from "react";
import ShowerThoughts from "./components/ShowerThoughts";
import Header from "./components/Header";
import Tags from "./components/Tags";
import BeautifulData from "./components/BeautifulData";
import BlackMagic from "./components/BlackMagic";
import Memes from "./components/Memes";
import Wallpapers from "./components/Wallpapers";
import { useTagContext } from "./context/TagContext";

function App() {
  const { tagClicked } = useTagContext();
  return (
    <div className="App">
      <Header />
      <Tags />
      {tagClicked === "Shower Thoughts" && <ShowerThoughts />}
      {tagClicked === "Beautiful Data" && <BeautifulData />}
      <BlackMagic />
      {tagClicked === "Memes" && <Memes />}
      {tagClicked === "Wallpapers" && <Wallpapers />}
    </div>
  );
}

export default App;
