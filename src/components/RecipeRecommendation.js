import React from 'react';

const RecipeRecommendation = ({ recipe }) => {
    return (
        <div className="recipe-recommendation">
            <h2>Recommended Recipe</h2>
            <p><strong>Spiciness Level:</strong> {recipe.spiciness}</p>
            <p><strong>Recommended Toppings:</strong> {recipe.toppings.join(', ')}</p>
            <h3>Cooking Instructions:</h3>
            <ol>
                {recipe.instructions.map((step, index) => (
                    <li key={index}>{step}</li>
                ))}
            </ol>
            <button onClick={() => alert('Order placed!')}>Order</button>
        </div>
    );
};

export default RecipeRecommendation;