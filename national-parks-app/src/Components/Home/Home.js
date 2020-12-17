import React, { useState, useEffect } from "react";
import Parks from "../Parks/Parks.js";

import data from "../Parks/parks.json";

const api = {
  key: "VmfeHgym9FcT1vI2sF4SSVgAjrgfbsGMvlbZqAyt",
  base: "https://developer.nps.gov/api/v1/parks?",
};

const Home = () => {
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
