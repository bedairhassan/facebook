import firebase from '../firebase'

import arrayResult from '../../tools/arrayResult'

import { read_cookie } from 'sfcookies'


let filterIt = (data) => { // {context,state}

    data = data.filter(item => {

        // extracted attributes state and context from object item 
        let { state, context } = item

        // extracting user from read_cookie 
        let user = read_cookie('currentUser')

        // conditions 
        let isAccepted = state === `accepted`
        let isUserInString = context.includes(user)

        return isAccepted && isUserInString
    })

    return data
}

var promise = new Promise(resolve =>

    firebase
        .database()
        .ref('/friendrequests')
        .on("value", snapshot =>
            resolve(
                filterIt(
                    arrayResult(
                        snapshot.val()
                    )
                )
            )
        )
);

export default promise