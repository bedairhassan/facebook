import React from 'react';
import { bake_cookie, read_cookie, delete_cookie } from 'sfcookies';
import { Route, BrowserRouter as Router, Switch, Redirect, Link } from 'react-router-dom';
import isEmpty from '../../tools/isEmpty'


const NewsMain = ({data}) => {

    

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