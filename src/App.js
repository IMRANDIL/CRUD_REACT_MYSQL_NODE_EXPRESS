import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [country, setCountry] = useState('');
  const [position, setPosition] = useState('');
  const [wage, setWage] = useState('');
  const [employeeList, setEmployeeList] = useState([]);
  const [list, setList] = useState('')



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

  const showEmployee = async () => {
    try {
      const data = await axios.get('http://localhost:5000/showEmployee');
      setEmployeeList(data.data.result);
      setList('~~Employees List~~')
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
      <hr />
      <button className="showbtn btn" onClick={showEmployee} >Show Employee</button>
      <h1>{list}</h1>
      <div className="employeeList">

        {employeeList.map((list, index) => {
          const { id, name, age, country, position, wage } = list;

          return (
            <div className="item" key={index}>
              <div className="card">
                <div className="container">
                  <span>Id:{id}</span>
                  <h4>Name:<b>{name}</b></h4>
                  <p>Age:{age}</p>
                  <p>Country:{country}</p>
                  <p>Role:{position}</p>
                  <p>Salary:{wage}</p>
                </div>
              </div>

            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
