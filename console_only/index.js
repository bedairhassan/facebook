// parameters
let source = "hassan,ali"
let target = "ali"

// function
let filterOut = (source,target)=>{

    let array = source.split(',')

    let filtered = array.filter(item=>item!==target)

    return filtered[0]
}

let result = filterOut(source,target)
console.log('result', result)