import "./App.css";
import React from "react";
import ShowerThoughts from "./components/ShowerThoughts";
import Header from "./components/Header";
import Tags from "./components/Tags";
import BeautifulData from "./components/BeautifulData";
import Memes from "./components/Memes";
import Loading from "./components/Loading";
import Wallpapers from "./components/Wallpapers";
import { useTagContext } from "./context/TagContext";

function App() {
  const { tagClicked } = useTagContext();
  const [loading, setLoading] = React.useState(false);
  return (
    <div className="App">
      {loading && <Loading />}
      <Header />
      <Tags />
      {tagClicked === "Shower Thoughts" && (
        <ShowerThoughts setLoading={setLoading} />
      )}
      {tagClicked === "Beautiful Data" && (
        <BeautifulData setLoading={setLoading} />
      )}
      {tagClicked === "Memes" && <Memes setLoading={setLoading} />}
      {tagClicked === "Wallpapers" && <Wallpapers setLoading={setLoading} />}
    </div>
  );
}

export default App;
