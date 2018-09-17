/* <div class="ui inverted orange menu">
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
</div> */

const Navbar = props => {
  return React.createElement(
    "div",
    { className: props.color },
    React.createElement(
      "a",
      {},
      React.createElement("h2", {}, [
        React.createElement("i", {}, props.icon),
        React.createElement("div", {}, props.title),
        React.createElement("div", {}, props.description)
      ])
    )
  );
};

// const Navbar = props => {
//   return (
//     <div>
//       <a>
//         <h2>
//           <i>{props.icon}</i>
//           <div>{props.title}</div>
//           <div>{props.description}</div>
//         </h2>
//       </a>
//     </div>
//   );

// return React.createElement("div", {},
//   React.createElement("a", {},
//     React.createElement("h2", {}, [
//       React.createElement("i", {}, props.icon),
//       React.createElement("div", {}, props.title),
//       React.createElement("div", {}, props.description)
//     ])
//   )
// )
// };

ReactDOM.render(
  Navbar({
    title: "ZooKeepr",
    icon: "paw",
    color: "green",
    description: "keep track of your animals"
  }),
  document.getElementById("main")
);
