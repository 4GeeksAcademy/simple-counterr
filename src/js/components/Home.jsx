import React from "react";
import SecondsCounter from "./SecondsCounter";
import "../../styles/index.css";

const Home = () => {
  return (
    <div>
      <SecondsCounter seconds={0} />
    </div>
  );
};

export default Home;