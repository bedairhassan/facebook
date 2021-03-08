import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import { bake_cookie, read_cookie, delete_cookie } from 'sfcookies';


import firebase from '../../firebase/firebase'



const validator = require(`validator`)

const Editing = () => {

    const [user, userSet] = useState({

        // tmp 
        nickname:"hassan",
        phone:"011",
        email:"hassan@gmail.com"
    })
    const [submit,submitSet]=useState(false) 

    function easySet(attribute, value) {

        let object = { ...user }
        object[attribute] = value
        userSet(object)
    }

    useEffect(() => {

        const toSend = {...user,'user':read_cookie(`currentUser`)}

        // update to firebase
        firebase
        // .database("https://test-server-875a8-default-rtdb.firebaseio.com")
        .database()
        .ref("/about")
        .child('hassan1')
        .push(toSend)

    }, [submit])

    return (
        <div>
            <button onClick={()=>submitSet(!submit)}>Submit</button>
            <table>
                <tr>
                    <td>Nickname</td>
                    <td>
                        <input
                            onChange={e => {

                                let value = e.target.value
                                let condition = validator.isAlpha(value)

                                if (value.length > 10) {
                                    return;
                                }

                                if (condition) {
                                    easySet(`nickname`, value)
                                }

                            }} />
                    </td>
                </tr>
                <tr>
                    <td>Phone</td>
                    <td>
                        <input onChange={e => {

                            let value = e.target.value
                            let condition = validator.isAlpha(value)

                            if (`01155583833`.length !== value.length) {
                                return;
                            }

                            if (!condition) {
                                easySet(`phone`, value)
                            }

                        }} />
                    </td>
                </tr>
                <tr>
                    <td>Email Address</td>
                    <td>
                        <input onChange={e => {

                            let value = e.target.value
                            let condition = validator.isEmail(value)

                            if (value.split(`.com `).length >= 2) { // any characters after .com shall be ignored // I added a space because it worked ! 
                                return;
                            }

                            if (value.length > 30) {
                                return;
                            }

                            if (condition) {
                                easySet(`email`, value)
                            }

                        }} />
                    </td>
                </tr>
                <br />
                <tr>
                    <td>So far, your accepted values are</td>
                </tr>
                <tr>
                    <td>name</td>
                    <td>{user.name}</td>
                </tr>
                <tr>
                    <td>phone</td>
                    <td>{user.phone}</td>
                </tr><tr>
                    <td>email</td>
                    <td>{user.email}</td>
                </tr>
            </table>
        </div>
    );
};

export default Editing;