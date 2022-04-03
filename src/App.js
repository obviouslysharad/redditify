import "./App.css";
import React from "react";
import ShowerThoughts from "./components/ShowerThoughts";
import Header from "./components/Header";
import Tags from "./components/Tags";
import Memes from "./components/Memes";
import Loading from "./components/Loading";
import Wallpapers from "./components/Wallpapers";
import { useTagContext } from "./context/TagContext";
import { motion } from "framer-motion";

function App() {
  const { tagClicked } = useTagContext();
  const [loading, setLoading] = React.useState(false);
  return (
    <div className="App">
      {loading && <Loading />}
      <Header />
      <Tags />
      {tagClicked === "Shower Thoughts" && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            damping: 15,
            stiffness: 10,
          }}
        >
          <ShowerThoughts setLoading={setLoading} />
        </motion.div>
      )}

      {tagClicked === "Memes" && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            damping: 15,
            stiffness: 10,
          }}
        >
          <Memes setLoading={setLoading} loading={loading} />
        </motion.div>
      )}
      {tagClicked === "Wallpapers" && (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            damping: 15,
            type: "spring",
            duration: 0.5,
          }}
        >
          <Wallpapers setLoading={setLoading} />
        </motion.div>
      )}
    </div>
  );
}

export default App;
