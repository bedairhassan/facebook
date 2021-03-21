import React, { useState } from 'react';
import { bake_cookie, read_cookie, delete_cookie } from 'sfcookies';
import { Route, BrowserRouter as Router, Switch, Redirect, Link } from 'react-router-dom';
import isEmpty from '../../tools/isEmpty'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import arrayResult from '../../tools/arrayResult';

// const likeButton = require('../../images/like.png')
import likeButton from '../../images/like.png'


import firebasePush from '../../firebase/firebase-tools/firebasePush'

import '../../App.css'

import isSignedIn from '../../tools/isSignedIn'

const NewsMain = ({ data, optionalTitle }) => {



    // todo: reusable, put it in its own file


    return (
        <React.Fragment>

            <div class="main">
                {!isSignedIn() ? `not signed in` :

                    <React.Fragment>
                        {
                            optionalTitle && <h1>Announcements: News or Posts</h1>
                        }
                        <div >
                            {data.map(card => <Card card={card} />)}
                        </div>
                    </React.Fragment>

                }
            </div>

        </React.Fragment>
    );
};

function Card({ card }) {

    const NewsPaper = card[`type`] === `news` && <sub>📰</sub>

    const [YOU, YOUset]
        = useState(card[`user`] === read_cookie(`currentUser`))

    // console.log(arrayResult(card[`likes`]))

    return (

        <React.Fragment>
            <div className="card">
                <h2>
                    {NewsPaper}
                    {card[`text`]}
                    {NewsPaper}
                </h2>
                <h5 align="right">{card[`type`]} posted at {card[`date`]}</h5>
                <p align="left">

                    {YOU && <Link to="/about">YOU</Link>}
                    {!YOU && <Link to="/user" onClick={() => {

                        let user = card[`user`]
                        bake_cookie(`usertoDisplay`, user)

                    }}>{card[`user`]}</Link>}


                </p>
                <p align="right">
                    <img src={likeButton} width="24px" />
                    {/* {arrayResult(card[`likes`]).length >1 } */}
                </p>
            </div>
        </React.Fragment>
    )
}




export default NewsMain;