import React, { useEffect, useState } from "react"


// sub components
import Editing from './Editing'
import Plain from './Plain'

// icons
import editIconYES from '../../images/edit_32px_yes.png'
import editIconNO from '../../images/edit_32px_no.png'

// reusable 
import DisplayIf from '../../reusable-components/DisplayIf'

export default function About() {

  const [isEditing, isEditingset] = useState(false)

  const [user, userSet] = useState({}) // name, phone_adress, email_address

  useEffect(()=>{},[user]) // always update to firebase

  return (
    <React.Fragment>
      <h1>About Page</h1>

      <DisplayIf
        yes={editIconYES}
        no={editIconNO}
        Trigger={() => isEditingset(!isEditing)}
        condition={isEditing} />

      {isEditing && <Editing retrieveValue={userGuest=>userSet({...user,userGuest})}/>} 
      {!isEditing && <Plain user={user} />}

    </React.Fragment>
  )
}
