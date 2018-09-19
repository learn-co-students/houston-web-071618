import React, { Component } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

import { getAll as getAllPets } from "../data/pets.js";

class App extends Component {
  constructor() {
    super();

    this.state = {
      pets: getAllPets(),
      adoptedPets: [],
      filter: "all"
    };
  }

  render() {
    console.log(this.state.filter);
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters
                updateFilter={selectedFilter => {
                  this.setState({
                    filter: selectedFilter
                  });
                }}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
