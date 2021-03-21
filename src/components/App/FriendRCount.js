import React, { useState, useEffect } from 'react';

import readFRNoti from '../../firebase/readingData/readFRNoti'


const FriendRCount = () => {

    const [countFriendRequests, countFriendRequestsSet] = useState()
    useEffect(() => readFRNoti.then(data => countFriendRequestsSet(data.length)), [])


    return (
        <React.Fragment>
            {countFriendRequests}
        </React.Fragment>
    );
};

export default FriendRCount;