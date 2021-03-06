let data = [
    { type: `post`, text: `post4`, user: `user919`, date: `9-1-2019` },
    { type: `news`, text: `news1`, user: `user919`, date: `9-1-2020` },
    { type: `news`, text: `news2`, user: `user919`, date: `9-1-2029` },
    { type: `news`, text: `news3`, user: `user919`, date: `9-1-2029` },
    { type: `post`, text: `post1`, user: `user919`, date: `9-1-2029` },
    { type: `post`, text: `post2`, user: `user919`, date: `9-1-2029` },
    { type: `post`, text: `post3`, user: `user919`, date: `9-1-2029` }
]

// sort by news first 
// sort by date first

function sortByDate(data, identify) {

    let variable = data.filter(each => each.type === identify)
    variable = variable.sort((a, b) => a.date < b.date)
    return variable
}


function sortByNewsFirst(data){
    data = data.sort((a, b) => a.type > b.type) // sort by news first 
    data = [...sortByDate(data, `news`), ...sortByDate(data, `post`)] // sort news datefirst, sort posts datefirst
    return data
}


// let news = data.filter(each=>each.type===`news`)
// news=news.sort((a,b)=>a.date>b.date)

// let posts = data.filter(each=>each.type===`post`)
// posts=posts.sort((a,b)=>a.date>b.date)

// 
// console.log('data', data)

module.exports={sortByNewsFirst}