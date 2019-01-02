import React from "react";
import { Card } from "semantic-ui-react";

// CocktailDetail component:
// 1. Renders single cocktail with details
// 2. Conditional render based on clicked prop

const CocktailDetail = props => {
  console.log("In CocktailDetail, props are: ", props);
  const selectedCocktail = props.selectedCocktail;

  let name = "";
  let description = "";
  let instructions = "";
  let source = "";
  if (selectedCocktail) {
    name = selectedCocktail.name;
    description = selectedCocktail.description;
    instructions = selectedCocktail.instructions;
    source = selectedCocktail.source;
  }

  return (
    <Card>
      <Card.Header>{name}</Card.Header>
      <Card.Meta>{source}</Card.Meta> <br />
      <Card.Description>{description}</Card.Description> <br />
      <Card.Description>{instructions}</Card.Description>
    </Card>
  );
};

export default CocktailDetail;
