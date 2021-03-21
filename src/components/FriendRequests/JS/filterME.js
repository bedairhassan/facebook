import {read_cookie} from 'sfcookies'

const filterME = (prevData) => { // RAM: prevData

    prevData=prevData.filter(item => {

        let array = item.context.split(',')
        let received = array[1]

        let compared = received === read_cookie('currentUser') && item.state===`pending`

        return compared
    })

    return prevData
}

export default filterME