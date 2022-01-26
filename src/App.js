import "./App.css";
import React from "react";
import ShowerThoughts from "./components/ShowerThoughts";
import Header from "./components/Header";
import Tags from "./components/Tags";

function App() {
  return (
    <div className="App">
      <Header />
      <Tags />
      <ShowerThoughts />
    </div>
  );
}

export default App;
