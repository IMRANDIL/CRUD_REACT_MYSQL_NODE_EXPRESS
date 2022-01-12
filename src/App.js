import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [country, setCountry] = useState('');
  const [position, setPosition] = useState('');
  const [wage, setWage] = useState('');

  const createEmployee = async () => {
    try {
      await axios.post('http://localhost:5000/createEmployee', {
        name: name,
        age: age,
        country: country,
        position: position,
        wage: wage
      });

      if ({ status: 201 }) {
        setCountry('');
        setName('');
        setPosition('');
        setWage('');
        setAge('');
      }

    } catch (error) {
      console.log(error);
    }

  }






  return (
    <div className="App">
      <h1>Basic Form</h1>
      <div className="form-container">
        <label htmlFor="name">Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <label htmlFor="age">Age:</label>
        <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
        <label htmlFor="country">Country:</label>
        <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} />
        <label htmlFor="position">Position:</label>
        <input type="text" value={position} onChange={(e) => setPosition(e.target.value)} />
        <label htmlFor="salary">Wage(per annum):</label>
        <input type="number" value={wage} onChange={(e) => setWage(e.target.value)} />

      </div>
      <button className='btn' onClick={createEmployee}>Add Employee</button>
    </div>
  );
}

export default App;
