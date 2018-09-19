import React from "react";

// const Filters = props => {
//   console.log(this.state);
//   return (
//     <div className="ui form">
//       <h3>Animal type</h3>
//       <div className="field">
//         <select
//           name="type"
//           id="type"
// onChange={e => {
// this.setState({
//   currentFilter: e.target.value
// });
// }}
//         >
//           <option value="all">All</option>
//           <option value="cat">Cats</option>
//           <option value="dog">Dogs</option>
//           <option value="micropig">Micropigs</option>
//         </select>
//       </div>
//
//       <div className="field">
//         <button
// onClick={e => {
//   console.log(e);
// }}
//           className="ui secondary button"
//         >
//           Find pets
//         </button>
//       </div>
//     </div>
//   );
// };

class Filters extends React.Component {
  state = {
    currentFilter: "all"
  };

  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select
            name="type"
            id="type"
            onChange={e => {
              this.setState({
                currentFilter: e.target.value
              });
            }}
          >
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button
            onClick={e => {
              this.props.updateFilter(this.state.currentFilter);
            }}
            className="ui secondary button"
          >
            Find pets
          </button>
        </div>
      </div>
    );
  }
}

export default Filters;
