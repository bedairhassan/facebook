import firebase from '../firebase'

import arrayResult from '../../tools/arrayResult'

import { read_cookie } from 'sfcookies'


let AreWePending = (data, friend1, friend2) => {

    // 1st filter: filter by accepted
    data = data.filter(it => it.state === `pending`)

    // 2nd filter: gather me and all my friends
    // if 2nd filter gets commented, I WON'T appear in list.
    // why? see 1,2,3
    // 1. if current user is hassan
    // 2. and user to search is ali 
    // 3. 3rd filter can either acquire [CORRECT] hassan,ali or [X] mustafa,ali
    data = data.filter(it => it.context.includes(friend1) && it.context.includes(friend2))
    console.log('data', data)

    // 3rd filter: filter out this exact friend!
    data = data.filter(it => it.context.includes(friend2))

    console.log(`data`,data)
    return data // thus, we are friends!
}


// why parameters? 
// incase read_cookie was undefined!
function promise(currentUser, usertoDisplay) {

    return new Promise(resolve =>

        firebase
            .database()
            .ref('/friendrequests')
            .on("value", snapshot =>

                {
                    let ret = AreWePending(
                        arrayResult(
                            snapshot.val()
                        )
                        , currentUser
                        , usertoDisplay
                    )

                    resolve(ret.length>0)
                }

            )
    );
}

export default promise