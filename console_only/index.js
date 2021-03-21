let data = [
    {context:'hassan,ali',state:'pending'},
    {context:'alaa,mohammed',state:'accepted'},
    {context:'hassan,mustafa',state:'accepted'},
    {context:'hassan,michael',state:'pending'},
    {context:'hassan,joseph',state:'pending'},
]

// friend1: source
let AreWePending = (data,friend1,friend2)=>{

    // 1st filter: filter by accepted
    data = data.filter(it=>it.state===`pending`)
    console.log('data', data)

    // 2nd filter: gather me and all my friends
    // if 2nd filter gets commented, I WON'T appear in list.
    // why? see 1,2,3
    // 1. if current user is hassan
    // 2. and user to search is ali 
    // 3. 3rd filter can either acquire [CORRECT] hassan,ali or [X] mustafa,ali
    data = data.filter(it=>it.context.includes(friend1) || it.context.includes(friend2))

    // 3rd filter: filter out this exact friend!
    data = data.filter(it=>it.context.includes(friend2))

    console.log(data)
}

AreWePending(data,'hassan','michael')

