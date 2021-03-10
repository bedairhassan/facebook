import React, { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';

import firebase from "../../firebase/firebase"
import firebaseSet from "../../firebase/firebase-tools/firebaseSet"


import Sign from '../../reusable-components/Sign'

const Signup = () => {

    const [user, userset] = useState({}) // <input/>

    // function for setting value `user`
    function setuser(key, value) {
        const tmp = { ...user }
        tmp[key] = value
        userset(tmp)
    }

    const refreshPage = () => {
        window.location.reload();
    }

    function canISignUp() {

        let allowSignIn = false

        firebase
            .database()
            .ref('/availableUsers')
            .child(user[`username`])
            .on("value",  (snapshot) =>{

                if (!(snapshot.val() === null) && !allowSignIn) {
                    document.getElementById('usernameRef').value = '';
                    document.getElementById('passwordRef').value = '';
                    alert(`Username already exists`)
                } else {
                    allowSignIn = true
                }
            })

        if (allowSignIn) {

            firebaseSet({
                ref: `availableUsers`, child: user[`username`], set: {
                    username: user[`username`],
                    password: user[`password`]
                }
            })

            alert(`Submitted`)
            refreshPage()
            allowSignIn = false
        }
    }


    return (
        <div>
            <h1>Sign Up Page</h1>


            <input
                id="usernameRef"
                placeholder="Enter username"
                onChange={e => setuser(`username`, e.target.value)} />
            <br />

            <input
                type="password"
                id="passwordRef"
                placeholder="Enter password"
                onChange={e => setuser(`password`, e.target.value)} />
            <br />


            <button
                onClick={() => canISignUp()}
                class="btn btn-success"
            >Submit</button>
        </div>
    );
};

export default Signup;