import react from 'react';
import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import Select from '../../reusable-components/Select';
import { bake_cookie, read_cookie, delete_cookie } from 'sfcookies';

import SignIn from './SignIn'
import SignUp from './SignUp'

const Login = () => {

    const [action, actionSet] = useState(`Sign In`)

    function isEmpty(map) { // checks on empty array or empty object or empty string
        for (var key in map) {
            if (map.hasOwnProperty(key)) {
                return false;
            }
        }
        return true;
    }

    return (
        <div>

            {
                {
                    true:

                        <React.Fragment>
                            <h1>Login Page</h1>

                            <Table
                                fields={'Sign In,Sign Up'}
                                action={action => actionSet(action)}
                            />

                            {
                                {
                                    'Sign In': <SignIn />,
                                    'Sign Up': <SignUp />
                                }[action]
                            }
                        </React.Fragment>
                    ,
                    false: <h1>YOU ARE SIGNED IN</h1>
                }[isEmpty(read_cookie(`currentUser`))] // if empty, signed out // if not empty, sign in 
            }

        </div>
    );
};

const Table = ({ fields, action }) => {
    return (
        <React.Fragment>
            <table className="table">
                <tr>

                    {fields.split(',').map(field =>
                        <td onClick={() => action(field)}>{field}</td>
                    )}

                </tr>
            </table>

        </React.Fragment>
    )
}

export default Login;