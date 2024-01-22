import React from 'react';
import './App.css';
import { milkTeaFlavors } from './data';
{/*import DrinkCategories from "./Modules/DrinkCategories";
import Topping from './Modules/Topping';
import CustomizedDrink from './Modules/CustomizedDrink';
import RandomDrink from './Modules/RandomDrink';
import DrinkResult from './Modules/DrinkResult';*/}

const App = () => {

  const milkteaFlavorGenerator = () => {
    let randomIndex = Math.floor(Math.random() * milkTeaFlavors.length);
    return milkTeaFlavors[randomIndex];
  };
  
  const milkTeaFlavor = milkteaFlavorGenerator(milkTeaFlavors)


  return (
    <div className="App">
      <h1>Boba Generator🧋</h1>
      <h2>Give Some Prefrences to Make a Drink</h2>
      <h3>Choose a Drink Category</h3>
      <select name="drink-categories" id="drink-categories">
        <option value="milk tea">Milk Tea</option>
        <option value="fruit tea">Fruit Tea</option>
        <option value="fruit lemonade">Fruit Lemonade</option>
        <option value="smoothie">Smoothie</option>
      </select>
      <h3>Would You like a topping?</h3>
      <form>
        <input type="radio" id="yes" name="topping_answer" value="YES"></input>
        <label for="YES">YES</label><br></br>
        <input type="radio" id="no" name="topping_answer" value="NO"></input>
        <label for="NO">NO</label><br></br>
      </form>
      <button class="customized-drink-button">Generate a Boba Drink!</button>
      <h3>OR</h3>
      <button class="random-drink-button" onClick={milkteaFlavorGenerator}>Give Me A Random Drink!</button>
      <p className="drink-result">{milkTeaFlavor}</p>
    </div>
  );

};

export default App;
