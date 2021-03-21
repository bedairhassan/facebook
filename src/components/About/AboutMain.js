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

import arrayResult from '../../tools/arrayResult'
import NewsMain from '../News/NewsMain'


import { sortByNewsFirst } from '../../CONSOLE/sortDataBasedonType'


import '../../App.css'

import isSignedIn from '../../tools/isSignedIn'

export default function About() {

  const [isEditing, isEditingset] = useState(false)



  const [data, dataSet] = useState([])

  // load from firebase then sort. 
  useEffect(() => {

    firebase.database().ref('/news').on("value", function (snapshot) {

      let ARRAY = arrayResult(snapshot.val()).filter(item => read_cookie(`currentUser`) === item[`user`])

      dataSet(sortByNewsFirst(ARRAY))

    })
  }, [])

  return (
    <React.Fragment>

      <div class="main">
      {!isSignedIn() ? `not signed in` :

<React.Fragment>
  <h1>About Page</h1>

  <DisplayIf
    yes={editIconYES}
    no={editIconNO}
    Trigger={() => isEditingset(!isEditing)}
    condition={isEditing} />

  {{
    true: <div align="middle"><Editing /></div>,
    false: <React.Fragment>


      <div class="rightcolumn">              <Plain />
      </div>

      <div class="leftcolumn">              <NewsMain data={data} />
      </div>
    </React.Fragment>
  }[isEditing]}


</React.Fragment>

}
      </div>




    </React.Fragment>
  )
}
