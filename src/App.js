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
import News from './components/News/NewsMain'


function App() {
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
        </Switch>
      </Router>
    </div>
  );
}

//https://stackoverflow.com/questions/39826992/how-can-i-set-a-cookie-in-react






export default App;
