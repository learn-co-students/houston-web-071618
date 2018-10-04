import  React, { Component } from 'react'

function Food(props){
    return (
        <li>
            {props.entree.name} ({props.entree.votes}) 
            <button onClick={e => props.upVote(props.entree)}>Upvote</button>
            <button onClick={e => props.downVote(props.entree)}>Downvote</button>
        </li>
    )
}

export default Food