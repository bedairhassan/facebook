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

    return (
        <div>
            <NewsMain data={data} optionalTitle={true}/>
        </div>
    );
};

export default NewsPublic;