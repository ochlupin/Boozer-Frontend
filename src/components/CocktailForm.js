import React from "react";
import {
  Button,
  Checkbox,
  Form,
  Input,
  Radio,
  Select,
  TextArea
} from "semantic-ui-react";

const CocktailForm = () => {
  return (
    <div>
      <h3>Create a Cocktail</h3>
      <Form>
        <Form.Group widths="equal">
          <Form.Field control={Input} label="Name" placeholder="Name" /> <br />
          <Form.Field
            control={TextArea}
            label="Description"
            placeholder="Description"
          />
          <Form.Field
            control={TextArea}
            label="Instructions"
            placeholder="Instructions"
          />
        </Form.Group>
        <h4>Proportions</h4>
        <Form.Group widths="equal">
          <Form.Field
            control={Input}
            label="Ingredient Name"
            placeholder=" IngredientName"
          />
          <Form.Field
            control={Input}
            label="Quantity"
            placeholder=" Quantity"
          />
          <Form.Field />
        </Form.Group>
        <Form.Field control={Button}>Create Cocktail</Form.Field>
      </Form>
    </div>
  );
};

export default CocktailForm;
