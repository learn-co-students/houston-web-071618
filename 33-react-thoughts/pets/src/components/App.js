import React, { Component } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

import { getAll as getAllPets } from "../data/pets.js";

class App extends Component {
  constructor() {
    super();
  }

  state = {
    pets: getAllPets(),
    adoptedPets: [],
    filter: "all"
  };

  updateFilter(selectedFilter) {
    this.setState({
      filter: selectedFilter
    });
  }

  render() {
    console.log(this.state.adoptedPets);
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters
                updateFilter={selectedFilter =>
                  this.updateFilter(selectedFilter)
                }
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser
                filteredPets={this.state.pets.filter(pet => {
                  if (this.state.filter === "all") return true;
                  return pet.type === this.state.filter;
                })}
                filteredAdoptedPets={this.state.adoptedPets.filter(pet => {
                  if (this.state.filter === "all") return true;
                  return pet.type === this.state.filter;
                })}
                adoptPet={id => {
                  const foundPet = this.state.pets.find(pet => pet.id === id);
                  // this.state.adoptedPets.push(foundPet);
                  this.setState({
                    adoptedPets: [...this.state.adoptedPets, foundPet]
                  });
                }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
