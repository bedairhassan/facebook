import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import './News.css';


const NewsMain = () => {

    const [data, dataSet] = useState([])

    // load from firebase!!!!
    useEffect(() => {
        dataSet([
            { type: `news`, text: `news1`, user: `user919`,date:`9-1-29`},
            { type: `news`, text: `news2`, user: `user919`,date:`9-1-29`},
            { type: `news`, text: `news3`, user: `user919`,date:`9-1-29`},
            { type: `post`, text: `post1`, user: `user919`,date:`9-1-291`},
            { type: `post`, text: `post2`, user: `user919`,date:`9-1-291`},
            { type: `post`, text: `post3`, user: `user919`,date:`9-1-291`}
        ])

        // sort by NEWS FIRST 
    }, [])

    return (
        <React.Fragment>
            News
            <div className="row">
                <div className="leftcolumn">
                    {data.map(card=><Card card={card}/>)}
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