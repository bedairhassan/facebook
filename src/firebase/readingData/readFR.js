import firebase from '../firebase'

import arrayResult from '../../tools/arrayResult'

var promise = new Promise((resolve) => {

    firebase.database().ref('/friendrequests').on("value", function (snapshot) {
        // console.log(snapshot.val())
        resolve(arrayResult(snapshot.val()))
    })
});

export default promise