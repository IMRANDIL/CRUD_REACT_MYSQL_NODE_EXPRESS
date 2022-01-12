
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Basic Form</h1>
      <div className="form-container">
        <label htmlFor="name">Name:</label>
        <input type="text" />
        <label htmlFor="age">Age:</label>
        <input type="number" />
        <label htmlFor="country">Country:</label>
        <input type="text" />
        <label htmlFor="position">Position:</label>
        <input type="text" />
        <label htmlFor="salary">Wage(per annum):</label>
        <input type="number" />
      </div>
    </div>
  );
}

export default App;
