import React, { useEffect, useState } from "react"
import { Route, BrowserRouter as Router, Switch, Redirect, Link } from 'react-router-dom';
import { bake_cookie, read_cookie, delete_cookie } from 'sfcookies';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import firebase from '../src/firebase/firebase'
import firebaseReceiveChild from '../src/firebase/firebase-tools/firebaseReceiveChild'
import firebasePush from '../src/firebase/firebase-tools/firebasePush'

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
import refreshPage from './tools/refreshPage'


import isEmpty from './tools/isEmpty'

// cookies
// currentUser has currentUser `ali` : string

function App() {

  

  return (
    <div className="App">

      {/* <Environment /> */}



      <Router>

        <nav class="navbar navbar-expand-lg navbar-light bg-light">


          {isEmpty(read_cookie(`currentUser`)) ?
            <Link to="/login" class="nav-item nav-link px-3">Login |</Link> :


            <React.Fragment>


              <Link to="/About" class="nav-item nav-link px-3">About |</Link>
              <Link to="/CreateNews" class="nav-item nav-link px-3">Create News |</Link>
              <Link to="/News" class="nav-item nav-link px-3">News |</Link>
            </React.Fragment>
          }

          <a class="nav-link disabled" href="#">

            {/* {signInStatus} */}


            {isEmpty(read_cookie(`currentUser`)) ? `not signed yet` : `signed in as ${read_cookie(`currentUser`)}`}

          </a>


          {!isEmpty(read_cookie(`currentUser`)) && <div
            onClick={() => {
              bake_cookie(`currentUser`, '')
              refreshPage()
            }}>
            <Link to="/login" class="nav-item nav-link px-3">Sign Out</Link>
          </div>}

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

function makeid(length) {
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

function Environment() {

  function submit() {

    let admins = [`admin`, `hassan`, `mohammed`, `ali`]

    let types = [`news`, `post`]

    for (const admin of admins) {
      for (let i = 0; i < 5; i++) {

        let push = {
          date: new Date() + ``,
          type: types[Math.floor(Math.random() * 2)],
          text: makeid(10),
          user: admin
        }


        // expect 4*5 NEW posts!
        firebasePush({
          ref: `/news`,
          push
        })
      }
    }


  }

  return (
    <React.Fragment>
      <h1>TMP Environment</h1>
      <button onClick={() => submit()}>Submit</button>
    </React.Fragment>
  )
}

export default App;
