import React from "react";

// Cocktail component:
// 1. Renders a cocktail name, which is a clickable link

const Cocktail = props => {
  //   console.log("In Cocktail, props are:", props);
  const handleClickCocktail = props.handleClickCocktail;
  const { name, id } = props.cocktail;
  return (
    <li>
      <a onClick={() => handleClickCocktail(id)}>{name}</a>
    </li>
  );
};

export default Cocktail;
