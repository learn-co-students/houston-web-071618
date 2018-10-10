import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import BookContainer from "./BookContainer";
import BookList from "./BookList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BookContainer />
      </div>
    );
  }
}

export default App;
