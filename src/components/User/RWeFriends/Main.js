import React, { useEffect, useState } from 'react';
import { read_cookie } from 'sfcookies';

import rWeFriends from '../../../firebase/readingData/rWeFriendss'
import rWePending from '../../../firebase/readingData/rWePending'


// JS 
import create from '../../FriendRequests/JS/friend-req/create'

const Main = () => {

    const currentUser = read_cookie('currentUser')
    const usertoDisplay = read_cookie('usertoDisplay')

    const [accepted, acceptedSet] = useState(false)
    const [pending, pendingSet] = useState(false)

    // useEffect(() => rWeFriends.then(condition => console.log(condition)), [])


    useEffect(() => rWeFriends(currentUser, usertoDisplay).then(condition => acceptedSet(condition)), [])
    useEffect(() => rWePending(currentUser, usertoDisplay).then(condition => pendingSet(condition)), [])

    // you will either firebase set or firebase push based on isEmpty (object.obj.child)


    if (accepted) {

        return <h5 style={{ color: 'green' }}>You Are Friends</h5>
    } else {

        if (pending) {
            return <h5 style={{ color: 'orange' }}>Pending</h5>
        }
    }

    // reactjs prefers default return! instead of placing else condition in else!
    let context = currentUser + ','
    context += usertoDisplay

    return (
        <button
            class="btn btn-primary"
            onClick={() => create(context)}>Add Friend</button>
    )
};

export default Main;