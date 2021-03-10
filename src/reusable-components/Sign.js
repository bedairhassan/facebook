import React from 'react';

import Input from '../reusable-components/Input'

const Sign = ({usernameSet,passwordSet,usernameId}) => {
    return (
        <div>
            <Input 
            
            id={usernameId}
            hint={`Enter username`} retrieveValue={username => usernameSet(username)} />


{/* I can make this reusable! */}
            <input
                placeholder={`Enter password`}
                onChange={e => passwordSet(e.target.value)}
                type="password"
            />
        </div>
    );
};

export default Sign;