import React, { Component } from "react";

import Clock from "./clock";

class App extends Component {
  constructor() {
    super();
    console.log("App component: constructed");

    this.updateIntervalId = setInterval(() => {
      this.setState({
        time: new Date().toLocaleTimeString(),
        timesUpdated: this.state.timesUpdated + 1
      });
    }, 3000);

    this.state = {
      time: new Date().toLocaleTimeString(),
      timesUpdated: 0,
      loaded: false
    };
  }

  componentDidMount() {
    console.log("App component: mounted");

    fetch("https://uinames.com/api/")
      .then(resp => resp.json())
      .then(person => {
        this.setState({
          person: `${person.name} ${person.surname}`,
          loaded: true
        });
      });
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("App component: updated from state");

    // if (prevState.person && !prevState.person.includes("z")) {
    //   fetch("https://uinames.com/api/")
    //     .then(resp => resp.json())
    //     .then(person => {
    //       this.setState({
    //         person: `${person.name} ${person.surname}`
    //       });
    //     });
    // }
  }

  render() {
    // console.log("App component: rendered");

    if (!this.state.loaded) return <div>Loading...</div>;

    return (
      <div>
        <h1>Welcome, {this.state.person}!</h1>
        {this.state.timesUpdated < 5 ? (
          <Clock
            currentTime={this.state.time}
            intervalId={this.updateIntervalId}
          />
        ) : null}
      </div>
    );
  }
}

export default App;
