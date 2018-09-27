import React, { Component } from "react";
import Player from "./Player";
import TileList from "./TileList";
import Search from "./Search";

import keys from "../keys";

import { Route } from "react-router-dom";

class YouTubr extends Component {
  state = {
    currentVideo: {},
    searchResults: [],
    loaded: false
  };

  componentDidMount() {
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${
      keys.API_KEY
    }&q=&type=video`;

    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        const videos = data.items;
        this.setState({
          currentVideo: {
            id: videos[0].id.videoId,
            title: videos[0].snippet.title,
            description: videos[0].snippet.description
          },
          searchResults: videos,
          loaded: true
        });
      });
  }

  handleSearch = searchTerm => {
    // make the request
    //    then ... this.setState w/ results
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${
      keys.API_KEY
    }&q=${searchTerm}&type=video`;

    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        const videos = data.items;
        this.setState({
          searchResults: videos
        });
      });

    // using fat arrow binds `this` in THIS function to the component
  };

  handleUpdateVideo = (id, title, description) => {
    this.setState({
      // object property value shorthand, omit duplicate key-value declaration
      currentVideo: { id, title, description }
    });
  };

  render() {
    const style = { border: "1px solid blue", padding: "1rem", margin: "1rem" };

    if (!this.state.loaded) return <div>Loading...</div>;

    return (
      <div style={style}>
        <Route
          path="/youtubr/:searchterm"
          render={({ history, location, match }) => {
            console.log(match);
            return <div>Hello</div>;
          }}
        />

        <Search handleSearch={this.handleSearch} />
        <Player currentVideo={this.state.currentVideo} />
        <TileList
          searchResults={this.state.searchResults}
          handleUpdateVideo={this.handleUpdateVideo} // key value pair
        />
      </div>
    );
  }
}

export default YouTubr;
