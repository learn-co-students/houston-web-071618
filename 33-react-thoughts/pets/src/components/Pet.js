import React from "react";

const Pet = ({
  id,
  name,
  sex,
  age,
  weight,
  type,
  adoptPet,
  isReallyAdopted
}) => {
  // const id = props.id
  // const name = props.name
  // const sex = props.sex
  // ...

  // let sexSymbol;
  // if (sex === "female") {
  //   sexSymbol = "♀";
  // } else {
  //   sexSymbol = "♂";
  // }

  let sexSymbol = sex === "male" ? "♂" : "♀";

  return (
    <div className="card">
      <div className="content">
        <a className="header">
          {name} {sexSymbol}
        </a>
        <div className="meta">
          <span className="date">{type}</span>
        </div>
        <div className="description">
          <p>Age: {age}</p>
          <p>Weight: {weight}</p>
        </div>
      </div>
      <div className="extra content">
        {isReallyAdopted ? (
          <button disabled={true} className="ui disabled button">
            Already adopted
          </button>
        ) : (
          <button
            className="ui primary button"
            onClick={e => {
              adoptPet(id);
            }}
          >
            Adopt pet
          </button>
        )}
      </div>
    </div>
  );
};

// class Pet extends React.Component {
//   render() {
//     return (
//       <div className="card">
//         <div className="content">
//           <a className="header">
//             {/*'♀' OR '♂' */}
//             PET NAME
//           </a>
//           <div className="meta">
//             <span className="date">PET TYPE</span>
//           </div>
//           <div className="description">
//             <p>Age: PET AGE</p>
//             <p>Weight: PET WEIGHT</p>
//           </div>
//         </div>
//         <div className="extra content">
//           <button disabled={true} className="ui disabled button">
//             Already adopted
//           </button>
//           <button className="ui primary button">Adopt pet</button>
//         </div>
//       </div>
//     );
//   }
// }

export default Pet;
