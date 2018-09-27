import React from "react";

import Pet from "./Pet";

const PetBrowser = ({ filteredPets, filteredAdoptedPets, adoptPet }) => {
  return (
    <div className="ui cards">
      {filteredPets.map(pet => {
        const isAdopted = filteredAdoptedPets.includes(pet);
        return (
          <Pet
            key={pet.id}
            adoptPet={adoptPet}
            isReallyAdopted={isAdopted}
            {...pet}
          />
        );
      })}
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
