import React from "react";
import { Link } from "react-router-dom";

const Parks = ({ item }) => {
  return (
    <div className="single-park-container col-3">
      <p className="subtitle">{item.name}</p>
      <img
        className="park-thumbnail"
        src={
          item.images[0].url === item.images[0].url
            ? item.images[0].url
            : "https://upload.wikimedia.org/wikipedia/commons/9/97/Logo_of_the_United_States_National_Park_Service.svg"
        }
      />
    </div>
  );
};

export default Parks;
