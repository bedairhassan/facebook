import React from 'react';

const DisplayIf = ({ yes, no, Trigger, condition }) => {
    return (
        <div>
            {condition ?
                <img src={yes} onClick={Trigger} />
                : <img src={no} onClick={Trigger} />}

        </div>
    );
};

export default DisplayIf;