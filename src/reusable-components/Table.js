import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';

import isEmpty from '../tools/isEmpty'

const Table = ({ user }) => {

   

    const [isShow, isShowset] = useState(false)

    useEffect(() => {

        console.log('user', user)

        if (isEmpty(user)) {
            isShowset(false)
            return; 
        }

        isShowset(true)

    }, [user])

    return (
        <React.Fragment>
            {isShow&&<table>
            <tr>
                <td>Name</td>
                <td>{user.nickname}</td>
            </tr>
            <tr>
                <td>Phone</td>
                <td>{user.phone}</td>
            </tr>
            <tr>
                <td>Email</td>
                <td>{user.email}</td>
            </tr>
        </table>}
        {!isShow&&<p>No About page yet</p>}
        </React.Fragment>
    );
};

export default Table;