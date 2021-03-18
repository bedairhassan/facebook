import React from "react"
import { read_cookie } from 'sfcookies';


const SignOutText = ({ isSignedIn }) => {
  return (
    <React.Fragment>
      <a class="nav-link disabled" href="#">
        {!isSignedIn ? `not signed yet` : `signed in as ${read_cookie(`currentUser`)}`}
      </a>
    </React.Fragment>

  )
}

export default SignOutText