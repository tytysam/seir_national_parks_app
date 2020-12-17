import React, { useState, useEffect } from "react";

const api = {
  key: "VmfeHgym9FcT1vI2sF4SSVgAjrgfbsGMvlbZqAyt",
  base: "https://developer.nps.gov/api/v1/parks?parkCode=",
};

const ParkDetails = (props) => {
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
    // const parkCode = props.routerProps.match.params.parkCode;
    const url = `${api.base}acad${api.key}`;
    const response = await fetch(url);
    const data = await response.json();
    setPark(data);
    console.log(park);
  };

  useEffect(() => {
    getParkFromNPS();
  }, []);

  return (
    <div className="park-details-container">
      <div className="hero-container row">
        <img />
        <h1>{park.data[0].fullName}</h1>
      </div>
      <div className="summary row">
        <p>{park.data[0].description}</p>
      </div>
      <div className="secondary-details-container row">
        <div className="park-address">
          <h4>Address</h4>
          <p>
            {park.data[0].addresses.map((elem, i) => {
              return (
                <div>
                  <p>{elem.line1}</p>
                  <p>{elem.line2}</p>
                  <p>{elem.line3}</p>
                  <p>
                    {elem.postalCode}, {elem.city}, {elem.stateCode}
                  </p>
                </div>
              );
            })}
          </p>
        </div>
        <div className="park-directions row">
          <h4>Directions</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quasi
            voluptatem quas ad est, aspernatur molestias earum maiores rem
            possimus ratione quo ullam quibusdam aut. Temporibus, ducimus hic!
            Omnis, velit.
          </p>
        </div>
        <div className="park-images-container row">
          <div>
            {park.data[0].images.map((elem, i) => {
              return (
                <img
                  src={elem.url}
                  alt={elem.caption}
                  className="park-images"
                ></img>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParkDetails;
