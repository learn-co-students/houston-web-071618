import React, { Component } from 'react';
import { connect } from 'react-redux';

class FoodList extends Component {
  render() {
    return (
        <div>
            <h1>Foods</h1>
            <ul>
                {this.props.foods.map( food => (
                    <li>{food.name}</li>
                ))}
            </ul>
        </div>
    );
  }
}

const mapStateToProps = ( state ) => {
    return {
        foods: state.currentPanda.foods
    }
}

const mapDispatchToProps = ( dispatch ) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FoodList);