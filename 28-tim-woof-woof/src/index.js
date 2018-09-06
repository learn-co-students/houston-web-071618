// CLICK ON DOGS IN THE DOG BAR TO SEE MORE INFO ABOUT THE GOOD PUPPER
// MORE INFO INCLUDES A DOG PIC, A DOG NAME, AND A DOG BUTTON THAT INDICATES WHETHER IT IS A GOOD DOG OR A BAD DOG
// CLICK ON GOOD DOG/BAD DOG BUTTON IN ORDER TO TOGGLE PUP GOODNESS
// CLICK ON "FILTER GOOD DOGS" BUTTON IN ORDER TO JUST SEE GOOD DOGS OR SEE ALL DOGS IN DOG BAR

// STORE IN MEMORY
// const dogs = []

function updateDog(dogId, isGood) {
  return fetch(`http://localhost:3000/pups/${dogId}`, {
    	method: 'PATCH',
    	headers: {
    		'Content-Type': 'application/json'
    	},
    	body: JSON.stringify({
    		isGoodDog: isGood
    	})
    }).then(resp => resp.json())
}

function getDog(dogId) {
  return fetch(`http://localhost:3000/pups/${dogId}`)
	 .then(resp => resp.json())
}

function getAllDogs() {
  return fetch('http://localhost:3000/pups')
	 .then(resp => resp.json())

   // STORE IN MEMORY
   // .then(dogObjs => {
   //   dogs = dogObjs;
   //   return dogs
   // })
}

function appendDogNames(dogs) {
  //  iterate through each dog, put it in a span, add the name, append it to the dogbar
  dogs.forEach(appendDogName)
}

function appendDogName(dog) {
  // take all the dogs, find the dog-bar
  const dogBar = document.getElementById('dog-bar')

  // APPEND WAY!
  //Creating new tag --Span
  const dogSpan = document.createElement('span')
  //adding dog's name to span
  dogSpan.innerHTML = dog.name
  // add data-id to dog
  dogSpan.dataset.id = dog.id

  // THIS WILL WORK HERE!
  // dogSpan.addEventListener('click', function() {
  //   console.log(dog.id);
  // })

  //adding each dog to the span
  dogBar.append(dogSpan)

  // INNER HTML WAY!
  // const dogTemplate = `
  //   <span data-id="${dog.id}">
  //     ${dog.name}
  //   </span>
  // `
  // dogBar.innerHTML += dogTemplate
}

function handleDogSpanClick(event) {
  // if (event.target.tagName === "SPAN")
  if (event.target.dataset.id) {
    getDog(event.target.dataset.id)
      .then(renderDog)
  }
}

function renderDog(dog) {
  const dogInfo = document.querySelector("#dog-info")
  const buttonText = dog.isGoodDog ? "Good Dog!" : "Bad Dog!"

  const dogTemplate = `
    <img src="${dog.image}">
    <h2>${dog.name}</h2>
    <button data-id="${dog.id}">${buttonText}</button>
  `

  dogInfo.innerHTML = dogTemplate
}

document.addEventListener('DOMContentLoaded', function() {
  // EVENT DELEGATION
  // Bring event listener to top level
  // Add the event listener to the closest parent always on the page
  // Create a condition for the event
  const dogBar = document.getElementById('dog-bar')
  dogBar.addEventListener('click', handleDogSpanClick)
  getAllDogs().then(appendDogNames)

  const dogInfo = document.querySelector("#dog-info")
  dogInfo.addEventListener("click", function(event) {
    // OPTIMISTIC RENDERING
    // if (event.target.innerText === "Good Dog!" || event.target.innerText === "Bad Dog!")
    if (event.target.tagName === "BUTTON") {
      let isGood
      if (event.target.innerText === "Good Dog!") {
        event.target.innerText = "Bad Dog!"
        isGood = false
      } else {
        event.target.innerText = "Good Dog!"
        isGood = true
      }

      updateDog(event.target.dataset.id, isGood)
    }
  })

  dogInfo.addEventListener("click", function(event) {
    // PESSIMISTIC RENDERING
    // if (event.target.innerText === "Good Dog!" || event.target.innerText === "Bad Dog!")
    if (event.target.tagName === "BUTTON") {
      let isGood
      if (event.target.innerText === "Good Dog!") {
        isGood = false
      } else {
        isGood = true
      }

      updateDog(event.target.dataset.id, isGood)
        .then(dog => {
          renderDog(dog)
        })
    }
  })


  // const goodDogButton = document.querySelector('#dog-info button')
  // console.log(goodDogButton);
})
