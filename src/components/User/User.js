import React, { useEffect, useState } from "react"
import { bake_cookie, read_cookie, delete_cookie } from 'sfcookies';
import firebase from '../../firebase/firebase'

// reusable
import Table from '../../reusable-components/Table'

import isEmpty from '../../tools/isEmpty'

// import '../../components/News/News.css'
import '../News/News.css'

import NewsMain from '../News/NewsMain'


import { sortByNewsFirst } from '../../CONSOLE/sortDataBasedonType'
import arrayResult from '../../tools/arrayResult'

const User = () => {



    const [data, dataSet] = useState([])

    // load from firebase then sort. 
    useEffect(() => {

        firebase.database().ref('/news').on("value", function (snapshot) {

            let ARRAY = arrayResult(snapshot.val()).filter(item => read_cookie(`usertoDisplay`) === item[`user`])

            dataSet(sortByNewsFirst(ARRAY))

        })
    }, [])


    //// 




    const [user, userSet] = useState({})

    useEffect(() => {
        let name = read_cookie(`usertoDisplay`)
        firebase.database().ref('/about').child(name).on("value", function (snapshot) {
            // console.log(snapshot.val());

            userSet(snapshot.val())

            snapshot.forEach(function (data) {
            });
        });
    }, [])

    return (


        <React.Fragment>


            {isEmpty(read_cookie(`currentUser`)) ? `not signed in` :

                <React.Fragment>

                    <h1 class="header">You visited {read_cookie(`usertoDisplay`)}</h1>

                    <div class="body">
                    <div class="rightcolumn">
                        <Table user={user} />
                    </div>



                    <div class="leftcolumn">
                        <NewsMain data={data} />
                    </div>
                    </div>

                </React.Fragment>

            }



        </React.Fragment>
    );
};

export default User;