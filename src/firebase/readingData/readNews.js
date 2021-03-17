// import firebase from '../firebase'
import firebase from '../firebase'

import arrayResult from '../../tools/arrayResult'

var promise = new Promise((resolve) => {

    firebase.database().ref('/news').on("value", function (snapshot) {
        resolve(arrayResult(snapshot.val()))
    })
});

export default promise