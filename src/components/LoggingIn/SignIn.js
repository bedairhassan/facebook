import React, { useEffect, useState } from "react"

import Input from '../../reusable-components/Input'
import Button from '../../reusable-components/Button'
import { bake_cookie } from "sfcookies"

import Sign from '../../reusable-components/Sign'
import firebase from '../../firebase/firebase'

// TODO: NOTE, this function is repeated!
const arrayResult = (rooms) => {
  return Object.keys(rooms).map(room => {
    let q = rooms[room]
    return q
  })
};

export default function Login() {

  // those two variables are shared
  const [isLogin, isLoginset] = useState(false)
  const [isLoginText, isLoginTextset] = useState(``)

  // users who have previously signed up successfully to website
  const [availableUsers, availableUsersset] = useState([
  ])

  // contains username and password
  const [user, userset] = useState({}) // {} for object
  // function for setting value `user`
  function setuser(key, value) {
    const tmp = { ...user }
    tmp[key] = value
    userset(tmp)
  }


  // compares object {user} with availableUsers
  function canISignIn() {

    firebase.database().ref('/availableUsers').on("value", function (snapshot) {

      

      snapshot.forEach(function (data) {

        let guest = data.val()
        let ifEqualPass = guest[`password`] === user[`password`]
        let ifEqualUsername = guest[`username`] === user[`username`]

        if(ifEqualUsername&&ifEqualPass){

          bake_cookie(`currentUser`, user[`username`])
          isLoginset(true)
          refreshPage()

          return;
        }else{
          isLoginset(false)
        }


      });
    });

    
  }

  const refreshPage = () => {
    window.location.reload();
  }

  return (
    <React.Fragment>
      <h1>Sign In Page</h1>

      <Sign
        usernameSet={username => setuser(`username`, username)}
        passwordSet={password => setuser(`password`, password)}
      />


      <Button 
      
      className="btn btn-success"
      name={`Submit`} submit={() => {

        canISignIn()
        // refreshPage()
      }} />
      {isLoginText}

    </React.Fragment>

  )
}
