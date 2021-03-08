import firebase from '../firebase'

export default function firebasePush({ref,child,push}){

    firebase.database().ref(`/${ref}`).child(child).push(push)
}

// module.exports={

//     "firebaseSet": function firebaseSet({ref,child,set}){

//         firebase.database().ref(`/${ref}`).child(child).set(set)
//     }
// }