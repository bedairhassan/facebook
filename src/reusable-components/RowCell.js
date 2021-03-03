import React from 'react';

const RowCell = ({Name,Row}) => {
    return (
        <React.Fragment>
        <tr>
          <td>{Name}</td>
          <td>{Row}</td>
        </tr>
      </React.Fragment>
    );
};

export default RowCell;

