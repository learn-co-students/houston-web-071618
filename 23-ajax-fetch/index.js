// // Postman demo

// XMLHttpRequest

const request = new XMLHttpRequest();

request.open("get", "http://localhost:3002/students");

request.send();

request.response;

// // fetch
// // callbacks vs. promises vs. generators vs. async/await
// // https://gist.github.com/juanmaguitar/99a8e5d0487095995afaa43a32d8f512

// fetch("http://localhost:3000/students")
//   .then(r => r.json())
//   .then(json => console.log(json));

// fetch("http://localhost:3000/students", {
//   method: "post",
//   headers: {
//     "Content-Type": "application/json"
//   },
//   body: JSON.stringify({
//     student: {
//       name: "Suzy",
//       awesomeness: 293874
//     }
//   })
// })
//   .then(response => response.json())
//   .then(json => console.log(json));

// bigArray = [1, 2, 3];

// console.log("Before");
// setTimeout(() => {
//   bigArray.forEach(item => {
//     console.log(item);
//   });
// }, 3000);
// console.log("After");
