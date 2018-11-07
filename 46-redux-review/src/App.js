import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from  'react-router-dom'
import Home from './Home.js'
import SignIn from './SignIn.js'
import FoodList from './FoodList.js'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/sign-in" component={SignIn} />
          <Route path="/food-list" component={FoodList} />
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
