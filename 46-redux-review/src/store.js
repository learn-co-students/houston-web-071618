import { createStore } from 'redux'

let currentPanda;
try {
    currentPanda = JSON.parse(localStorage.currentPanda)
} catch(err) {
    currentPanda = {
        username: '',
        password: '',
        foods: []
    }
}

const defaultState = {
    jwt: localStorage.jwt || false,
    newPanda: {
        username: '',
        password: ''
    },
    currentPanda: currentPanda,
    selectedFood: {},
    newFood: {}
}

const reducer = (currentState = defaultState, action) => {
    const newState = { ...currentState}
    switch(action.type){
        case 'UPDATE_NEW_PANDA':
            newState.newPanda = { ...newState.newPanda, ...action.payload }
        break;
        case 'UPDATE_CURRENT_PANDA':
            newState.currentPanda = { ...newState.currentPanda, ...action.payload }
        break;
        case 'CREATE_NEW_PANDA':
            fetch('http://localhost:4000/pandas/', {
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newState.newPanda)
            })
                .then( resp => resp.json() )
                .then( payload => store.dispatch({ type: 'LOGIN_PANDA', payload: payload}) )
        break;
        case 'ATTEMPT_TO_LOGIN_PANDA':
            fetch('http://localhost:4000/auth/', {
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newState.currentPanda)
            })
                .then( resp => resp.json() )
                .then( payload => store.dispatch({ type: 'LOGIN_PANDA', payload: payload}) )
        break 
        case 'LOGIN_PANDA':
            newState.currentPanda = action.payload.panda
            newState.jwt = action.payload.jwt
            localStorage.setItem('currentPanda', JSON.stringify(newState.currentPanda))
            localStorage.setItem('jwt', newState.jwt)
        break
        case 'LOGOUT_PANDA':
            localStorage.clear()
            // localStorage.setItem('currentPanda', "")
        break
    }
    return newState
}

const store = createStore( reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export { store }