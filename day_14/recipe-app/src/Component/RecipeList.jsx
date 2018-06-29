import React from 'react';
import Recipes from '../database/recipe';
import Recipe from './Recipe';
import './RecipeList.css';

const RecipeList = (props) => {
    const recipes = props.recipes.map((recipe, index) => (<Recipe key={recipe.id} {...recipe}/>))
    return (
        <div className="recipe-list">
            {recipes}
        </div>
    )
}

export default RecipeList;