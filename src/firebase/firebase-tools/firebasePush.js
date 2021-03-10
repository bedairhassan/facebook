import firebase from '../firebase'

export default function firebasePush(first) {

    let { ref, child, push } = first

    //TODO: if (`child` in first)

    if (first[`child`]) {
        firebase.database().ref(`/${ref}`).child(child).push(push)
    } else {
        firebase.database().ref(`/${ref}`).push(push)
    }
}

// export default function firebasePush({ref,child,push}){

//     firebase.database().ref(`/${ref}`).child(child).push(push)
// }
