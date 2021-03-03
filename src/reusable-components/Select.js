import React from 'react';

const Select = ({ retrieveValue, data }) => {
    return (
        <div>
            <select onChange={e => retrieveValue(e.target.value)}>
                {data.map(option => <option value={option}>{option}</option>)}
            </select>
        </div>
    );
};

export default Select;