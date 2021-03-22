import React, { useEffect, useState } from 'react';

import Links from './Links'
import { Link } from 'react-router-dom';


// {/* Friend Request count */ }
import FriendRCount from './FriendRCount'

import readFRNoti from '../../firebase/readingData/readFRNoti'

import bell from '../../images/bell.png'
import { read_cookie } from 'sfcookies';

const SideBar = ({ isSignedIn }) => {

    // place at promise to save some lines
    const filter = (data)=>{

        // context: mustafa,{hassan} :: 2nd one is the dude who receives friend request
        data=data.filter(item=>item.context.split(',')[1]===read_cookie('currentUser'))

        return data
    }

    // friend request count
    const [count, countSet] = useState()
    useEffect(() => readFRNoti.then(data => countSet(filter(data).length)), [])


    return (
        <div class="sidenav">

            {isSignedIn &&
                <React.Fragment>
                    {Links['about']}
                    {Links['news']}

                    <Link to="/fr" class="nav-item nav-link px-3"><h5>Friend Requests
                        {count > 0 &&
                            <React.Fragment>
                                -
                                <img src={bell} width="16px" />
                                <span class="badge">{count}</span>
                            </React.Fragment>
                        }
                    </h5></Link>

                    {Links['friendlist']}
                    {Links['MessagesList']}
                </React.Fragment>}
            {!isSignedIn && Links['login']}

        </div>
    );
};

export default SideBar;