import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import * as serviceWorker from './serviceWorker';

const defaultState = {
    entrees: [
        {
            name: 'Biryani',
            votes: 0
        },
        {
            name: 'Chimichanga',
            votes: 0
        },
        {
            name: 'BBQ',
            votes: 0
        },
        {
            name: 'Pizza',
            votes: 0
        }
    ]
}

const reducer = function(currentState, action){
    const newState = { ...currentState }
    switch(action.type){
        case 'ADD_ENTREE':
            newState.entrees = [ ...newState.entrees, action.payload ]
        break
        case 'UPVOTE':
            var index= currentState.entrees.indexOf(action.payload)
            var newEntrees = [ ...currentState.entrees ]
            var currentElement = currentState.entrees[index]
            let newElement= { ...currentElement, votes: currentElement.votes + 1 }
            newEntrees[index] = newElement
            newState.entrees = newEntrees
        break
        case 'DOWNVOTE':
            let index= currentState.entrees.indexOf(action.payload)
            var newEntrees = [ ...currentState.entrees ]
            var currentElement = currentState.entrees[index]
            var newElement= { ...currentElement, votes: currentElement.votes - 1 }
            newEntrees[index] = newElement
            newState.entrees = newEntrees
        break
        case 'UPDATE_FOOD_FORM_NAME':
            newState.foodForm = { name: action.payload }
        break;
        case 'ADD_FOOD':
            newState.entrees = [ ...currentState.entrees, {
                name: currentState.foodForm.name,
                votes: 0
            }]
            
            // WRONG: 
            // .push( {
            //     name: currentState.foodForm.name,
            //     votes: 0
            // })
        break;
    }
    return newState
}

const store = createStore(
    reducer, 
    defaultState,  
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : undefined
)


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
