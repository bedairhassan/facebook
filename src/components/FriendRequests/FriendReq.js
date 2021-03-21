import React, { useState, useEffect } from 'react';

// global lib
import { read_cookie } from 'sfcookies'

// JS 
import filterME from './JS/filterME'

// visuals
import Table from './visuals/Table'

// tools
import readFR from '../../firebase/readingData/readFR'

// DO NOT EVER PLACE EMPTY USEEFFECT

const FriendReq = () => {

    const [data, dataSet] = useState([])

    useEffect(() => readFR.then(data => dataSet(filterME(data))), []) 
    // firebase

    return (
        <div class="main">
            <Table data={data} />
        </div>
    );
};

export default FriendReq;