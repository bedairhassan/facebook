import React from 'react';


// let object ={context,state}

// context[1] : RECEIVED



// RECEIVER === read_cookie('currentUser')

const FR = ({ object,decline,accept }) => {
    return (
        <div>
            <tr>
                <td>
                    {object.context.split(',')[0]}
                </td>
                <td>
                    {object.date}
                </td>
                <td>
                    <button
                        class="btn btn-danger"
                        onClick={() => decline(object)}
                    >Decline</button>
                </td>
                <td>
                    <button
                        class="btn btn-success"
                        onClick={() => accept(object)}
                    >Accept</button>
                </td>
            </tr>
        </div>
    );
};

export default FR;