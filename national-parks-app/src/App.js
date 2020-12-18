import React from "react";
import "./App.css";
import { Route, Link, Switch } from "react-router-dom";
import Home from "./Components/Home/Home.js";
import ParkDetails from "./Components/ParkDetails/ParkDetails.js";

function App() {
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
        <Route exact path="/" component={Home} />
        <Route
          path="/parks/:parkCode"
          render={(routerProps) => {
            return <ParkDetails routerProps={routerProps} />;
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
