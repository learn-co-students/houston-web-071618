import React, { Component } from "react";

class Painting extends Component {
  constructor() {
    super(); // first call the base class's super method
    this.state = { votes: 0, inputValue: "" }; // update the child class
  }

  // state = { votes: 0 };

  incrementVotes = e => {
    console.log(this);
    this.setState({ votes: this.state.votes + 1 });
    // this.setState(function(oldState) {
    // return { votes: oldState.votes + 1 };
    // });
  };

  render() {
    return (
      <div className="painting-class">
        <h2>{this.props.title}</h2>
        <img src={this.props.image} alt={this.props.title} />
        <button onClick={this.incrementVotes}>Vote</button>
        <input
          onChange={e => {
            if (!e.target.value.includes("x")) {
              this.setState({ inputValue: e.target.value });
            }
          }}
          value={this.state.inputValue}
        />
        <p>Input value: {this.state.inputValue}</p>
        <p>{this.state.votes}</p>
      </div>
    );
  }
}

export default Painting;

// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
// }
//
// class Dog extends Animal {
//   constructor(owner, name) {
//     super(name);
//   }
// }
