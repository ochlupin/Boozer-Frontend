import React from "react";

// import CocktailDetail from "../components/CocktailDetail";
import CocktailList from "../components/CocktailList";
import CocktailFilter from "../components/CocktailFilter";
import CocktailDetail from "../components/CocktailDetail";
import CocktailForm from "../components/CocktailForm";

// CocktailsContainer Component:
// 1. Fetch from backend
// 2. Holds and owns state
// 3. renders CocktailList component
// 4. renders CocktailFilter component
// 5. renders Cocktail Detail component

const cocktailsAPI = "http://localhost:5000/api/v1/cocktails";
const ingredientsAPI = "http://localhost:5000/api/v1/ingredients";

class CocktailsContainer extends React.Component {
  // STATE
  state = {
    cocktails: [],
    ingredients: [],
    selectedCocktail: "",
    searchTerm: ""
  };

  // LIFECYCLE METHODS
  componentDidMount() {
    this.fetchCocktails();
    this.fetchIngredients();
  }

  // CLASS METHODS
  fetchCocktails = () => {
    fetch(cocktailsAPI)
      .then(r => r.json())
      .then(cocktailData => {
        this.setState({ cocktails: cocktailData }, () => {
          console.log("The state in CocktailsContainer is: ", cocktailData);
        });
      });
  };

  fetchIngredients = () => {
    fetch(ingredientsAPI)
      .then(r => r.json())
      .then(ingredientData => {
        this.setState({ ingredients: ingredientData });
      });
  };

  handleClickCocktail = selectedCocktail => {
    fetch(`${cocktailsAPI}/${selectedCocktail}`)
      .then(r => r.json())
      .then(data => this.setState({ selectedCocktail: data }));

    // this.setState({ selectedCocktail: selectedCocktail }, () => {
    //   console.log("You selected this cocktail: ", this.selectedCocktail());
    // });
  };

  selectedCocktail = () =>
    this.state.cocktails.find(
      cocktail => cocktail.id === this.state.selectedCocktail
    );

  cocktailsToDisplay = () =>
    this.state.cocktails.filter(cocktail =>
      cocktail.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    );

  updateSearchTerm = event => {
    const searchTerm = event.target.value;
    console.log("Search term is: ", searchTerm);
    this.setState({ searchTerm: searchTerm });
  };

  // RENDER
  render() {
    const cocktails = this.cocktailsToDisplay();
    const searchTerm = this.state.searchTerm;
    const selectedCocktail = this.state.selectedCocktail;
    const updateSearchTerm = this.updateSearchTerm;
    const handleClickCocktail = this.handleClickCocktail;
    return (
      <div>
        <CocktailForm /> <br />
        <CocktailFilter
          updateSearchTerm={updateSearchTerm}
          searchTerm={searchTerm}
        />
        <br />
        <CocktailDetail selectedCocktail={selectedCocktail} />
        <CocktailList
          cocktails={cocktails}
          handleClickCocktail={handleClickCocktail}
        />
      </div>
    );
  }
}

export default CocktailsContainer;
