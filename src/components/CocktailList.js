import React from "react";
import Cocktail from "./Cocktail";
// import CocktailDetail from "./CocktailDetail";

// CocktailList component:
// 1. Receives cocktails as props
// 2. Maps over the array and renders individual Cocktail component
//

const CocktailList = props => {
  console.log("In CocktalList, props are:", props.cocktails);
  const cocktails = props.cocktails;
  const handleClickCocktail = props.handleClickCocktail;

  return (
    <div>
      {cocktails.map(cocktail => (
        <Cocktail
          key={cocktail.id}
          cocktail={cocktail}
          handleClickCocktail={handleClickCocktail}
        />
      ))}
    </div>
  );
};

export default CocktailList;

// return (
//   <div>
//     {cocktails.map(cocktail => (
//       <CocktailDetail
//         key={cocktail.id}
//         cocktail={cocktail}
//         toggleCocktail={props.toggleCocktail}
//       />
//     ))}
//   </div>
// );
