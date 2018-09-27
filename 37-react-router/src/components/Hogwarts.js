import React, { Component } from "react";
import Nav from "./Nav";
import PigPen from "./PigPen";

class Hogwarts extends Component {
  state = {
    hogs: [],
    isLoading: true
  };

  componentDidMount() {
    fetch("http://localhost:3000/hogs")
      .then(result => result.json())
      .then(hogs => this.setState({ hogs, isLoading: false }));
  }

  render() {
    return (
      <div className="App">
        <Nav />
        {this.state.isLoading ? (
          <h1>Loading</h1>
        ) : (
          <PigPen hogs={this.state.hogs} />
        )}
      </div>
    );
  }
}

export default Hogwarts;
