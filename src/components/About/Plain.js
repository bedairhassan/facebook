import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import Table from '../../reusable-components/Table'
import { bake_cookie, read_cookie, delete_cookie } from 'sfcookies';
import firebase from '../../firebase/firebase'


const Plain = () => {

    const [user, userSet] = useState({}) // name, phone,email

    useEffect(() => {

        let username = read_cookie(`currentUser`)

        // get value from firebase
        firebase.database().ref('/about').child(username).on("value", function (snapshot) {
            console.log(snapshot.val());

            userSet(snapshot.val())

            snapshot.forEach(function (data) {
            });
        });

    }, [])

    return (
        <div>
            {/* user is always guaranteed a non-empty object */}
            <Table user={user} />
        </div>
    );
};

export default Plain;