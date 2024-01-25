import React, { Component } from 'react';
import './App.css';
import { milkTeaFlavors, fruitTeaFlavors, fruitLemonadeFlavors, smoothieFlavors, randomButtonDrinks, toppings } from './data';
{/*import DrinkCategories from "./Modules/DrinkCategories";
import Topping from './Modules/Topping';
import CustomizedDrink from './Modules/CustomizedDrink';
import RandomDrink from './Modules/RandomDrink';
import DrinkResult from './Modules/DrinkResult';*/}

class App extends Component {

  state = {
    flavor: "",
    randomTopping: "",
    chosenTopping: "",
    chosenDrinkCategoryFlavor: "",
  };


generateRandomFlavor = () => {
  let randomIndex = Math.floor(Math.random() * randomButtonDrinks.length);
  let newFlavor = randomButtonDrinks[randomIndex];
  this.setState({ flavor: newFlavor });
  this.generateTopping();
};

generateTopping = () => {
  let randomIndex = Math.floor(Math.random() * toppings.length);
  let newTopping = toppings[randomIndex];
  this.setState({ randomTopping: newTopping });
};


grabDrinkCategoryFlavor = (event) => {
  if (event.target.value = "milk tea") {
    let randomIndex = Math.floor(Math.random * milkTeaFlavors.length)
    let milkTeaFlavor = milkTeaFlavors[randomIndex]
    this.setState({ chosenDrinkCategoryFlavor: milkTeaFlavor })
  }
  if (event.target.value = "fruit tea") {
    let randomIndex = Math.floor(Math.random * fruitTeaFlavors.length)
    let fruitTeaFlavor = fruitTeaFlavors[randomIndex]
    this.setState({ chosenDrinkCategoryFlavor: fruitTeaFlavor })
  }
  if (event.target.value = "fruit lemonade") {
    let randomIndex = Math.floor(Math.random * fruitLemonadeFlavors.length)
    let fruitLemonadeFlavor = fruitLemonadeFlavors[randomIndex]
    this.setState({ chosenDrinkCategoryFlavor: fruitLemonadeFlavor })
  }
  if (event.target.value = "smoothie") {
    let randomIndex = Math.floor(Math.random * smoothieFlavors.length)
    let smoothieFlavor = smoothieFlavors[randomIndex]
    this.setState({ chosenDrinkCategoryFlavor: smoothieFlavor })
  }
  //whatever the event.target.value is, you want to refrence that array
};

/*addTopping = (event) => {
  if (event.target.value = "NO") {
    this.setState({ chosenTopping: "No Topping" })
  }
  if (event.target.value = "YES") {
    this.generateTopping()
  }
};*/

//the customized button could be an unhide button!



render() {
  return (
    <div className="App" >
      <h1>Boba Generator🧋</h1>
      <h2>Give Some Prefrences to Make a Drink</h2>
      <h3>Choose a Drink Category</h3>
      <select className="drink-categories" onChange={this.grabDrinkCategoryFlavor}>
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
      <p>{this.state.chosenDrinkCategoryFlavor}</p>
      <button class="customized-drink-button">Generate a Boba Drink!</button>
      <h3>OR</h3>
      <button class="random-drink-button" onClick={this.generateRandomFlavor}>Give Me A Random Drink!</button>
      <p className="drink-result">{this.state.flavor} : {this.state.randomTopping}</p>
    </div>
  );
};
};

export default App;
