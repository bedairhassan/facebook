import firebase from '../../../firebase/firebase'
import arrayResult from '../../../tools/arrayResult'
import {read_cookie} from 'sfcookies'

var promise = new Promise((resolve) => {

    firebase
        .database()
        .ref('/message')
        .on("value",
            snapshot => {

                let toReturn=[]

                let Array2D = arrayResult(snapshot.val())

                let size =Array2D.length // dyn
                for (let i=0;i<size;i++){

                    let CHILD = arrayResult(Array2D[i])

                    if(CHILD[0].child.includes(read_cookie('currentUser'))){

                        // pushes child !
                        // return list of people who speak to currentUser
                        toReturn.push(CHILD[0].child)
                        // resolve(CHILD[0].child)
                    }
                }
                resolve(toReturn)
            }
        )
})

export default promise



// function promise(currentUser, usertoDisplay) {

//     return new Promise(resolve =>

//         firebase
//             .database()
//             .ref('/friendrequests')
//             .on("value", snapshot =>

//                 {
//                     let ret = AreWePending(
//                         arrayResult(
//                             snapshot.val()
//                         )
//                         , currentUser
//                         , usertoDisplay
//                     )

//                     resolve(ret.length>0)
//                 }

//             )
//     );
// }