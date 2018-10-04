import  React, { Component } from 'react'
import Food from './Food.js'

function FoodList(props){
    return (
        <ul>
        {props.entrees.map( (entree, index) => (
            <Food key={index} entree={entree} upVote={props.upVote} downVote={props.downVote} />
        ))}
        </ul>
    )
}

export default FoodList