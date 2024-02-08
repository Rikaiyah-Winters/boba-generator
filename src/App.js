import React, { Component } from 'react';
import './App.css';
import { milkTeaFlavors, fruitTeaFlavors, fruitLemonadeFlavors, smoothieFlavors, randomButtonDrinks, toppings } from './data';
import DrinkCategories from "./Modules/DrinkCategories";
import Topping from './Modules/Topping';

class App extends Component {

  state = {
    chosenTopping: "",
    chosenFlavor: "",
  };

  flavorGenerator = (event) => {
    if (event.target.value === "milk tea") {
      let randomIndex = Math.floor(Math.random() * milkTeaFlavors.length);
      let milkTeaFlavor = milkTeaFlavors[randomIndex];
      this.setState({ chosenFlavor: milkTeaFlavor });
    } else if (event.target.value === "fruit tea") {
      let randomIndex = Math.floor(Math.random() * fruitTeaFlavors.length);
      let fruitTeaFlavor = fruitTeaFlavors[randomIndex];
      this.setState({ chosenFlavor: fruitTeaFlavor });
    } else if (event.target.value === "fruit lemonade") {
      let randomIndex = Math.floor(Math.random() * fruitLemonadeFlavors.length);
      let fruitLemonadeFlavor = fruitLemonadeFlavors[randomIndex];
      this.setState({ chosenFlavor: fruitLemonadeFlavor });
    } else if (event.target.value === "smoothie") {
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
        <div className="info">
          <div className="left">
            <h2>🩵 Change the drink category for a new, random drink in that category.</h2>
            <h2>🩵Press topping button for a new random topping!</h2>
            <DrinkCategories flavorGenerator={this.flavorGenerator} />
            <Topping generateChosenTopping={this.generateChosenTopping} />
          </div>
          <div className="right">
            <h3>{this.state.chosenFlavor}</h3>
            <h3>🫧</h3>
            <h3>{this.state.chosenTopping}</h3>
          </div>
        </div>
      </div>
    );
  };
};

export default App;
