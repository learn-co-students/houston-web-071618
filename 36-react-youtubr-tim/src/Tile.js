import React, { Component } from "react";

class Tile extends Component {
  handleClick = e => {
    const id = this.props.video.id.videoId;
    const title = this.props.video.snippet.title;
    const description = this.props.video.snippet.description;

    this.props.handleUpdateVideo(id, title, description);
  };

  render() {
    const style = {
      border: "1px solid lavender",
      padding: "1rem",
      margin: "1rem"
    };

    return (
      <div onClick={this.handleClick} style={style}>
        <img src={this.props.video.snippet.thumbnails.default.url} />
        <h2>{this.props.video.snippet.title}</h2>
        <p>{this.props.video.snippet.description}</p>
      </div>
    );
  }
}

export default Tile;
