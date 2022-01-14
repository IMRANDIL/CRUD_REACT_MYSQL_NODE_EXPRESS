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
  const [list, setList] = useState('');
  const [notice, setNotice] = useState('');
  const [display, setDisplay] = useState(false);



  const createEmployee = async () => {

    try {
      if (name === '' || age === '' || country === '' || position === '' || wage === '') {
        setNotice('Please Fill All the Fields.');
        return setDisplay(true);
      }
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
        setNotice('');
        setDisplay(false);

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


  const findId = (e) => {
    console.log(e.target.dataset.id);

  }








  const hideEmployee = () => {
    setEmployeeList([]);
    setList('');
  }





  return (
    <div className="App">
      <h1>Basic Form</h1>
      {display ?
        <h4 className='notice'>{notice}</h4> : ''}
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
      <div className="btncontainer">
        <button className="showbtn btn" onClick={showEmployee} >Show Employee</button>
        <button className="hidebtn btn" onClick={hideEmployee}>Hide</button>
      </div>

      <h1>{list}</h1>
      <div className="employeeList">

        {employeeList.map((list, index) => {
          const { id, name, age, country, position, wage } = list;

          return (
            <div className="item" key={index}>
              <div className="card">
                <div className="container"  >
                  <span>Id:{id}</span>
                  <h4>Name:<b>{name}</b></h4>
                  <p>Age:{age}</p>
                  <p>Country:{country}</p>
                  <p>Role:{position}</p>
                  <p>Salary:{wage}</p>
                  <button className="editbtn" data-id={id} onClick={findId}>Edit</button>
                  <button className="deletebtn">Delete</button>
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
