import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'

class SignIn extends Component {
  render() {
    if(this.props.jwt) return (
        <Redirect
            to={{
                pathname: "/food-list",
                state: { from: this.props.location }
            }}
        />
    )
    return (
    <div>
        <h1>Sign In</h1>
        <div>
            <label>Pandaname:</label>
            <input onChange={e => this.props.updateCurrentPanda({ username: e.target.value })} type="text"/>
        </div>
        <div>
            <label>Password: </label>
            <input onChange={e => this.props.updateCurrentPanda({ password: e.target.value })} type="password" />
        </div>
        <button onClick={this.props.loginPanda} >Submit</button>
    </div>
    );
  }
}

const mapStateToProps = ( state ) => {
    return {
        jwt: state.jwt
    }
}

const mapDispatchToProps = ( dispatch ) => {
    return {

        updateCurrentPanda(pandaAttributes){
            dispatch({
                type: 'UPDATE_CURRENT_PANDA',
                payload: pandaAttributes
            })
        },

        loginPanda(){
            dispatch({
                type: 'ATTEMPT_TO_LOGIN_PANDA'
            })
        } 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);