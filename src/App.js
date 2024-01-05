
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Boba Generator🧋</h1>
      <button class="random-drink-button" type="button">Give Me A Random Drink!</button>
      <h2>OR Give Some Prefrences to Make a Drink</h2>
      <h3>Choose a Drink Category</h3>
      <select name="drink-categories" id="drink-categories">
        <option value="milk tea">Milk Tea</option>
        <option value="fruit tea">Fruit Tea</option>
        <option value="fruit lemonade">Fruit Lemonade</option>
        <option value="smoothie">Smoothie</option>
      </select>
      <h3>Would You like a topping?</h3>
      {/*Do I need to put this in a form?*/}
      <input type="radio" id="yes" name="topping_answer" value="YES"></input>
      <label for="YES">YES</label><br></br>
      <input type="radio" id="no" name="topping_answer" value="NO"></input>
      <label for="NO">NO</label><br></br>
      <button class="customized-drink-button">Generate a Boba Drink!</button>
    </div>
  );
}

export default App;
