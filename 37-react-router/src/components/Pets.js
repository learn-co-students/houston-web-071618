import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

import Filters from "./PetsFilters";
import PetBrowser from "./PetBrowser";

import { getAll as getAllPets } from "../pets.js";

class Pets extends Component {
  constructor() {
    super();
  }

  state = {
    pets: getAllPets(),
    adoptedPets: []
  };

  updateFilter(selectedFilter) {
    console.log(this.props.history);
    if (selectedFilter === "all") {
      this.props.history.push(`/pets`);
    } else {
      this.props.history.push(`/pets/${selectedFilter}`);
    }
  }

  render() {
    return (
      <div>
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
          <Link to="/pets/micropig">Micropigs</Link>
          <Link to="/pets/cat">Cats</Link>
          <Link to="/pets/dog">Dogs</Link>
        </header>

        <Filters
          updateFilter={selectedFilter => this.updateFilter(selectedFilter)}
        />

        <Route
          exact
          path="/pets"
          render={() => {
            return (
              <div className="ui container">
                <div className="ui container">
                  <div className="ui grid">
                    <div className="four wide column" />
                    <div className="twelve wide column">
                      <PetBrowser
                        filteredPets={this.state.pets}
                        filteredAdoptedPets={this.state.adoptedPets}
                        adoptPet={id => {
                          const foundPet = this.state.pets.find(
                            pet => pet.id === id
                          );
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
          }}
        />

        <Route
          path="/pets/:type"
          render={({ history, location, match }) => {
            return (
              <div>
                <PetBrowser
                  filteredPets={this.state.pets.filter(pet => {
                    return pet.type === match.params.type;
                  })}
                  filteredAdoptedPets={this.state.adoptedPets.filter(pet => {
                    return pet.type === match.params.type;
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
            );
          }}
        />
      </div>
    );
  }
}

export default Pets;
