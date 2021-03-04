import React, { useEffect, useState } from "react"


// sub components
import Editing from './Editing'
import Plain from './Plain'


import editIconYES from '../../images/edit_32px_yes.png'
import editIconNO from '../../images/edit_32px_no.png'

import DisplayIf from '../../reusable-components/DisplayIf'

export default function About() {

  const [isEditing, isEditingset] = useState(false)

  const [user, userSet] = useState({}) // name, phone_adress, email_address

  return (
    <React.Fragment>
      <h1>About Page</h1>



      <DisplayIf
        yes={editIconYES}
        no={editIconNO}
        Trigger={() => isEditingset(!isEditing)}
        condition={isEditing} />




      {isEditing ? <Editing /> : <Plain user={user} />}
    </React.Fragment>
  )
}
