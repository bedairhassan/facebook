import React from 'react';

import { Route, BrowserRouter as Router, Switch, Redirect, Link } from 'react-router-dom';

// components
import Login from '../../components/LoggingIn/Login'
import About from '../../components/About/AboutMain'
import News from '../../components/News/NewsPublic'
import User from '../../components/User/User'
import FriendReq from '../../components/FriendRequests/FriendReq'

const Routing = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/News"><News /></Route>
                <Route exact path="/login"><Login /></Route>
                <Route exact path="/About"><About /></Route>
                <Route exact path="/user"><User /></Route>
                <Route exact path="/fr"><FriendReq /></Route>
            </Switch>
        </div>
    );
};

export default Routing;