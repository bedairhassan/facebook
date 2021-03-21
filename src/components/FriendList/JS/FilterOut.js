// function
let filterOut = (source,currentUser)=>{

    let array = source.split(',')

    let filtered = array.filter(item=>item!==currentUser)

    return filtered[0]
}

// YOU CAN RUN THE CODE IF YOU WANT TO !

// parameters
// let source = "hassan,ali"
// let currentUser = "ali"
// let result = filterOut(source,currentUser) // filters OUT current user from any string
// console.log('result', result)

export default filterOut