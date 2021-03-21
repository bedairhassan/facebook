import React from 'react';

const Header = ({headers}) => {
    return (
        <div>
            <tr>
            {headers.map(header=><th>{header}</th>)}
            </tr>
        </div>
    );
};

export default Header;