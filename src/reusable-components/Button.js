import React from 'react';

const Button = ({name,submit}) => {
    return (
        <div>
            <button onClick={()=>submit()}>{name}</button>
        </div>
    );
};

export default Button;