
import './App.css';
import DrinkCategories from "./Modules/DrinkCategories";
import Topping from './Modules/Topping';
import CustomizedDrink from './Modules/CustomizedDrink';
import RandomDrink from './Modules/RandomDrink';
import DrinkResult from './Modules/DrinkResult';

function App() {
  return (
    <div className="App">
      <h1>Boba Generator🧋</h1>
      <h2>Give Some Prefrences to Make a Drink</h2>
      <h3>Choose a Drink Category</h3>
      <DrinkCategories />
      <h3>Would You like a topping?</h3>
      <Topping />
      <CustomizedDrink />
      <h3>OR</h3>
      <RandomDrink />
      <DrinkResult />
    </div>
  );
}

export default App;
