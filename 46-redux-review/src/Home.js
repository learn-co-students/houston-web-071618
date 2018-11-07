import React, { Component } from 'react';
import { connect } from 'react-redux';
import SignUp from './SignUp.js'
import FoodList from './FoodList.js'

class Home extends Component {
  render() {
    return this.props.jwt ? <FoodList /> : <SignUp />
  }
}

const mapStateToProps = ( state ) => {
    return {
        jwt: state.jwt
    }
}

const mapDispatchToProps = ( dispatch ) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);