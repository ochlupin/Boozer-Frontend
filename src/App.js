import React, { Component } from "react";
import "./App.css";
import CocktailsContainer from "./containers/CocktailsContainer";

// App Component is responsible for:
// 1. Rendering CocktailsContainer component
// 2. Own and handle state
// 3. Fetch from backend API

class App extends Component {
  state = {
    cocktails: []
  };

  componentDidMount() {}

  render() {
    return (
      <div>
        <CocktailsContainer />
      </div>
    );
  }
}

export default App;
