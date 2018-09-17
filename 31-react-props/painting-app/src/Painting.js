import React, { Component } from "react";

class Painting extends Component {
  render() {
    return (
      <div className="painting-class">
        <h2>{this.props.title}</h2>
        <img src={this.props.image} alt={this.props.title} />
      </div>
    );
  }
}

export default Painting;
