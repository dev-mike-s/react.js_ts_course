import React from 'react';

function TableRow(props) {
  console.log();
  return (
    <tr>
      <td>{props.Autor}</td>
      <td>{props.Titel}</td>
      <td>{props.Jahr}</td>
      <td>{props.Seiten ? props.Seiten : ''}</td>
      <td>{props.Laenge ? props.Laenge : ''}</td>
      <td>{props.Verlag}</td>
    </tr>
  );
}

export default TableRow;
