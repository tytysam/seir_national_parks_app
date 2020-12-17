import React from "react";
import Parks from "../Parks/Parks.js";

const Home = ({ data }) => {
  return (
    <div>
      <h1>National Parks Directory</h1>
      <div className="parks-container row justify-content-center">
        {data.map((item, index) => {
          return <Parks item={item} />;
        })}
      </div>
    </div>
  );
};

export default Home;
