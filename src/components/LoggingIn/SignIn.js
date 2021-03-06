import React, { useEffect, useState } from "react"

import Input from '../../reusable-components/Input'
import Button from '../../reusable-components/Button'
import { bake_cookie } from "sfcookies"

import Sign from '../../reusable-components/Sign'

export default function Login() {

  // those two variables are shared
  const [isLogin, isLoginset] = useState(false)
  const [isLoginText, isLoginTextset] = useState(``)

  // users who have previously signed up successfully to website
  const [availableUsers, availableUsersset] = useState([
    { 'username': 'admin', 'password': 'hassan' }
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

    // returns array of all equal username and password
    // expect 1 item in array because
    // not two usernames shall be equal!
    let searchForUsernameAndPassword
      = availableUsers.filter(guest => guest[`username`] === user[`username`] && guest[`password`] === user[`password`])

    if (searchForUsernameAndPassword.length > 0) {
      bake_cookie(`currentUser`, user[`username`])
      isLoginset(true)
    } else {
      isLoginset(false)
    }
  }

  useEffect(() => {

    if (isLogin) {
      isLoginTextset(`You have successfully signed in.`)
    } else {
      isLoginTextset(`Not Signed In`)
    }

  }, [isLogin])

  return (
    <React.Fragment>
      <h1>Sign In Page</h1>


{/* TODO: username and password can be reusable */}

      <Sign
      usernameSet={username=>setuser(`username`,username)}
      passwordSet={password=>setuser(`password`,password)}
      />
      
      {/* <Input hint={`Enter username`} retrieveValue={username => setuser(`username`, username)} />

      <input
        placeholder={`Enter password`}
        onChange={e => setuser(`password`, e.target.value)}
        type="password"
      /> */}


      <Button name={`Submit`} submit={() => canISignIn()} />
      {isLoginText}

    </React.Fragment>

  )
}
