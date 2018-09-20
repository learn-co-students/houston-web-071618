import React, { Component } from "react";

class InnerClock extends Component {
  constructor() {
    super();
    console.log("InnerClock component: constructed");
  }

  componentDidMount() {
    console.log("InnerClock component: mounted");
  }

  render() {
    // console.log("InnerClock component: rendered");
    return <div className="InnerClock">This is a inner clock</div>;
  }
}

export default InnerClock;
