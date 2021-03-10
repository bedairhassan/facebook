import firebase from '../firebase/firebase'

// firebase.database().ref(`/${ref}`).child(child).push(push)

firebase.database().ref('/about').child('admin').equalTo('John Doe').on("value", function(snapshot) {
    // console.log(snapshot.val());
    snapshot.forEach(function(data) {
        // console.log(data.key);
    });
});