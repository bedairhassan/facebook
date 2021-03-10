import React, { useEffect, useState } from "react"
import { bake_cookie, read_cookie, delete_cookie } from 'sfcookies';
import firebase from '../firebase/firebase'

// reusable
import Table from '../reusable-components/Table'

const User = () => {

    const [user, userSet] = useState({})

    function createUser(string) {// extra

        let array = string.split(' ')
        let name = array[0]
        let phone = array[1]
        let email = array[2]

        return { name, phone, email }
    }

    function isEmpty(map) { // checks on empty array or empty object or empty string
        for (var key in map) {
          if (map.hasOwnProperty(key)) {
            return false;
          }
        }
        return true;
      }

    useEffect(() => {



        let name = read_cookie(`usertoDisplay`)


        firebase.database().ref('/about').child(name).on("value", function (snapshot) {
            console.log(snapshot.val());

            userSet(snapshot.val())

            snapshot.forEach(function (data) {
            });
        });

        // let firebase = [createUser(`ali 12991291 ali@gmail.com`),createUser(`mohammed 91289172 mohammed@gmail.com`)]

        // let filtered = firebase.filter(each=>each.name===name)
        // console.log('filtered', filtered)

        // if(filtered.length>0){
        // userSet(filtered[0])
        // }

    }, [])

    return (


        <div>


            {isEmpty(read_cookie(`currentUser`)) ? `not signed in` :

                <React.Fragment>
                    A user
            <Table user={user} />
                </React.Fragment>

            }



        </div>
    );
};

export default User;