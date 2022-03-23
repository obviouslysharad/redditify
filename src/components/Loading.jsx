import React from "react";
import { Triangle } from "react-loader-spinner";

const Loading = ({ loading }) => {
  return (
    <>
      <div
        style={{
          position: "fixed",
          opacity: "0.7",
          background: "black",
          height: "100vh",
          width: "100vw",
        }}
      ></div>
      <div style={{ position: "fixed", top: "50%", right: "50%" }}>
        <Triangle color="#fff" />
      </div>
    </>
  );
};

export default Loading;
