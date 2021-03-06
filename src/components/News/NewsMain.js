import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import './News.css';
import { sortByNewsFirst } from '../../CONSOLE/sortDataBasedonType'

const NewsMain = () => {

    const [data, dataSet] = useState([])

    // load from firebase!!!!
    useEffect(() => {
        // dataSet([
        //     { type: `post`, text: `post4`, user: `user919`, date: `9-1-2019` },
        //     { type: `news`, text: `news1`, user: `user919`, date: `9-1-2020` },
        //     { type: `news`, text: `news2`, user: `user919`, date: `9-1-2029` },
        //     { type: `news`, text: `news3`, user: `user919`, date: `9-1-2029` },
        //     { type: `post`, text: `post1`, user: `user919`, date: `9-1-2029` },
        //     { type: `post`, text: `post2`, user: `user919`, date: `9-1-2029` },
        //     { type: `post`, text: `post3`, user: `user919`, date: `9-1-2029` }
        // ])

        // sort by NEWS FIRST 
        let data = sortByNewsFirst([
            { type: `post`, text: `post4`, user: `user919`, date: `9-1-2019` },
            { type: `news`, text: `news1`, user: `user919`, date: `9-1-2020` },
            { type: `news`, text: `news2`, user: `user919`, date: `9-1-2029` },
            { type: `news`, text: `news3`, user: `user919`, date: `9-1-2029` },
            { type: `post`, text: `post1`, user: `user919`, date: `9-1-2029` },
            { type: `post`, text: `post2`, user: `user919`, date: `9-1-2029` },
            { type: `post`, text: `post3`, user: `user919`, date: `9-1-2029` }
        ])
        console.log('qaqdwdas', data)
        dataSet(sortByNewsFirst(data))
    }, [])

    return (
        <React.Fragment>
            News
            <div className="row">
                <div className="leftcolumn">
                    {data.map(card => <Card card={card} />)}
                    {/* <Card data={{ type: `news`, text: `hello everyone`, user: `user919` }}/> */}
                </div>
            </div>
        </React.Fragment>
    );
};

function Card({ card }) {
    return (

        <React.Fragment>
            <div className="card">
                <h2>{card[`text`]}</h2>
                <h5>{card[`type`]} posted at {card[`date`]}</h5>
                <p>{card[`user`]}</p>
            </div>
        </React.Fragment>
    )
}

export default NewsMain;