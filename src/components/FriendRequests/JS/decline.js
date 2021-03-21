

import firebase from '../../../firebase/firebase'
import refreshPage from '../../../tools/refreshPage';

const decline = (object) => {

    let ref = firebase.database().ref('/friendrequests')
    ref.child(object.child).remove();
    refreshPage()
}


export default decline