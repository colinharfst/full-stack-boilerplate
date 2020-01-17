import * as React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./home";
import Resume from "./resume";
import Judge from "./judge";
import Chess from "./chess";
import Math from "./math";

export default function Routes() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/resume">Resume</Link>
            </li>
            <li>
              <Link to="/judge">Judge</Link>
            </li>
            <li>
              <Link to="/chess">chess</Link>
            </li>
            <li>
              <Link to="/math">Math</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/resume">
            <Resume />
          </Route>
          <Route path="/judge">
            <Judge />
          </Route>
          <Route path="/chess">
            <Chess />
          </Route>
          <Route path="/math">
            <Math />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
