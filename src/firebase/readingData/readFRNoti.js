import firebase from '../firebase'

import arrayResult from '../../tools/arrayResult'

import {read_cookie} from 'sfcookies'

const filter = (data)=>{

    data=data.filter(item=>{

        let {context,state}=item

        // conditions to OPT that item
        let isStatePending = state===`pending`
        let isCurrentUserIncluded = context.includes(read_cookie('currentUser'))

        return isStatePending && isCurrentUserIncluded
    })

    return data
}

var promise = new Promise((resolve) => {

    firebase.database().ref('/friendrequests').on("value", function (snapshot) {
        // console.log(snapshot.val())
        resolve(filter(arrayResult(snapshot.val())))
    })
});

export default promise