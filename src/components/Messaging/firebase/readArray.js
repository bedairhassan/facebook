import firebase from '../../../firebase/firebase'
import arrayResult from '../../../tools/arrayResult'
import { read_cookie } from 'sfcookies'

function filter(Array2D,talkingto){

    let toReturn = []

    // let Array2D = arrayResult(snapshot.val())

    // why for loop? item might be at the end 
    // WARNING: only one CHILD shall be returned.
    let size = Array2D.length // dyn

    for (let i = 0; i < size; i++) {

        let CHILD = arrayResult(Array2D[i])

        // conditions for choosing
        let scope = CHILD[0].child
        let condition1 = scope.includes(read_cookie('currentUser'))
        let condition2 = scope.includes(talkingto)

        if (condition1 && condition2) {

            toReturn = CHILD
        }
    }

    console.log(`messages is`,toReturn)

    return toReturn
}

function promise(talkingto) {
    return new Promise((resolve) => {

        firebase
            .database()
            .ref('/message')
            .on("value",
                snapshot => {
                    resolve(filter(arrayResult(snapshot.val()),talkingto))
                }
            )
    })
}

export default promise


// var promise = new Promise((resolve) => {

//     firebase
//         .database()
//         .ref('/message')
//         .on("value",
//             snapshot => {

//                 let toReturn=[]

//                 let Array2D = arrayResult(snapshot.val())

//                 let size =Array2D.length // dyn
//                 console.log('size', size)
//                 for (let i=0;i<size;i++){

//                     let CHILD = arrayResult(Array2D[i])

//                     if(CHILD[0].child.includes(read_cookie('currentUser'))){

//                         // pushes child !
//                         // return conversation between two people
//                         // toReturn.push(CHILD[0].child)
//                         toReturn.push(CHILD)
//                     }
//                 }


//                 console.log('TORETURN',toReturn)

//                 resolve(toReturn)
//             }
//         )
// })




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