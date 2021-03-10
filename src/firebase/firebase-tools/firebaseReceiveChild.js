import firebase from "../firebase"


export default function firebaseReceiveChild(first) {

    let { ref, child } = first

    let ret = null
    firebase.database().ref(ref).child(child).on("value", function (snapshot) {
        console.log(snapshot.val());
        snapshot.forEach(function (data) {
            console.log(data.key);
            ret = data
            // alert(data.key)
        });
    });

    return ret

    // firebase.database().ref('/about').child('mohy').on("value", function (snapshot) {
    //     console.log(snapshot.val());
    //     snapshot.forEach(function (data) {
    //       console.log(data.key);
    //       // alert(data.key)
    //     });
    //   });
}

