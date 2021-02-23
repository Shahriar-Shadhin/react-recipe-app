import React from 'react';
import style from './recipe.module.css';

const Recipe = ({ title, calories, image, ingredients }) => {
    return (
        <div className={style.recipe}>

            <h4>{title}</h4>
            <p><b>Calories:</b> {Math.round(calories)}</p>
            <img src={image} alt="" />
            <ol >
                {ingredients.map(ingredient => (
                    <li key={Math.random()}>{ingredient.text}</li>
                ))}
            </ol>

        </div>
    )
}

export default Recipe;