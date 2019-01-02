import React from "react";
import { Card } from "semantic-ui-react";

// CocktailDetail component:
// 1. Renders single cocktail with details
// 2. Conditional render based on clicked prop

const CocktailDetail = props => {
  console.log("In CocktailDetail, props are: ", props);
  console.log(
    "In CocktailDetail, proportions are: ",
    props.selectedCocktail.proportions
  );
  const selectedCocktail = props.selectedCocktail;

  let proportions;

  if (selectedCocktail.proportions) {
    proportions = selectedCocktail.proportions.map(proportion => {
      return (
        <li>
          {proportion.amount}
          {proportion.ingredient_name}
        </li>
      );
    });
  }

  const { name, description, instructions, source } = selectedCocktail;

  return (
    <div>
      <Card>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>{source}</Card.Meta> <br />
        <Card.Description>{description}</Card.Description> <br />
        <Card.Description>{instructions}</Card.Description>
        <h4>Ingredients</h4>
        {proportions}
      </Card>
    </div>
  );
};

export default CocktailDetail;

// if (selectedCocktail) {
//   name = selectedCocktail.name;
//   description = selectedCocktail.description;
//   instructions = selectedCocktail.instructions;
//   source = selectedCocktail.source;
// }
