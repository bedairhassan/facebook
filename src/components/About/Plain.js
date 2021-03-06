import React from 'react';
import { useEffect,useState } from 'react/cjs/react.development';
import Table from './Table'

const Plain = () => {

    const [user, userSet] = useState({}) // name, phone,email

    useEffect(()=>{

        // get value from firebase

    },[])

    return (
        <div>
            {/* user is always guaranteed a non-empty object */}
            <Table user={user}/>
        </div>
    );
};

export default Plain;