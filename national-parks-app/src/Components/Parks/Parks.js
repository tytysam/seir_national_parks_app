import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const api = {
  key: "VmfeHgym9FcT1vI2sF4SSVgAjrgfbsGMvlbZqAyt",
  base: "https://developer.nps.gov/api/v1/parks?",
};

const Parks = () => {
  const [parksData, setParksData] = useState([]);

  const getParksDataFromNPS = async () => {
    const url = `${api.base}&api_key=${api.key}`;
    const response = await fetch(url);
    const data = await response.json();
    const parksInfo = data.data;

    console.log(parksInfo);
    setParksData(parksInfo);
  };

  useEffect(() => {
    getParksDataFromNPS();
  }, []);

  console.log(parksData);

  return (
    <>
      {parksData.map((item) => {
        return (
          <div className="single-park-container col-3">
            <Link to={`/parks/${item.parkCode}`}>
              <p className="subtitle">{item.fullName}</p>
            </Link>
            <img
              src={item.images[0] && item.images[0].url}
              alt={item.images[0] && item.images[0].caption}
              className="park-thumbnail"
            />
          </div>
        );
      })}
    </>
  );
};

export default Parks;
