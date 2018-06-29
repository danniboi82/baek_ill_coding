import React, {Component} from 'react';
import './Recipe.css';

class Recipe extends Component {

    render() {
        const {title} = this.props;
        const ingredients = this
            .props
            .ingredients
            .map((ingredient, index) => <li key={index}>{ingredient}</li>)
        const {instruction, img} = this.props;
        return (
            <div className='recipe-card'>
                <div>
                    <img src={img} alt={title} className="recipe-card-img"/>
                </div>
                <div className="recipe-content">
                    <h3 className='recipe-title'>{title}</h3>
                    <h5>Ingredients :</h5>
                    <ul>
                        {ingredients}
                    </ul>
                    <h5>Instructions :</h5>
                    <p style={{
                        padding: '5px'
                    }}>{instruction}</p>
                </div>
            </div>
        )
    }
}

export default Recipe;