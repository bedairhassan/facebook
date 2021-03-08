import firebase from '../firebase'

export default function firebaseSet({ref,child,set}){

    firebase.database().ref(`/${ref}`).child(child).set(set)
}

// module.exports={

//     "firebaseSet": function firebaseSet({ref,child,set}){

//         firebase.database().ref(`/${ref}`).child(child).set(set)
//     }
// }