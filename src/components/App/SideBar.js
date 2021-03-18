import React from 'react';

import Links from './Links'

const SideBar = ({isSignedIn}) => {
    return (
        <div class="sidenav">

            {isSignedIn &&
                <React.Fragment>
                    {Links['about']}
                    {Links['news']}
                </React.Fragment>}
            {!isSignedIn && Links['login']}

        </div>
    );
};

export default SideBar;