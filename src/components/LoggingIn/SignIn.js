import React, { useEffect, useState } from "react"

import Input from '../../reusable-components/Input'
import Button from '../../reusable-components/Button'
import { bake_cookie } from "sfcookies"

import Sign from '../../reusable-components/Sign'
import firebase from '../../firebase/firebase'

import arrayResult from '../../tools/arrayResult'

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

      let array = arrayResult(snapshot.val()).filter(guest => guest[`password`] === user[`password`] && guest[`username`] === user[`username`])
console.table(array)

      if (array.length > 0) {
        bake_cookie(`currentUser`, user[`username`])
        isLoginset(true)
        }else{
        alert(`Incorrect Username or password`)
        isLoginset(false)
      }

      refreshPage()
    });


    // refreshPage()

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
