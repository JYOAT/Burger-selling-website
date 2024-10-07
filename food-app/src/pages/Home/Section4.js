
import { Container, Row, Col } from "react-bootstrap";
import PromotionImage from "../../Assets/Food_Assets/assets/promotion/pro.png";

import React, { useState } from 'react';


// Available ingredients with prices
const ingredients = [
  { name: 'Lettuce', price: 20 },
  { name: 'Tomato', price: 30 },
  { name: 'Cheese', price: 25 },
  { name: 'Non-veg Patty', price: 70 },
  { name: 'Veg patty', price: 50 },
  { name: 'Onion', price: 35 },
  { name: 'Pickles', price: 30 },
];

const BurgerCustomizer = () => {
  // State to hold selected ingredients and total price
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  // Toggle ingredient (add/remove) and update price
  const toggleIngredient = (index) => {
    const ingredient = ingredients[index];

    setSelectedIngredients((prevSelected) => {
      if (prevSelected.find(i => i.name === ingredient.name)) {
        // Remove the ingredient if it's already selected
        setTotalPrice((prevTotal) => prevTotal - ingredient.price);
        return prevSelected.filter(i => i.name !== ingredient.name);
      } else {
        // Add the ingredient if it's not selected
        setTotalPrice((prevTotal) => prevTotal + ingredient.price);
        return [...prevSelected, ingredient];
      }
    });
  };

  return (
    <div className="container py-5">
      <h2 className="display-4 mb-4 text-center bg-warning">Customize Your Burger</h2>

      {/* List of Available Ingredients */}
      <ul id="ingredient-list" className="row mb-4">
        {ingredients.map((ingredient, index) => (
          <li
            key={index}
            className={`col-6 col-md-4 mb-3 p-3 border rounded text-center 
              ${selectedIngredients.find(i => i.name === ingredient.name) ? 'bg-success text-white' : 'bg-light'} 
              cursor-pointer`}
            onClick={() => toggleIngredient(index)}
          >
            <span className="d-block font-weight-bold">{ingredient.name}</span>
            <span className="d-block text-muted">rps {ingredient.price.toFixed(2)}</span>
          </li>
        ))}
      </ul>

      {/* List of Selected Ingredients */}
      <h3 className="h4 mb-3">Your Burger Ingredients:</h3>
      <ul id="selected-ingredients" className="list-group mb-4">
        {selectedIngredients.length === 0 ? (
          <li className="list-group-item text-muted">No ingredients selected</li>
        ) : (
          selectedIngredients.map((ingredient, index) => (
            <li key={index} className="list-group-item">
              {ingredient.name} - rupees {ingredient.price.toFixed(2)}
            </li>
          ))
        )}
      </ul>

      {/* Display Total Price */}
      <h3 className="h5 font-weight-bold bg-danger">Total Price: Rupees {totalPrice.toFixed(2)}</h3>
    </div>
  );
};

export default BurgerCustomizer;



