import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import './News.css';
import { sortByNewsFirst } from '../../CONSOLE/sortDataBasedonType'
import { Route, BrowserRouter as Router, Switch, Redirect, Link } from 'react-router-dom';
import { bake_cookie, read_cookie, delete_cookie } from 'sfcookies';
import firebase from '../../firebase/firebase'
import isEmpty from '../../tools/isEmpty'

const arrayResult = (rooms) => {
    return Object.keys(rooms).map(room => {
        let q = rooms[room]
        return q
    })
};



const NewsMain = () => {

    const [data, dataSet] = useState([])

    // load from firebase then sort. 
    useEffect(() => {

        firebase.database().ref('/news').on("value", function (snapshot) {
            // console.log(snapshot.val());
            console.table()
            dataSet(sortByNewsFirst(arrayResult(snapshot.val())))


            snapshot.forEach(function (data) {
            });
        })
    }, [])

    // todo: reusable, put it in its own file
   

    return (
        <React.Fragment>

            {isEmpty(read_cookie(`currentUser`)) ? `not signed in` :

                <React.Fragment>
                    <h1>News</h1>
                    <div >
                        <div >
                            {data.map(card => <Card card={card} />)}
                            {/* <Card data={{ type: `news`, text: `hello everyone`, user: `user919` }}/> */}
                        </div>
                    </div>
                </React.Fragment>

            }

        </React.Fragment>
    );
};

function Card({ card }) {
    return (

        <React.Fragment>
            <div className="card">
                <h2>{card[`text`]}</h2>
                <h5 align="right">{card[`type`]} posted at {card[`date`]}</h5>
                <p align="left">
                    <Link to="/user" onClick={() => {

                        let user = card[`user`]
                        bake_cookie(`usertoDisplay`, user)

                    }}>{card[`user`]}</Link>
                </p>
            </div>
        </React.Fragment>
    )
}

export default NewsMain;