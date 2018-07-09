import React, {Component} from 'react';
import './App.css';
import PropTypes from 'prop-types';
import Navbar from './Component/Navbar';
import RecipeList from './Component/RecipeList';
import Recipes from './database/recipe';
import RecipeInput from './Component/RecipeInput';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: Recipes,
      nextRecipeId: 7,
      showForm: false
    }
    this.handleSave = this
      .handleSave
      .bind(this);

  }

  handleSave = (recipe) => {
    console.log("Handlesave")
    this.setState((prevState, props) => {
      const newRecipe = {
        ...recipe,
        id: this.state.nextRecipeId
      };
      return {
        nextRecipeId: prevState.nextRecipeId + 1,
        recipes: [
          ...this.state.recipes,
          newRecipe
        ]
      }
    })
  }

  render() {
    const {showForm} = this.state;
    return (
      <div className="App">

        <Navbar clicked={() => this.setState({showForm: true})}/> {showForm
          ? <RecipeInput
              onSave={this.handleSave}
              onClose={() => this.setState({showForm: false})}/>
          : null
}
        {console.log(this.state.showForm)}
        <RecipeList recipes={this.state.recipes}/>
      </div>
    );
  }
}

// Recipes.propTypes = {   title: PropTypes.String }
export default App;
// {this   .props   .recipes   .map((r, index) => (<Recipe key={index}
// {...r}/>))}       <Recipe title='Pasta' ingredients={['flour', 'water']}
// instruction='Combine ground beef, onion, garlic, and green pepper in a large
// saucepan. Cook and stir until meat is brown and vegetables are tender. Drain
// grease. Stir diced tomatoes, tomato sauce, and tomato paste into the pan.
// Season with oregano, basil, salt, and pepper. Simmer spaghetti sauce for 1
// hour, stirring occasionally.'
// img='https://cdn5.norecipes.com/wp-content/uploads/2012/10/23052346/recipespa
// g hetti-meat-sauce-recipe.1024x1024-1.jpg'/>