import React, { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';

import Sign from '../../reusable-components/Sign'

const Signup = () => {

    const [user, userset] = useState({}) // {} for object

    const [submit, submitSet] = useState(false)

    // function for setting value `user`
    function setuser(key, value) {
        const tmp = { ...user }
        tmp[key] = value
        userset(tmp)
    }

    const [availableUsers, availableUsersset] = useState([
        { 'username': 'admin', 'password': 'hassan' }
    ])
    function canISignUp() {

        // returns array of all equal username and password
        // expect 1 item in array because
        // not two usernames shall be equal!
        let searchForUsernameAndPassword
            = availableUsers.filter(guest => guest[`username`] === user[`username`] && guest[`password`] === user[`password`])

        if (searchForUsernameAndPassword.length === 0) {
            // bake_cookie(`currentUser`, user[`username`])
            alert(`That is a new user`)
            // isLoginset(true)
        } else {
            // isLoginset(false)
            alert(`Not a new user`)
        }
    }

    useEffect(() => {

    }, [submit])


    return (
        <div>
            <Sign
                usernameSet={username => setuser(`username`, username)}
                passwordSet={password => setuser(`password`, password)}
            />
            <button

                onClick={() => {
                    submitSet(!submit)
                    canISignUp()
                }}
                class="btn btn-success"
            >Submit</button>
        </div>
    );
};

export default Signup;