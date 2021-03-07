import React from 'react';
import { act } from 'react-dom/test-utils';
import { useEffect, useState } from 'react/cjs/react.development';
import Select from '../../reusable-components/Select';

import SignIn from './SignIn'
import SignUp from './SignUp'

const Login = () => {

    const [action,actionSet]=useState(`SignIn`)

    return (
        <div>
            <h1>Login Page</h1>
            Do you want to sign in or sign up ?

            <Select
            data={[`Choose`,`SignIn`,`SignUp`]}
            retrieveValue={action=>actionSet(action)}
            />

            {action===`SignIn`&&<SignIn/>}
            {action===`SignUp`&&<SignUp/>}

        </div>
    );
};

export default Login;