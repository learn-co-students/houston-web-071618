import React from "react";

import Pet from "./Pet";

const PetBrowser = ({ filteredPets, filteredAdoptedPets }) => {
  return (
    <div className="ui cards">
      <Pet />
    </div>
  );
};

// const PetBrowser = props => {
//   const filteredPets = props.filteredPets;
//   const filteredAdoptedPets = props.filteredAdoptedPets;
//
//   return (
//     <div className="ui cards">
//       <Pet />
//     </div>
//   );
// };

// class PetBrowser extends React.Component {
//   render() {
//     return <div className="ui cards">PET COMPONENT SHOULD GO HERE</div>;
//   }
// }

export default PetBrowser;
