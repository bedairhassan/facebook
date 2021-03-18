
import { bake_cookie } from 'sfcookies';
import refreshPage from '../../tools/refreshPage'
import { Link } from 'react-router-dom';
import React from "react"
import Links from './Links'

const SignOutButton = () => {

  const SignOut = () => {
    bake_cookie(`currentUser`, '')
    refreshPage()
  }

  return (
    <div onClick={SignOut}>
      {Links['signout']}
    </div>
  )
}

export default SignOutButton;