import React, { useEffect, useState } from "react"
import { Route, BrowserRouter as Router, Switch, Redirect, Link } from 'react-router-dom';
import { bake_cookie, read_cookie, delete_cookie } from 'sfcookies';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

// components
import Login from './components/LoggingIn/Login'
import About from './components/About/AboutMain'
import News from './components/News/NewsPublic'

import User from './components/User/User'

import refreshPage from './tools/refreshPage'


import isEmpty from './tools/isEmpty'


function App() {

  const [isSignedIn,isSignedInSet]=useState(!isEmpty(read_cookie(`currentUser`)))


  return (
    <div className="App">

      {/* <Environment /> */}



      <Router>



        <div class="sidenav">

          {!isSignedIn ?
            <Link to="/login" class="nav-item nav-link px-3">Login </Link> :


            <React.Fragment>


              <Link to="/About" class="nav-item nav-link px-3">About </Link>
              {/* <Link to="/CreateNews" class="nav-item nav-link px-3">Create News |</Link> */}
              <Link to="/News" class="nav-item nav-link px-3">Announcements </Link>
            </React.Fragment>
          }

        </div>

        <div class="main">
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="nav-link disabled" href="#">
              {!isSignedIn ? `not signed yet` : `signed in as ${read_cookie(`currentUser`)}`}
            </a>


            {isSignedIn && <div
              onClick={() => {
                bake_cookie(`currentUser`, '')
                refreshPage()
              }}>
              <Link to="/login" class="nav-item nav-link px-3">Sign Out</Link>
            </div>}

          </nav>

        </div>

        <Switch>
          <Route exact path="/News"><News /></Route>
          <Route exact path="/login"><Login /></Route>
          <Route exact path="/About"><About /></Route>
          <Route exact path="/user"><User /></Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
