import React from "react";

const DrinkCategories = (props) => (
    <select onChange={props.flavorGenerator} className="drink-categories">
    <option value="none"> </option>
    <option value="milk tea">Milk Tea</option>
    <option value="fruit tea">Fruit Tea</option>
    <option value="fruit lemonade">Fruit Lemonade</option>
    <option value="smoothie">Smoothie</option>
  </select>
);

export default DrinkCategories;