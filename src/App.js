import React, { Component } from "react";
import "./App.css";
import CocktailsContainer from "./containers/CocktailsContainer";

import { Header, Icon } from "semantic-ui-react";

// App Component is responsible for:
// 1. Render Header with title of Application
// 1. Rendering CocktailsContainer component

class App extends Component {
  render() {
    return (
      <div>
        <Header as="h1">
          BOOZER APP
          <Icon name="glass martini" size="large" />
        </Header>
        <CocktailsContainer />
      </div>
    );
  }
}

export default App;
