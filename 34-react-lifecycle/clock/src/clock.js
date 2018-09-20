import React, { Component, Fragment } from "react";

import InnerClock from "./innerclock";

class Clock extends Component {
  constructor() {
    super();
    console.log("Clock component: constructed");
  }

  componentDidMount() {
    console.log("Clock component: mounted");
  }

  componentDidUpdate() {
    // console.log("Clock component: updated from props");
  }

  componentWillUnmount() {
    console.log("Clock component: unmounting");
    clearInterval(this.props.intervalId);
  }

  render() {
    // console.log("Clock component: rendered");
    return (
      <Fragment>
        <p>{this.props.currentTime}</p>
        <InnerClock />
      </Fragment>
    );
  }
}

export default Clock;
