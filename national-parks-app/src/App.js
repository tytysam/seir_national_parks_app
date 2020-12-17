import React, { useState, useEffect } from "react";
import "./App.css";
import { Route, Link, Switch } from "react-router-dom";
import data from "./Components/Parks/parks.json";
import Home from "./Components/Home/Home.js";
import ParkDetails from "./Components/ParkDetails/ParkDetails.js";

const npsURL = "https://developer.nps.gov/api/v1/parks?parkCode=";
const apiKEY = "VmfeHgym9FcT1vI2sF4SSVgAjrgfbsGMvlbZqAyt";

// parks?parkCode=[PARK CODE HERE]&api_key=

function App() {
  // const [parks, setParks] = useState();

  // const getParksFromNPS = async () => {
  //   // const parkCode = data[0].parkCode;
  //   const url = `${npsURL}acad&api_key=${apiKEY}`;
  //   const response = await fetch(url);
  //   const data = await response.json();
  //   console.log(data);
  // };

  // useEffect(() => {
  //   getParksFromNPS();
  // }, []);

  return (
    <div className="app-container">
      <nav>
        <Link to="/">
          <img
            className="nat-parks-logo"
            src="https://upload.wikimedia.org/wikipedia/commons/9/97/Logo_of_the_United_States_National_Park_Service.svg"
            alt=""
          />
          Home
        </Link>
      </nav>
      <Switch>
        <Route
          exact
          path="/"
          render={(routerProps) => {
            return <Home routerProps={routerProps} data={data} />;
          }}
        />
        <Route
          path="/park/:id"
          render={(routerProps) => {
            return <ParkDetails routerProps={routerProps} data={data} />;
          }}
        />
      </Switch>
      <footer>
        <nav>
          <Link to="/">
            <p>National Park Service</p>
            <h3>U.S. Department of the Interior</h3>
            <img
              className="nat-parks-logo"
              src="https://upload.wikimedia.org/wikipedia/commons/9/97/Logo_of_the_United_States_National_Park_Service.svg"
              alt=""
            />
          </Link>
        </nav>
      </footer>
    </div>
  );
}

export default App;
