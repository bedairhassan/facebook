import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import './News.css';
import { sortByNewsFirst } from '../../CONSOLE/sortDataBasedonType'
import firebase from '../../firebase/firebase'
import arrayResult from '../../tools/arrayResult'

import NewsMain from './NewsMain'

const NewsPublic = () => {

    const [data, dataSet] = useState([])

    // load from firebase then sort. 
    useEffect(() => {

        firebase.database().ref('/news').on("value", function (snapshot) {

            dataSet(sortByNewsFirst(arrayResult(snapshot.val())))

            snapshot.forEach(function (data) { // data.val()
            });
        })
    }, [])

    // user choooses whether it's "news" or "post"
    const [choice, choiceSet] = useState()

    useEffect(() => {
        // alert(choice)
    }, [choice])


    // ES6 function 
    const filterBy = (array, key) => array.filter(item => item[`type`] === key)

    return (
        <div>

            <Choose returnChoice={value => choiceSet(value)} />

            {{
                'news': <NewsMain data={filterBy(data, 'news')} optionalTitle={true} />,
                'post': <NewsMain data={filterBy(data, 'post')} optionalTitle={true} />
            }[choice]}

        </div>
    );
};

function Choose({ returnChoice }) {

    return (

        <>
            <h2 onClick={() => returnChoice('news')}>News</h2>
            <h2 onClick={() => returnChoice('post')}>Posts</h2>
        </>
    )
}

export default NewsPublic;