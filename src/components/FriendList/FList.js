import React, { useEffect, useState } from 'react';


// visuals
import Table from './visuals/Table'

// firebase
import readFL from '../../firebase/readingData/readFL'

const FList = () => {

    const [data,dataSet]=useState([]) // array
    useEffect(()=>readFL.then(data=>dataSet(data)),[])

    return (
        <div class="main">
            <Table data={data}/>
        </div>
    );
};

export default FList;