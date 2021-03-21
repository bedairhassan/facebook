import React from 'react';

// visuals
import Each from './Each'

const Table = ({data}) => {
    return (
        <div class="table">
            {data.map(item=><Each item={item}/>)}
        </div>
    );
};

export default Table;