import React, { useState, useEffect } from 'react';
import './App.css';
import Axios from 'axios';
function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = () => {
    Axios.post("http://localhost:3001/api/register", {
      email : email,
      password: password
    }).then(() => {
      alert("registered");
    });
  }

  return (
    <div className="App">
      <div class="form">
        <label>Email: </label>
        <input type="text" name="email" onChange={(e)=> {
          setEmail(e.target.value)
        }}/>
        <label>Password: </label>
        <input type="text" name="password" onChange={(e)=> {
          setPassword(e.target.value)
        }} />
        <button onClick={submit}>Submit</button>
      </div>
    </div>
  );
}

export default App;
