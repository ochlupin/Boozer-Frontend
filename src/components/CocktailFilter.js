import React, { Component } from "react";

export default class CocktailFilter extends Component {
  render() {
    return (
      <div className="filter">
        <label htmlFor="cocktail-filter">Cocktail Filter: </label>
        <input
          onChange={this.props.updateSearchTerm}
          id="cocktail-filter"
          type="text"
          value={this.props.searchTerm}
        />
      </div>
    );
  }
}
