import React, { useEffect, useState } from "react"

import Select from '../reusable-components/Select'
import RowCell from '../reusable-components/RowCell'
import Input from '../reusable-components/Input'
import { bake_cookie, read_cookie } from "sfcookies"

// import firebaseSet from '../../firebase/firebase-tools/firebaseSet'
import firebasePush from '../firebase/firebase-tools/firebasePush'

import isEmpty from '../tools/isEmpty'

import isSignedIn from '../tools/isSignedIn'

export default function CreateAnnouncement() { // type,text

  // type,text,date,user
  const [post, postset] = useState({})

  function setpost(key, value) { // can be reusable 

    // if(key===`type` && !(key in value)){ // if user didn't choose anything from dropdown menu
    //   return;
    // }

    const tmp = { ...post }
    tmp[key] = value
    postset(tmp)
  }



  function submit() {

    // extra attributes
    let date = new Date() + ``
    let user = read_cookie(`currentUser`)

    // reassign
    let topost = { ...post }
    topost['date'] = date
    topost['user'] = user

    if (isEmpty(user)) {
      alert(`user did not sign in yet.`)
      return;
    }

    // firebase: the `topost` variable to `posts`
    firebasePush({
      ref: 'news',
      push: topost
    })

    // firebasePush({
    //   ref:'news',
    //   child:user,
    //   push:topost
    // })
  }

  return (
    <React.Fragment>

      {!isSignedIn() ? `not signed in` :

        <div align="middle">
          <h1>Create News</h1>


          <tr>
            <td><Input
              retrieveValue={text => setpost(`text`, text)}
              hint={`Text`} /></td>
            <td><Select
              retrieveValue={type => setpost(`type`, type)}
              data={[`Choose`, `news`, `post`]} /></td>
            <td><button className="btn btn-danger" onClick={() => submit()}>Submit</button></td>
          </tr>
          <br />

        </div>
      }



    </React.Fragment>
  )
}