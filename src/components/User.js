import React, { useEffect, useState } from "react"
import { bake_cookie, read_cookie, delete_cookie } from 'sfcookies';

// reusable
import Table from '../reusable-components/Table'

const User = () => {

    const [user,userSet]=useState({})

    function createUser(string){// extra

        let array = string.split(' ')
        let name = array[0]
        let phone = array[1]
        let email = array[2]

        return{name,phone,email}
    }

    useEffect(() => {

        let name = read_cookie(`usertoDisplay`)

        let firebase = [createUser(`ali 12991291 ali@gmail.com`),createUser(`mohammed 91289172 mohammed@gmail.com`)]

        let filtered = firebase.filter(each=>each.name===name)
        console.log('filtered', filtered)

        if(filtered.length>0){
            userSet(filtered[0])
        }

    }, [])

    return (
        <div>
            A user
            <Table user={user} />
        </div>
    );
};

export default User;