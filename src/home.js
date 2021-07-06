import React from 'react';
import logo from './images/verticalfarming.jpg'
import {Link , BrowserRouter} from 'react-router-dom';
function Home(props)
{
    console.log(props);
   const handleLoginClick = () =>{
       props.history.push("/login");
   }
   const handleRegisterClick = () =>{
    props.history.push("/registration");
}
return(
    <div>
    <button onClick={handleLoginClick}>Login</button>
    <button onClick={handleRegisterClick}>Signup</button>
    <br></br>
    <img src={logo} />
    <h2>Home Page</h2> 

             <ul>
                
                 <li><Link to="/registration">Reg</Link></li>
                 <li><Link to="/login">Login</Link></li>
             </ul>
     
    </div>
) 
}
export default Home;
