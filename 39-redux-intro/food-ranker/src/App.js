import React, { Component } from 'react';
import FoodList from './components/FoodList.js'

import { connect } from 'react-redux'
import NewFoodForm from './components/NewFoodForm.js';

class App extends Component {
  render() {
    return (
      <div>
        <FoodList entrees={this.props.entrees} 
          upVote={this.props.upVote}
          downVote={this.props.downVote} 
        ></FoodList>
        <NewFoodForm />
      </div>
      
    );
  }
}

const mapStateToProps = function(state){
  return {
    entrees: state.entrees
  }
}

const mapDispatchToProps = function(dispatch){
  return {
    upVote: entree => {
      dispatch({ type: 'UPVOTE', payload: entree})
    },
    downVote: entree => {
      dispatch({ type: 'DOWNVOTE', payload: entree})
    }
  }
}

const generateReduxApp = connect(mapStateToProps, mapDispatchToProps)

const ReduxApp = generateReduxApp(App)

export default ReduxApp;

//export default connect(mapStateToProps, mapDispatchToProps)(App)
