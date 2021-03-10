import React from 'react';
import { bake_cookie, read_cookie, delete_cookie } from 'sfcookies';
import { Route, BrowserRouter as Router, Switch, Redirect, Link } from 'react-router-dom';
import isEmpty from '../../tools/isEmpty'


const NewsMain = ({ data,optionalTitle}) => {



    // todo: reusable, put it in its own file


    return (
        <React.Fragment>

            {isEmpty(read_cookie(`currentUser`)) ? `not signed in` :

                <React.Fragment>
                    {
                        optionalTitle&&<h1>Announcements: News or Posts</h1>
                    }
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

    const NewsPaper = card[`type`] === `news` && <sub>📰</sub>

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

                    {{
                        true: <Link to="/about">YOU</Link>,
                        false:
                            <Link to="/user" onClick={() => {

                                let user = card[`user`]
                                bake_cookie(`usertoDisplay`, user)

                            }}>{card[`user`]}</Link>
                    }[card[`user`] === read_cookie(`currentUser`)] // USER IS YOU
                    }

                </p>
            </div>
        </React.Fragment>
    )
}

export default NewsMain;