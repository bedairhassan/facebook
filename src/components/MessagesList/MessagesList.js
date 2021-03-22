import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// firebase
// reads total number of users chatting with signedIn
import read from './firebase/readUsersList'

import filterOut from '../FriendList/JS/FilterOut'
import { bake_cookie, read_cookie } from 'sfcookies';

const MessagesList = () => {

    const [data, dataSet] = useState({})

    const [conditionalDisplay,conditionalDisplaySet]=useState(false)

    useEffect(()=>read.then(data => {

        dataSet(data)
        conditionalDisplaySet(true)
    }), [])

    return (
        <div class="main">
            {(conditionalDisplay && data.length > 0) && data.map(item => <Each item={item} />)}
        </div>
    );
};

const Each = ({ item }) => {

    item = filterOut(item, read_cookie('currentUser'))

    return <tr>
        {/* <td>{item}</td> */}
        <Link to="/messaging"
            onClick={() => {
                bake_cookie('messaging', item)
                console.log(item)
            }}
            class="nav-item nav-link px-3">{item}</Link>
    </tr>
}

export default MessagesList;