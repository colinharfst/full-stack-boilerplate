import * as React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./home";
import Resume from "./resume";
import Judge from "./judge";
import ChessComp from "./chess";
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
              <Link to="/chess">Chess</Link>
            </li>
            <li>
              <Link to="/math">Math</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/resume">
            <Resume />
          </Route>
          <Route path="/judge">
            <Judge />
          </Route>
          <Route path="/chess">
            <ChessComp />
          </Route>
          <Route path="/math">
            <Math />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
