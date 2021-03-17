import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import './News.css';
import { sortByNewsFirst } from '../../CONSOLE/sortDataBasedonType'
import firebase from '../../firebase/firebase'
import arrayResult from '../../tools/arrayResult'

import NewsMain from './NewsMain'

// import readAnnouncements from '../.....'
import readNews from '../../firebase/readingData/readNews'

import filterBy from '../../tools/filterBy'
import CreateAnnouncement from '../CreateAnnouncement';

import '../../../src/App.css'

const NewsPublic = () => {

    const [data, dataSet] = useState([])

    useEffect(() =>
        readNews.then(array => dataSet(sortByNewsFirst(array)))
        , [])

    // user choooses whether it's "news" or "post"
    const [choice, choiceSet] = useState()

    // ES6 function 

    return (
        <div>

            <Choose returnChoice={value => choiceSet(value)} />

            <CreateAnnouncement />

            {{
                'news': <NewsMain data={filterBy(data, 'news')} />,
                'post': <NewsMain data={filterBy(data, 'post')} />
            }[choice]}

        </div>
    );
};

function Choose({ returnChoice }) {

    const style = {
        listStyleType: "none",
        margin: "0",
        padding: "0"
    }

    return (

        <>

            <div class="main">
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <ul
                        class="navbar-nav mr-auto">
                        <li
                            class="nav-item"
                            onClick={() => returnChoice('news')}>
                            <a class="nav-link" >News </a>
                        </li>
                        <li
                            class="nav-item"
                            onClick={() => returnChoice('post')}
                        >
                            <a class="nav-link" >Post </a>

                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default NewsPublic;