import "./App.css";
import React from "react";
import ShowerThoughts from "./components/ShowerThoughts";
import Header from "./components/Header";
import Tags from "./components/Tags";
import BeautifulData from "./components/BeautifulData";
import BlackMagic from "./components/BlackMagic";
import Memes from "./components/Memes";
import Wallpapers from "./components/Wallpapers";

function App() {
  return (
    <div className="App">
      <Header />
      <Tags />
      <ShowerThoughts />
      <BeautifulData />
      <BlackMagic />
      <Memes />
      <Wallpapers />
    </div>
  );
}

export default App;
