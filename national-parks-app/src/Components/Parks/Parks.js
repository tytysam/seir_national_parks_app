import React from "react";
import { Link } from "react-router-dom";

const Parks = ({ item }) => {
  return (
    <div className="single-park-container col-3">
      <p className="subtitle">{item.fullName}</p>
      <img className="park-thumbnail" src={item.images[0].url} />
    </div>
  );
};

export default Parks;
