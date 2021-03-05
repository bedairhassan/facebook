import React ,{ useEffect, useState }from 'react';

export default function MultipleTextboxes({ fields, output }) { // fields is string

    const [container,containerSet]=useState({})
  
    useEffect(()=>output(container),[container])
  
    function CHANGE(field,value){
      let previous = {...container}
      previous[field.replace(' ','_').toLowerCase()]=value
      containerSet(previous)
    }
  
    return (<React.Fragment>
  
      {fields.split(',').map(field =>
        <React.Fragment>
          <table class="table">
            <tr>
              <td>
                {field}
              </td>
              <td>
                <input
                  placeholder={`Enter ${field}`}
                  onChange={e=>CHANGE(field,e.target.value)}
                />
              </td>
            </tr>
          </table>
        </React.Fragment>
      )}
  
    </React.Fragment>)
  }
  