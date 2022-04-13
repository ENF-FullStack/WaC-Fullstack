import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import ListChars from "./components/list-characters.component";
import EditChar from "./components/edit-character.component";
import CreateChar from "./components/create-character.component";

function App() {
  return (
    <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/" className="navbar-brand">
            lootPusher
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/create"} className="nav-link">
                New character
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/edit"} className="nav-link">
                Edit
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Switch>
          <Route exact path={["/", "/characters"]} component={ListChars} />
          <Route path={["/edit", "/characters/:id"]} component={EditChar} />
          <Route exact path={["/create", "/characters"]} component={CreateChar} />
          </Switch>
        </div>
    </div>
  );
}

export default App;
