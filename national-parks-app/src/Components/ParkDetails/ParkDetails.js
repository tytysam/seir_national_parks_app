import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const api = {
  key: "VmfeHgym9FcT1vI2sF4SSVgAjrgfbsGMvlbZqAyt",
  base: "https://developer.nps.gov/api/v1/parks?parkCode=",
};

const ParkDetails = ({ item, routerProps }) => {
  const [park, setPark] = useState({});

  // include the following:
  // addresses
  // contacts
  // description
  // designation
  // name
  // url
  // parkCode
  // images

  const getParkFromNPS = async () => {
    const parkCode = routerProps.match.params.parkCode;
    const url = `${api.base}${parkCode}&api_key=${api.key}`;
    const response = await fetch(url);
    const data = await response.json();
    const parkInfo = data.data[0];

    console.log(parkInfo);
    setPark(parkInfo);
  };

  useEffect(() => {
    getParkFromNPS();
  }, []);

  console.log(park);

  return (
    <div className="park-details-container">
      <div className="hero-container row justify-content-center">
        <div className="col-12">
          <img
            src={park.images && park.images[0].url}
            alt={park.images && park.images[0].caption}
            className="hero-image"
          />
          <h1>{park.length === 0 ? "" : park.fullName}</h1>
        </div>
      </div>
      <div className="summary row justify-content-center">
        <div className="col-8">
          <p>{park.length === 0 ? "" : park.description}</p>
        </div>
      </div>
      <div className="secondary-details-container">
        <div className="row justify-content-center">
          <div className="col-8 park-address">
            <h4>Address</h4>
            <p>
              <div className="park-addresses">
                <p>{park.addresses && park.addresses[0].line1}</p>
                <p>{park.addresses && park.addresses[0].line2}</p>
                <p>{park.addresses && park.addresses[0].line3}</p>
                <p>
                  {park.addresses && park.addresses[0].city},{" "}
                  {park.addresses && park.addresses[0].stateCode}{" "}
                  {park.addresses && park.addresses[0].postalCode}
                </p>
              </div>
            </p>
          </div>
        </div>
        <div className="park-directions row justify-content-center">
          <div className="col-8">
            <h4>Directions</h4>
            <p>{park.length === 0 ? "" : park.directionsInfo}</p>
          </div>
        </div>
        <div className="park-images-container row justify-content-center">
          <div className="col-6">
            <img
              src={park.images && park.images[1].url}
              alt={park.images && park.images[1].caption}
              className="park-images"
            ></img>
          </div>
          <div className="col-6">
            <img
              src={park.images && park.images[2].url}
              alt={park.images && park.images[2].caption}
              className="park-images"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParkDetails;
