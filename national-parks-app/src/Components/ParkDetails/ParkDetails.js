import React from "react";

const ParkDetails = ({ data }) => {
  return (
    <div className="park-details-container">
      <div className="hero-container row">
        <img />
        <h1>Park Name</h1>
      </div>
      <div className="summary row">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae
          dolorum dignissimos quam ut ducimus. Quia impedit laudantium inventore
          ad nam eaque itaque sequi consectetur aut incidunt, nisi molestiae
          dolores vero!
        </p>
      </div>
      <div className="secondary-details-container row">
        <div className="park-address">
          <h4>Address</h4>
          <p>address...</p>
        </div>
        <div className="park-directions">
          <h4>Directions</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quasi
            voluptatem quas ad est, aspernatur molestias earum maiores rem
            possimus ratione quo ullam quibusdam aut. Temporibus, ducimus hic!
            Omnis, velit.
          </p>
        </div>
        <div className="park-images">
          <div>
            <img />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParkDetails;
