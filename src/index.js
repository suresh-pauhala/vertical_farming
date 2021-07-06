import React from 'react';
import App from './App';
import ReactDOM from 'react-dom';
// import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import { HashRouter } from 'react-router-dom';
import RegisterForm from './Registration/RegisterForm';
import LoginForm from './Login/Login';
import Header from './header';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

// const Routing = () => {
//   return(
//   //   <Router>
//   //     <Header/>
//   //     <Switch>
//   //       <Route exact path="/" component={App} />
//   //       <Route path="/Registration" component={RegisterForm} />
//   //       <Route path="/Login" component={LoginForm} />
//   //     </Switch>
      
//   //   </Router>
//   // )
  
// }

ReactDOM.render(
//   <Router history = {browserHistory}>
//   <Route path = "/" component = {App}>
//      {/* <IndexRoute component = {App} /> */}
//      <Route path = "Registration" component = {RegisterForm} />
//      <Route path = "Login" component = {LoginForm} />
     
//   </Route>
// </Router>

// {/* <React.StrictMode>
// <Routing />
// </React.StrictMode>  */}
<App />
,
  document.getElementById('root')
);
