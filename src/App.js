import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'

function App() {

  const [data, setData] = useState([{ name: "Manoj", role: "Developer" }]);

  const handleAdd = () => {
    setData([...data, { name: "", role: "" }])
  }
  const handleChange = (e, index) => {
    const tempData = data
    tempData[index][e.target.name] = e.target.value
    console.log(tempData)
    setData(tempData);
  }


  return (
    <div className="App">
      <button onClick={handleAdd}>ADD</button>
      <div id="tag">
        <span>Name</span>
        <span>Role</span>
      </div>
      {data.map((item, index) =>
        <div id="fields" key={index}>
          <input placeholder='Name' defaultValue={item.name} onChange={(e) => handleChange(e, index)} name="name" />
          <input placeholder='Role' defaultValue={item.role} onChange={(e) => handleChange(e, index)} name="role" />
        </div>
      )}
      <button onClick={() => console.log(data)}>Submit</button>
    </div>
  );
}

export default App;
