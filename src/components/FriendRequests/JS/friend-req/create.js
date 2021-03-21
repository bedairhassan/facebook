
import isEmpty from '../../../../tools/isEmpty'
import accept from './accept'

import makeid from '../../../../tools/makeid'

import firebasePush from '../../../../firebase/firebase-tools/firebasePush'

const create = (context) => {

    const child = makeid(10)
    const state = "pending"

    const push = {child,state,context}

    firebasePush({ref:'friendrequests',child,push})
}

export default create;