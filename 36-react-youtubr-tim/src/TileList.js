import React, { Component } from "react";

import Tile from "./Tile";

class TileList extends Component {
  render() {
    const generateTile = result => (
      <Tile video={result} handleUpdateVideo={this.props.handleUpdateVideo} />
    );
    const tileComponents = this.props.searchResults.map(generateTile);

    return (
      <div style={{ border: "1px solid red", padding: "1rem", margin: "1rem" }}>
        <h1>Results</h1>
        {tileComponents}
      </div>
    );
  }
}

export default TileList;
