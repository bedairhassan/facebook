import react from 'react';
import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import Select from '../../reusable-components/Select';

import SignIn from './SignIn'
import SignUp from './SignUp'

const Login = () => {

    const [action, actionSet] = useState(`Sign In`)

    return (
        <div>
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