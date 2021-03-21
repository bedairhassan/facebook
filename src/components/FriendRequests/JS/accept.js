import refreshPage from "../../../tools/refreshPage"

import firebaseSet from '../../../firebase/firebase-tools/firebaseSet'

const accept = (object)=>{

    const ref = 'friendrequests'
    const child = object.child
    const set = {
        ...object, // same object 
        state:"accepted" // but we will just update the state attribute
    }
    
    firebaseSet({ref,child,set})


    // update
    refreshPage()
}

export default accept