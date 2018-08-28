# Functional JavaScript

Functional programming in JavaScript consists of describing your program as the evaluation of functions that **avoids changing state** and **avoids mutating data**.

## Objectives
* Function _declaration_ v function _expression_
* Identify functions as objects
  * Assign functions to variables
  * Pass functions as arguments to functions
* Pure functions
  * Return value is always same for same inputs
  * No side effects (no mutating variables, I/O)
* Write higher-order functions
  * Callbacks v blocks in Ruby
  * Return functions inside functions
  * Write and pass callbacks
* Explain what an IIFE is and why one might use it
* Closure
  * Create closures by returning functions
  * Use closures to create private variables
* Demonstrate arrow function syntax

## Exercises

### Exercise 1 – Higher Order Functions
Create a `myMap` function that takes an array and a callback as an argument. Return a new array with each element from the previous array with that callback applied.

### Exercise 2 – Closures
Create a `complaintFactory` function that returns a constructor function that takes in a complaint as a string and creates an object with a `complaint` key and a unique ID.

## Sample Code

### Defining functions

```js
// function declaration
function declaredFunction() {}

// function expression
const expressedFn = function() {}
(function expressedFn() {})()
[1,2,3].map(function expressedFn() {})
```

### Functions as objects

```js
// can assign functions to variables
const expressedFn = function() {}

// can pass functions as arguments to other functions
[1,2,3].map(function expressedFn() {})

// can access properties of functions
function Park() {}
console.log(Park.prototype); // => {}

// can set properties of functions
function Pit() {}
Pit.prototype.fillIn = function() {}
```


### Callbacks with `map`
```ruby
# using a callback in Ruby with Array#map
foods = ["potato", "corn", "rice"]
cook = lambda { |food| return "cooked #{food}" }
cooked_foods = foods.map(&cook)
```

```js
// using a callback in JavaScript with Array.prototype.map
const foods = ["potato", "corn", "rice"]
function cook(food) { return `cooked ${food}` }
const cooked_foods = foods.map(cook)
```

### Callbacks with `select`
```ruby
# using a callback in Ruby with Array#map
foods = [
  {name: "potato", type: "root"},
  {name: "corn", type: "grain"},
  {name: "rice", type: "grain"}
]
find_grains = lambda { |food| return food[:type] === "grain" }
grains = foods.select(&find_grains)
```

```js
// using a callback in JavaScript with Array.prototype.map
const foods = [
  {name: "potato", type: "root"},
  {name: "corn", type: "grain"},
  {name: "rice", type: "grain"}
]
function findGrains(food) { return food.type === "grain" }
const grains = foods.filter(findGrains)
```

### IIFE (Immediately Invoked Function _Expression_)
```js
// called **only once** during duration of program
// usually created to do some setup
(function tvShowTitleSequence(title, actors) {
  console.log(title);
  actors.forEach(console.log)
})('parks and rec', [
  'amy poehler',
  'aziz ansari',
  'aubrey plaza',
  'nick offerman'
])
```

### Closures
```js
// plain closure
function outerFn(firstNumber) {
  return function innerFn(secondNumber) {
    return firstNumber + secondNumber
  }
}

const adder = outerFn // just reassigning for an easier name
const numberOneAdder = adder(1)
numberOneAdder(2) // => 3
numberOneAdder(222) // => 223

const number = adder(5)(2) // 7

// closure for private variables
function cakeEater() {
  let numOfCakes = 0

  return {
    eatCake: function() { numOfCakes += 1; return 'another cake eaten' },
    cakeCount: function() { return numOfCakes; }
  }
}
```
