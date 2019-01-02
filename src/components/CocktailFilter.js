import React, { Component } from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";

export default class CocktailFilter extends Component {
  render() {
    return (
      <div className="filter">
        <Form>
          <Form.Field>
            <label htmlFor="cocktail-filter">Cocktail Filter: </label>
            <input
              onChange={this.props.updateSearchTerm}
              id="cocktail-filter"
              type="text"
              value={this.props.searchTerm}
            />
          </Form.Field>
        </Form>
      </div>
    );
  }
}
