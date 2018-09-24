import React, { Component } from "react";

class Search extends Component {
  // constructor() {
  //   super();
  //
  //   this.state = {
  //     searchTerm: ""
  //   };
  // }

  state = {
    searchTerm: ""
  };

  handleInputChange = e => {
    this.setState({
      searchTerm: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleSearch(this.state.searchTerm);
  };

  render() {
    const style = { border: "1px solid cyan", padding: "1rem", margin: "1rem" };

    return (
      <form style={style} onSubmit={this.handleSubmit}>
        <input onChange={this.handleInputChange} placeholder="Search term" />
        <input type="submit" value="Search" />
      </form>
    );
  }
}

export default Search;
