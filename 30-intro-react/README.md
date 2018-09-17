# Intro to React

## Mod 4 Expectations

Congrats to everyone! You have now been exposed to all the skills needed to call yourselves junior full-stack developers.

### Learning Cycle

![Learning Cycle][learning-cycle]

- At the start, you don't what the road to knowledge looks like.
- Then you now know what the road looks like, and subsequently you know you're rather far from your end-goal.
- Next, you get to the goal via the road and acknowledge an increase in knowledge along the way.
- Finally, you know you have gotten to the goal when you have moved on to other roads!

Think about what it took to learn how to drive a car...

And take pride in your conscious incompetence because it means you are on the way to your conscious competence!

### Emotional Journey

Where are you now in this journey? What did this look like for JavaScript?

![The Emotional Journey of Creating Anything Great][emotional-journey]

### Personal Empowerment

We want to empower you to take control of your own learning. This means learning to teach yourself how to approach new topics, debug, and find the answers to conceptual questions.

Instructors will start to steer you towards resources that answer your questions for this reason. We aren’t avoiding the question we want to see if you can read documentation and do research. These are the skills you will need in your first job.

- Read the Error
- Google the Problem
- Ask a Neighbor
- Ask an Instructor

## React

### Module Overview

### Learning Objectives Today

- Understand build tools and show how webpack works
- Use historical context and the Mod 3 experience to explain why React and declarative programming is special
- Start to understand the Virtual DOM
- See what a React Component actually is (an object, made by a class or function)
- Build custom components and see initial JSX

### What was hard about Mod 3?

- State Management (REACT!)
- DOM Manipulation (REACT!)
- Events (REACT!)
- ~scoping~
- ~callbacks~
- ~prototypes~
- ~this keyword~
- ~Fetch syntax~
- ~Async~

### Brief History/Context

React is made by Facebook. I like to point out that if anyone's ever heard about the licensing thing (i.e. you can't build an app that competes with FB in React) that's no longer true and React uses the MIT open source license. There are two libraries react, react-dom, this is to divide up the functionality and enables react-native, react-vr, etc.

### React without Webpack

Simply load the React files into your HTML file. This will always work and works fine for simple applications.

```js
ReactDOM.render(
  React.createElement("h1", {}, "hello"),
  document.getElementById("main")
);
```

### Virtual DOM

What does `React.createElement("h1", {}, "hello")` return?

What is the DOM? What is the Virtual DOM?

### EXERCISE: NavBar

**Write a function called Navbar to be used like this:**

```jsx
const Navbar = props => {
  // ...
};

ReactDOM.render(
  Navbar({
    title: "ZooKeepr",
    icon: "paw",
    color: "green",
    description: "keep track of your animals"
  }),
  document.getElementById("main")
);
```

**and render the following HTML:**

```html
<div class="ui inverted orange menu">
  <a class='item'>
    <h2 class="ui header">
      <i class="paw icon"></i>
      <div class="content">
        ZooKeepr
      </div>
      <div class="sub header">
        Keep track of your animals
      </div>
    </h2>
  </a>
</div>
```

### JSX

What does it do for us?

[learning-cycle]: https://user-images.githubusercontent.com/20468684/44881320-33845480-ac7d-11e8-8a69-5e30c51ebfd9.jpg
[emotional-journey]: https://camo.githubusercontent.com/ac906958051e330bbbb3a0e29ecd01b26d7c5bdb/68747470733a2f2f692e696d6775722e636f6d2f5834515235656e2e706e67
