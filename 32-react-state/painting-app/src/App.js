import React, { Component } from "react";
import Header from "./Header";
import PaintingList from "./PaintingList";
import paintings from "./paintings";

// class-based
// class App extends Component {
//   render() {
//     return (
//       <div>
//         <Header />
//         <PaintingList paintings={paintings} />
//       </div>
//     );
//   }
// }

// functional
const App = props => {
  return (
    <div>
      <Header />
      <PaintingList paintings={paintings} />
    </div>
  );
};

// import Something from 'thisFile'
export default App;
