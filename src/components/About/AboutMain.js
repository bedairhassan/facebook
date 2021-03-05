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

  const [isEditing, isEditingset] = useState(true)

  return (
    <React.Fragment>
      <h1>About Page</h1>

      <DisplayIf
        yes={editIconYES}
        no={editIconNO}
        Trigger={() => isEditingset(!isEditing)}
        condition={isEditing} />

      {isEditing && <Editing />}
      {!isEditing && <Plain />}

    </React.Fragment>
  )
}
