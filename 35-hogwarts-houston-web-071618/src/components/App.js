import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import PigPen from './PigPen'
//import Filters from './Filters'
//import hogs from '../porkers_data'

class App extends Component {

  state = {
    hogs: [],
    isLoading: true
  }

  componentDidMount(){
    setTimeout( () => {
      fetch('http://localhost:3000/hogs')
      .then(result => result.json())
      .then(hogs => this.setState( { hogs, isLoading: false } ))
    }, 5000)
  }

  render() {
    return (
      <div className="App">
          < Nav />
          {this.state.isLoading ?
            <h1>Loading</h1>
            : <PigPen hogs={this.state.hogs} />
          }
      </div>
    )
  }



}

export default App;
