import React, { useEffect, useState } from "react"
import { bake_cookie, read_cookie, delete_cookie } from 'sfcookies';
import firebase from '../../firebase/firebase'

// reusable
import Table from '../../reusable-components/Table'

import isEmpty from '../../tools/isEmpty'

// import '../../components/News/News.css'
import '../News/News.css'

const User = () => {

    const [user, userSet] = useState({})

    useEffect(() => {
        let name = read_cookie(`usertoDisplay`)
        firebase.database().ref('/about').child(name).on("value", function (snapshot) {
            console.log(snapshot.val());

            userSet(snapshot.val())

            snapshot.forEach(function (data) {
            });
        });
    }, [])

    return (


        <div>


            {isEmpty(read_cookie(`currentUser`)) ? `not signed in` :

                <React.Fragment>
                    <h1>You visited {read_cookie(`currentUser`)}</h1>
            <Table user={user} />
                </React.Fragment>

            }



        </div>
    );
};

export default User;