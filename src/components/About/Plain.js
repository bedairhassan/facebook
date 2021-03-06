import React from 'react';
import { useEffect,useState } from 'react/cjs/react.development';

const Plain = () => {

    const [user, userSet] = useState({}) // name, phone,email

    useEffect(()=>{

        // get value from firebase

    },[])

    return (
        <div>
            <table>
                <tr>
                    <td>Name</td>
                    <td>{user.name}</td>
                </tr>
                <tr>
                    <td>Phone</td>
                    <td>{user.phone}</td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td>{user.email}</td>
                </tr>
            </table>
        </div>
    );
};

export default Plain;