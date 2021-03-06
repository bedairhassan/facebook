import React, { useEffect, useState } from "react"

import Select from '../reusable-components/Select'
import RowCell from '../reusable-components/RowCell'
import Input from '../reusable-components/Input'


export default function CreatePost() { // type,text

    // 'type':'announcement',``
    // 'type':'post',`text`:`How is everyone?`
    const [user, userset] = useState({})
  
    function setuser(key, value) {
      const tmp = { ...user }
      tmp[key] = value
      userset(tmp)
    }
  
    return (
      <React.Fragment>
        <h1>Create News</h1>
  
        <table>
          <RowCell
            Row={<Input
              retrieveValue={text => setuser(`text`, text)}
              hint={`Text`} />}
            Name={`Enter Text For Post`}
          />
  
          <RowCell
            Row={<Select
              retrieveValue={type => setuser(`type`, type)}
              data={[`Post`, `Announcement`]} />}
            Name={`Enter Type of Post`}
          />
        </table>
  
  
        {user[`type`]}
  
      </React.Fragment>
    )
  }