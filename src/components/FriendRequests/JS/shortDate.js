const shortDate= (n)=>{

    let date = `${new Date()}`.split(' ')
    let short_date ='';

    for (let i=0;i<n;i++){
        short_date+=(date[i]+' ')
    }

    return short_date
}

export default shortDate
