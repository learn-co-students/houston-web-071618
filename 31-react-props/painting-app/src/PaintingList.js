import React, { Component } from "react";
import Painting from "./Painting";

class PaintingList extends Component {
  render() {
    const paintingComponents = this.props.paintings.map(paintingObj => {
      return (
        <Painting
          key={paintingObj.id}
          image={paintingObj.image}
          title={paintingObj.title}
        />
      );
    });

    // iterate through the array
    // create it (Painting component) for each
    return <div>{paintingComponents}</div>;
  }
}

export default PaintingList;
