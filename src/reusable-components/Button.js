import React from 'react';

const Button = ({name,submit,className}) => {
    return (
        <div>
            <button className={className} 
            onClick={()=>submit()}>{name}</button>
        </div>
    );
};

export default Button;