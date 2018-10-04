import  React, { Component } from 'react'
import { connect } from 'react-redux'


function NewFoodForm(props){
    //return <div>When I'm fully grown I shall be a glorious form</div>
    return (
        <div>
            <label>Name:</label>
            <input onChange={props.updateFoodFormName} type="text" />
            <button onClick={props.addFood}>Add Food</button>
        </div>
    )
}

const mapStateToProps = function(state){
    return {
        
    }
}

const mapDispatchToProps = {
    updateFoodFormName: e => {
        return { type: 'UPDATE_FOOD_FORM_NAME', payload: e.target.value }
    },
    addFood: e => {
        return { type: 'ADD_FOOD' }
    }
}
  
// const mapDispatchToProps = function(dispatch){
//     return {
//         updateFoodFormName: e => {
//             dispatch({ type: 'UPDATE_FOOD_FORM_NAME', payload: e.target.value })
//         },
//         addFood: e => {
//             dispatch({ type: 'ADD_FOOD' })
//         }
//     }
// }

export default connect(mapStateToProps, mapDispatchToProps)(NewFoodForm)