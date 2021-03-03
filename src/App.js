import React, { useEffect, useState } from "react"
import { Route, BrowserRouter as Router, Switch, Redirect, Link } from 'react-router-dom';
import { bake_cookie, read_cookie, delete_cookie } from 'sfcookies';
import './App.css';

// reusable
import Input from '../src/reusable-components/Input'
import Button from '../src/reusable-components/Button'


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
  const [isLoginText,isLoginTextset]=useState(``)

  // users who have previously signed up successfully to website
  const [availableUsers,availableUsersset]=useState([
    {'username':'admin','password':'hassan'}
  ])

  // contains username and password
  const [user,userset]=useState({}) // {} for object
  // function for setting value `user`
  function setuser(key,value){
    const tmp = {...user}
    tmp[key]=value
    userset(tmp)
  }

  // compares object {user} with availableUsers
  function canISignIn(){

    // returns array of all equal username and password
    // expect 1 item in array because
    // not two usernames shall be equal!
    let searchForUsernameAndPassword
    =availableUsers.filter(guest=>guest[`username`]===user[`username`]&&guest[`password`]===user[`password`])

    if(searchForUsernameAndPassword.length>0){
      isLoginset(true)
    }else{
      isLoginset(false)
    }
  }

  useEffect(()=>{

    if(isLogin){
      isLoginTextset(`Signed In`)
    }else{
      isLoginTextset(`Not Signed In`)
    }

  },[isLogin])

  return (
    <React.Fragment>
      <h1>Sign In Page</h1>

      <Input hint={`Enter username`} retrieveValue={username=>setuser(`username`,username)}/>
      <Input hint={`Enter password`} retrieveValue={password=>setuser(`password`,password)}/>
      <Button name={`Submit`} submit={()=>canISignIn()}/>
      {isLoginText}

    </React.Fragment>

  )
}

function People() {  

  return (
    <React.Fragment>
          <h1>People</h1>
    </React.Fragment>
  )
}

function Person() {
  return (
    <h1>Person</h1>
  )
}

export default App;
