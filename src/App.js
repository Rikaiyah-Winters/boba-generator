
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Boba Generator🧋</h1>
      <button type="button">Give Me A Random Drink!</button>
      <h2>OR Give Some Prefrences to Make a Drink</h2>
      <h3>Choose a Drink Category</h3>
      <select name="drink-categories" id="drink-categories">
        <option value="milk tea">Milk Tea</option>
        <option value="fruit tea">Fruit Tea</option>
        <option value="fruit lemonade">Fruit Lemonade</option>
        <option value="smoothie">Smoothie</option>
      </select>
    </div>
  );
}

export default App;
