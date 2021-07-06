import React, { useState, useEffect } from 'react';
import './App.css';
import Axios from 'axios';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import RegisterForm from './Registration/RegisterForm';
import LoginForm from './Login/Login';
import Home from './home';
import Welcome from './welcome';

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
 
  useEffect(()=>{
    localStorage.setItem('login',"false")
  },[])


  return (

    <BrowserRouter>
    <Switch>
    <Route exact path="/" component={Home}/> 
    <Route exact path="/registration" component={RegisterForm}/> 
    <Route exact path="/login" component={LoginForm}/>
    <Route exact path="/welcome" component={Welcome}/>

    </Switch>
    </BrowserRouter>
  //   <div className="App">
  //     <div class="form">
  //       <h2>Register</h2>
  //       <label>Email: </label>
  //       <input type="email" name="email" required onChange={(e)=> {
  //         setEmail(e.target.value)
  //       }}/>
  //       <label>Password: </label>
  //       <input type="password" name="password"  required onChange={(e)=> {
  //         setPassword(e.target.value)
  //       }} />
  //       <button onClick={submit}>Submit</button>
  //     </div>
  //   </div>
  
  // <LoginForm/>
  // <BrowserRouter>
  //           <ul>
                
  //               <li><Link to="/registration">Reg</Link></li>
  //               <li><Link to="/login">Login</Link></li>
  //           </ul>
  //       </BrowserRouter>

  );
  

}

export default App;
