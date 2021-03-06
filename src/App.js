import React, { useEffect, useState } from "react"
import { Route, BrowserRouter as Router, Switch, Redirect, Link } from 'react-router-dom';
import { bake_cookie, read_cookie, delete_cookie } from 'sfcookies';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


// reusable
import Input from '../src/reusable-components/Input'
import Button from '../src/reusable-components/Button'

// components
import CreatePost from './components/CreateNews'
import Login from './components/LoggingIn/Login'
import About from './components/About/AboutMain'
import News from './components/News/NewsMain'
import Table from './reusable-components/Table'
import User from './components/User'

// cookies
// currentUser has currentUser `ali` : string

function App() {

  const [signInStatus, signInStatusset] = useState(`not signed in yet`)

  function isEmpty(map) { // checks on empty array or empty object or empty string
    for (var key in map) {
      if (map.hasOwnProperty(key)) {
        return false;
      }
    }
    return true;
  }

  useEffect(() => {

    let user = read_cookie(`currentUser`)
    if (isEmpty(user)) {
      signInStatusset(`not signed in yet`)
    } else {

      signInStatusset(`Signed in as ${user}`)
    }

  }, read_cookie(`currentUser`))

  return (
    <div className="App">
      <Router>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <Link to="/login" class="nav-item nav-link px-3">Login</Link>
        |
        <Link to="/About" class="nav-item nav-link px-3">About</Link>
        |
        <Link to="/CreateNews" class="nav-item nav-link px-3">Create News</Link>
        |
        <Link to="/News" class="nav-item nav-link px-3">News</Link>
          <a class="nav-link disabled" href="#"> {signInStatus}</a>

          <a class="nav-link" href="#"> <button class="btn btn-danger"
          
          onClick={()=>{
            bake_cookie(`currentUser`,'')
          }}
          >Sign Out</button></a>


        </nav>

        <Switch>
          <Route exact path="/News">
            <News />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/About">
            <About />
          </Route>
          <Route exact path="/CreateNews">
            <CreatePost />
          </Route>
          <Route exact path="/user">
            <User />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
