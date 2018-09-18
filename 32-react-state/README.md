# React State

## Student Exercise (15m)

Recreate this app using `create-react-app` to get started:

![](https://camo.githubusercontent.com/5df57bde30bed0fe8d370ba59001f64baaf3639d/687474703a2f2f672e7265636f726469742e636f2f586f544c7068314851492e676966)

Then change your code to make sure that no user can type the letter 'x'

![](https://camo.githubusercontent.com/b325a2f24632bf2e1b52ca7fbbfa7fe9b02c9348/687474703a2f2f672e7265636f726469742e636f2f5861424e586d375673562e676966)

## Objectives

- Explain the difference between imperative and declarative programming
- Differentiate between functional and class-based components
- Instantiate state in and out of the constructor
- Trigger rerenders by calling setState
- Manipulate the DOM by changing values in state
- Create event handler callbacks that manipulate state
- Write fully controlled forms

### Imperative v Declarative Programming

- Imperative Programming
  _ Explicitly tell your program every step it needs to execute
  _ In Vanilla JS, this looks like the following when an event listener triggers
  1.  Find or create the relevant DOM elements
  2.  Programatically read and/or update attributes of DOM elements
  3.  Append/remove DOM elements

* Declarative programming
  - Program acts as a sort of template that automatically updates itself in response to changes in certain internal values
  * JSX is your template that automatically responds to changes to its internal values. But what values is it responding to?

### Types of components

- There are 2 distinctions for components that are mostly overlapping, but slightly different
- Class vs Functional Components
  - This difference is focused more on syntax and is pretty self-explanatory: class components use class syntax and functional components are just functions that return JSX
- Container(Smart) vs Presentational(Dumb) Components
  - Containers contain most of the programming logic and/or are used to manage state. As they often need state and component lifecycle methods, containers are usually class components, though it is entirely possible to write a container component as a functional component, as in cases where the container needs a lot of logic, but makes no use of state
  - Presentational components contain little-to-no logic and are typically almost entirely dependent on their parent components for the data they use to display
  - Because of the way information trickles down from parent to child in a component hierarchy via props, fewer, more centralized sources of data and functionality are much more manageable at scale

### What is state? How do I get it?

- State is a special attribute of an instance of a component and is typically accessed inside of a component by running `this.state`. Other attributes can be created for a component (e.g. `this.beef = "steak"`), but the name `state` is special
- State is just an object containing key-value pairs
- Component must be a _class_ component in order to make use of state
- It is a reflection of the current state of a component (e.g. is this card currently flipped? should I render component X or component Y? what data am I currently carrying?)
- Can be initialized in and out of the `constructor`

  ```jsx
  class MyComp extends React.Component {
    constructor() {
      super();
      this.state = {
        color: "red"
      };
    }

    // Or simply in the body of the class...
    state = {
      color: "red"
    };

    render() {
      return (
        <div style={{ color: this.state.color }}>
          The colors Duke, the colors!
        </div>
      );
    }
  }
  ```

### Using State

- State represents the paradigm shift of moving from imperative to declartive programming - whenever a problem requires some sort of DOM manipulation, the thought process should shift from obtaining/creating DOM elements to manipulating state and making your template (the JSX in `render`) depend on the values of state
- `setState`
  _ Changing the state object by ordinary assignment does nothing - mutating state directly will change the object's values, but the problem is that the `render` function of our component is not called, so the DOM will not respond to these changes
  _ We use `setState` because in addition to changing the object, `setState` will call the `render` function, this time using the newly updated state values
  - Gotchas
  - Changing state is asynchronous. `console.log` the state value that was supposed to be set below `setState`
  - `setState` takes 2 arguments: 1. Either an object or a callback that accepts a parameter of the previous state and returns an object 2. A callback that can be called whenever `setState` is finished updating state and rerendering -`setState` does a shallow comparison, meaning that even without spreading or copying state, only the properties that are specified in the object received by `setState` are changed while the others remain intact. However, this is only true for that first layer of properties: nested objects will have their values overwritten
- A simple example would be to write a ternary in `render` that depends on a boolean and switches between two texts "off" and "on"

      	```jsx
      	class MyComp extends React.Component {
      			state = {
      				on: true
      			}

      			handleClick = (event) => {
      				this.setState({
      					on: !this.state.on
      				})
      			}

      			render(){
      				return <p onClick={this.handleClick}>{this.state.on ? "on" : "off"}</p>
      			}
      		}
      	```

- If you want to wait before showing them an event handling, you can just write a `setTimeout` inside `render` that updates state
- Ask them to come up with something simple of their own and build through it with the class

### Writing Events

- [List](https://reactjs.org/docs/events.html)
- Only attachable to built-in components
- Students should be able to draw on their knowledge of how to use events in JS
  _ Come up with a feature (e.g. toggle, Konami code) and ask the class how they would have handled that in Vanilla JS
  _ They should mention that when the event handler is triggered, a DOM element must be found/created before updating/appending it to the DOM
  - Event triggering is the same, the difference is that rather than manually finding and editing DOM nodes, we will eventually call `setState` and let changes to state generate the desired DOM changes
- Event handler callbacks should be written as arrow functions to avoid losing context

### Controlling Forms

- Form submission in Vanilla JS involves obtaining user input by manually grabbing the desired input elements and obtaining their the values of their `value` attributes
- We still want access to user input in React, but if we do not access the DOM directly, how can make user input accessible to us?
- Controlled inputs
