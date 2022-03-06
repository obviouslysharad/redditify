import React from "react";
import { Triangle } from "react-loader-spinner";

const Loading = ({ isLoading }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "calc(100vh - 200px)",
      }}
    >
      <Triangle color="#fff" />
    </div>
  );
};

export default Loading;
