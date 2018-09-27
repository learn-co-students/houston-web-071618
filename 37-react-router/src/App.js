import React, { Component } from "react";

import { Route, NavLink, Switch, Redirect } from "react-router-dom";

import YouTubr from "./components/YouTubr";
import Hogwarts from "./components/Hogwarts";
import Pets from "./components/Pets";
import Home from "./components/Home";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Mod 4 Projects</h1>
          <nav>
            <ul>
              <li>
                <NavLink to="/youtubr" activeClassName="active">
                  YouTubr
                </NavLink>
              </li>
              <li>
                <NavLink to="/hogwarts" activeClassName="active">
                  Hogwarts
                </NavLink>
              </li>
              <li>
                <NavLink to="/pets" activeClassName="active">
                  Pets
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>

        <Switch>
          <Route path="/youtubr" component={YouTubr} />
          <Route path="/hogwarts" component={Hogwarts} />
          <Route path="/pets" component={Pets} />
          <Redirect to="/error/" />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
