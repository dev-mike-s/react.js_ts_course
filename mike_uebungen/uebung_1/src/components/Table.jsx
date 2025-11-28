import React from 'react';
import TableRow from './TableRow.jsx';

function Table(props) {
  /* props = Objekt
   * props:
   * -autor : string
   * -titel : string
   * -jahr : number
   * -seiten: number
   * -verlag : string
   * -Länge: number
   */
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Autor</th>
            <th>Titel</th>
            <th>Jahr</th>
            <th>Seiten</th>
            {/*<th>{Länge ? Länge : ''}</th>*/}
            <th>Verlag</th>
          </tr>
        </thead>
        <tbody>
          {console.log("TEST - structure of props/data ?")}
          {console.log(props)}
          {console.log("TEST END - structure of props/data ?")}
          {props.books.map((value, index) => {
            return <TableRow key={index} {...value} />;
          })} ||
          {props.audio.map((value, index) => {
            return <TableRow key={index} {...value} />;
          })}
        </tbody>
      </table>
    </>
  );
}

export default Table;

/*
      &&
      <table>
        <thead>
          <tr>
            <th>Autor</th>
            <th>Titel</th>
            <th>Jahr</th>
            <th>Seiten</th>
            <th>Verlag</th>
          </tr>
        </thead>
        <tbody>
          {props.audio.map((value, index) => {
            return <TableRow key={index} {...value} />;
          })}
        </tbody>
      </table>

<tbody>
    <tr>
      <th scope="row">Chris</th>
      <td>HTML tables</td>
      <td>22</td>
    </tr>
    <tr>
      <th scope="row">Dennis</th>
      <td>Web accessibility</td>
      <td>45</td>
    </tr>
    <tr>
      <th scope="row">Sarah</th>
      <td>JavaScript frameworks</td>
      <td>29</td>
    </tr>
    <tr>
      <th scope="row">Karen</th>
      <td>Web performance</td>
      <td>36</td>
    </tr>
  </tbody>
  */
