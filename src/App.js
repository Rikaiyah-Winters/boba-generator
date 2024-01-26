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
    chosenTopping: "",
    randomTopping: "",
    chosenFlavor: "",
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
  //the customized button could be an unhide button!

  chosenFlavor = (event) => {
    if (event.target.value === "milk tea") {
      let randomIndex = Math.floor(Math.random() * milkTeaFlavors.length);
      let milkTeaFlavor = milkTeaFlavors[randomIndex];
      this.setState({ chosenFlavor: milkTeaFlavor });
    }
    if (event.target.value === "fruit tea") {
      let randomIndex = Math.floor(Math.random() * fruitTeaFlavors.length);
      let fruitTeaFlavor = fruitTeaFlavors[randomIndex];
      this.setState({ chosenFlavor: fruitTeaFlavor });
    }
    if (event.target.value === "fruit lemonade") {
      let randomIndex = Math.floor(Math.random() * fruitLemonadeFlavors.length);
      let fruitLemonadeFlavor = fruitLemonadeFlavors[randomIndex];
      this.setState({ chosenFlavor: fruitLemonadeFlavor });
    }
    if (event.target.value === "smoothie") {
      let randomIndex = Math.floor(Math.random() * smoothieFlavors.length);
      let smoothieFlavor = smoothieFlavors[randomIndex];
      this.setState({ chosenFlavor: smoothieFlavor });
    }
  };

  noTopping = () => {
    this.setState({ chosenTopping: "" })
  };

  generateChosenTopping = () => {
    let randomIndex = Math.floor(Math.random() * toppings.length);
    let newTopping = toppings[randomIndex];
    this.setState({ chosenTopping: newTopping });
  };

  render() {
    return (
      <div className="App" >
        <h1>Boba Generator🧋</h1>
        <h2></h2>
        <h3>🩵 Change the drink category for a new, random drink in that category. Press topping button for a new random topping! 🩵</h3>

        <select onChange={this.chosenFlavor} className="drink-categories">
          <option value="none"> </option>
          <option value="milk tea">Milk Tea</option>
          <option value="fruit tea">Fruit Tea</option>
          <option value="fruit lemonade">Fruit Lemonade</option>
          <option value="smoothie">Smoothie</option>
        </select>

        <h3> </h3>
        <button class="topping-button" onClick={this.generateChosenTopping}>Press for a New Topping!</button>

        {/*<form>
          <input type="radio" id="yes" name="topping_answer" value="YES" onChange={this.generateChosenTopping}></input>
          <label for="YES">YES</label><br></br>
          <input type="radio" id="no" name="topping_answer" value="NO" onChange={this.noTopping}></input>
          <label for="NO">NO</label><br></br>
    </form>*/}

        <h2>{this.state.chosenFlavor}🫧{this.state.chosenTopping}</h2>

        {/*<button class="customized-drink-button">Generate a Boba Drink!</button>*/}
        {/*<h3>OR</h3>

        <button class="random-drink-button" onClick={this.generateRandomFlavor}>Give Me A Random Drink!</button>
        <h2 className="drink-result">{this.state.flavor}🫧{this.state.randomTopping}</h2>*/}
      </div>
    );
  };
};

export default App;
