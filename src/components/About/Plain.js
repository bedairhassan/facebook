import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import Table from '../../reusable-components/Table'
import { bake_cookie, read_cookie, delete_cookie } from 'sfcookies';
import firebase from '../../firebase/firebase'


const Plain = ({user}) => {

    // const [user, userSet] = useState({}) // name, phone,email

    

    return (
        <div>
            {/* user is always guaranteed a non-empty object */}
            <Table user={user} />
        </div>
    );
};

export default Plain;