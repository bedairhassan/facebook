import React from 'react';

import FR from './FR' // display single object
import Header from './Header'


// decline,accept
import decline from '../JS/friend-req/decline'
import accept from '../JS/friend-req/accept'

const Table = ({ data }) => {

    return (
        <div>
            <table class="table">

                {{
                    true: <Header headers={'name'.split(',')} />,
                    false: <h1>No friend requests</h1>
                }[data.length > 0]}


                {/* data.length>0 : safe! */}
                {data.length > 0 && data.map(item =>

                    <FR object={item} accept={object => accept(object)} decline={object => decline(object)} />)
                }

            </table>
        </div>
    );
};

export default Table;