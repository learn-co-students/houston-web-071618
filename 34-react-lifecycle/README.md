# React Lifecycle and Lifecycle Methods

## Objectives

- Understand when React lifecycle methods are called
  - **constructor**:
    - when the component is being created
  - **componentDidMount**:
    - after the first/initial render
    - use this for initial fetches
  - **componentDidUpdate**:
    - if you change the state / props
    - _BE CAREFUL_ if you call setState inside of here
  - **componentWillUnmount**:
    - if you take the component off of the page
    - clean up any timers / non-react event listeners / other stuff
  - **render**:
    - initially, and then after each update to state / props
    - NEVER call setState inside of here

## Steps

- App
  - constructor
  - render
  - componentDidMount
- Clock
  - constructor
  - render
  - componentDidMount
  - componentDidUpdate
  - componentWillUnmount

## Other Concepts

- conditional rendering
- setTimeout
- setInterval
- `https://uinames.com/api/`
- `https://api.adorable.io/avatars/285/:something.png`
- React.Fragment
- Loading views
