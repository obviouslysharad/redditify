import React from "react";
import { useBlackMagicContext } from "../context/BlackMagicContext";
import ReactPlayer from "react-player";
import { useTagContext } from "../context/TagContext";

const BlackMagic = () => {
  const blackMagic = useBlackMagicContext();
  const { tagClicked } = useTagContext();
  if (tagClicked !== "Black Magic") return null;
  console.log("bm", blackMagic);
  return (
    <div>
      {blackMagic.map((vid) => {
        return <ReactPlayer url="vid.data.url" />;
      })}
    </div>
  );
};

export default BlackMagic;
