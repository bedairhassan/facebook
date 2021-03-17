import react from 'react';
import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import Select from '../../reusable-components/Select';
import { bake_cookie, read_cookie, delete_cookie } from 'sfcookies';

import SignIn from './SignIn'
import SignUp from './SignUp'


import isEmpty from '../../tools/isEmpty'

import '../../App.css'

const Login = () => {

    const [action, actionSet] = useState(`Sign In`)

    

    return (
        <div class="main" align="center">

            {
                {
                    true:

                        <React.Fragment>

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