import React from 'react';
import SignOutButton from './SignOutButton'
import SignOutText from './SignOutText'

const NavBar = ({isSignedIn}) => {
    return (
        <React.Fragment>
            {/* has SignOut */}
            < div class="main" >
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <SignOutText isSignedIn={isSignedIn} />
                    {isSignedIn && <SignOutButton />}
                </nav>
            </div >
        </React.Fragment>
    );
};

export default NavBar;