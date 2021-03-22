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
import firebaseSet from '../../firebase/firebase-tools/firebaseSet';

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

function IsILikedPostBefore(array,user=read_cookie('currentUser')){

    return array.filter(person=>person===user)[0]!==undefined
}

function Push(card){

    console.log(card[`likes`])

    if(!IsILikedPostBefore(arrayResult(card.likes))){

        let likes = {...card[`likes`]}
        let user = read_cookie('currentUser')
        likes[user]=user

        let ref = 'announcements' // 
        let child = card.child
        // let set = {...card,likes:{...card[`likes`],object}}
        let set = {...card,likes}

        firebaseSet({ref,child,set})
    }else{

        alert(`You already liked it`)
    }
}

function Card({ card }) {

    const NewsPaper = card[`type`] === `news` && <sub>📰</sub>

    const [YOU, YOUset]
        = useState(card[`user`] === read_cookie(`currentUser`))

console.log(arrayResult(card[`likes`]))
    const likes = arrayResult(card[`likes`]).length

    console.log(IsILikedPostBefore(arrayResult(card[`likes`]),'hassan'))

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
                    <img
                        onClick={() => Push(card)}

                        src={likeButton} width="24px" />
                    {likes > 0 && <span

                        class="badge">{likes}</span>}

                    {/* /news  */}
                    {/* {date,text,type,user,likes} */}
                </p>
            </div>
        </React.Fragment>
    )
}




export default NewsMain;