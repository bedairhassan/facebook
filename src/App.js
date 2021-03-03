import React, { useEffect, useState } from "react"
import { Route, BrowserRouter as Router, Switch, Redirect, Link } from 'react-router-dom';
import { bake_cookie, read_cookie, delete_cookie } from 'sfcookies';
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
//https://stackoverflow.com/questions/39826992/how-can-i-set-a-cookie-in-react

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

      CREATE/BAKE COOKIE
      <button onClick={()=>{bake_cookie(`performance`,100)}}>Submit 100 performance</button>

    </React.Fragment>

  )
}

function People() {

  const [cookie,cookieset]=useState(`cookie not loaded`)
  
  useEffect(()=>{
    cookieset(read_cookie(`performance`))
  },[])

  return (
    <React.Fragment>
          <h1>People</h1>
          READ COOKIE
          {cookie}
    </React.Fragment>
  )
}

function Person() {
  return (
    <h1>Person</h1>
  )
}

export default App;
