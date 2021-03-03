import React, { useState } from "react"
import { Route, BrowserRouter as Router, Switch, Redirect, Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
      <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/person">Person</Link>
        </li>
        <li>
          <Link to="/people">People</Link>
        </li>
        <Switch>
        <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/person">
            <Person />
          </Route>
          <Route exact path="/people">
            <People />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

function Login() {

  const [isLogin,isLoginset]=useState(false)

  function loginAction(){
    isLoginset(!isLogin)
  }

  return (
    <React.Fragment>
      <h1>Login Page</h1>
      <input type="checkbox" onChange={()=>loginAction()}/>
      {isLogin===true?`logged in `:`NOT`}
    </React.Fragment>

  )
}

function People() {
  return (
    <h1>People</h1>
  )
}

function Person() {
  return (
    <h1>Person</h1>
  )
}

export default App;
