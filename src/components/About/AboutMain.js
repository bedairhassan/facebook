import React, { useEffect, useState } from "react"
import { bake_cookie, read_cookie, delete_cookie } from 'sfcookies';

import firebase from '../../firebase/firebase'

import isEmpty from '../../tools/isEmpty'

// sub components
import Editing from './Editing'
import Plain from './Plain'

// icons
import editIconYES from '../../images/edit_32px_yes.png'
import editIconNO from '../../images/edit_32px_no.png'

// reusable 
import DisplayIf from '../../reusable-components/DisplayIf'

// todo:put isempty in separate file


export default function About() {

  const [isEditing, isEditingset] = useState(true)
  const [user, userSet] = useState()

  useEffect(() => {

    let username = read_cookie(`currentUser`)

    // get value from firebase
    firebase.database().ref('/about').child(username).on("value", function (snapshot) {
      console.log(snapshot.val());

      userSet(snapshot.val())

    });

  }, [])

  return (
    <React.Fragment>


      {isEmpty(read_cookie(`currentUser`)) ? `not signed in` :

        <React.Fragment>
          <h1>About Page</h1>

          <DisplayIf
            yes={editIconYES}
            no={editIconNO}
            Trigger={() => isEditingset(!isEditing)}
            condition={isEditing} />

          {isEditing && <Editing placeholder={user}/>}
          {!isEditing && <Plain user={user}/>}
        </React.Fragment>

      }




    </React.Fragment>
  )
}
