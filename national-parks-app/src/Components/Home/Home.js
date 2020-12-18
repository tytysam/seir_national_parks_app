import React from "react";
import Parks from "../Parks/Parks.js";

const Home = () => {
  return (
    <div>
      <h1 className="nps-header">National Parks Directory</h1>
      <div className="parks-container row justify-content-center">
        <Parks />
      </div>
    </div>
  );
};

export default Home;
