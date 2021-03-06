import React from 'react';

import Input from '../reusable-components/Input'

const Sign = ({usernameSet,passwordSet}) => {
    return (
        <div>
            <Input hint={`Enter username`} retrieveValue={username => usernameSet(username)} />


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