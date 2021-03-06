import React, { useEffect, useState } from "react"
import { Route, BrowserRouter as Router, Switch, Redirect, Link } from 'react-router-dom';
import { bake_cookie, read_cookie, delete_cookie } from 'sfcookies';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


// reusable
import Input from '../src/reusable-components/Input'
import Button from '../src/reusable-components/Button'

// components
import CreatePost from './components/CreatePost'
import Login from './components/Login'
import About from './components/About/AboutMain'


function App() {
  return (
    <div className="App">
      <Router>
        <button class="btn btn-danger">submit</button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      </ul>
      </div>


        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="/CreateNews">Create News</Link>
        </li>
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/About">
            <About />
          </Route>
          <Route exact path="/CreateNews">
            <CreatePost />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

//https://stackoverflow.com/questions/39826992/how-can-i-set-a-cookie-in-react






export default App;
