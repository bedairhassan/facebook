import React from 'react';
import { read_cookie } from 'sfcookies';

// JS 
import filterOut from '../JS/FilterOut'

// JS // another component
import decline from '../../FriendRequests/JS/friend-req/decline'

const Each = ({item}) => {
    return (
        <div>
            <tr>
                <td>{filterOut(item.context,read_cookie('currentUser'))}</td>
                <td><button class="btn btn-danger" onClick={()=>decline(item)}>Remove Friend</button></td>
            </tr>
        </div>
    );
};

export default Each;