import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

class SignUp extends Component {
  render() {
    return (
    <div>
        <h1>Sign Up</h1>
        <div>
            <label>Pandaname:</label>
            <input onChange={e => this.props.updateNewPanda({ username: e.target.value })} type="text"/>
        </div>
        <div>
            <label>Password: </label>
            <input onChange={e => this.props.updateNewPanda({ password: e.target.value })} type="password" />
        </div>
        <button onClick={this.props.createPanda} >Submit</button>
        <br />
        <Link to="/sign-in">Sign In</Link>
    </div>
    );
  }
}

const mapStateToProps = ( state ) => {
    return {

    }
}

const mapDispatchToProps = ( dispatch ) => {
    return {

        updateNewPanda(pandaAttributes){
            dispatch({
                type: 'UPDATE_NEW_PANDA',
                payload: pandaAttributes
            })
        },

        createPanda(){
            dispatch({
                type: 'CREATE_NEW_PANDA'
            })
        } 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);