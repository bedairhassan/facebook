import React from 'react';

const Input = ({retrieveValue,hint}) => {
    return (
        <div>
            <input onChange={e=>retrieveValue(e.target.value)} placeholder={hint}/>
        </div>
    );
};

export default Input;