// Lösung für Übung 1

// App.jsx
export default function App() {
  return (
    <>
      <h1>Bücher und mehr</h1>
      <Main />
    </>
  );
}

// App.css
/* CSS-Regeln wie in der Aufgabenbeschreibung */

// Main.jsx
import React from 'react';
import Table from './Table';

const BOOKS = [
  { Autor: 'Stephen King', Titel: 'Carrie', Jahr: 1974, Seiten: 199, Verlag: 'Doubleday' },
  { Autor: 'Stephen King', Titel: 'The Shining', Jahr: 1977, Seiten: 447, Verlag: 'Doubleday' },
  { Autor: 'Stephen King', Titel: 'Christine', Jahr: 1983, Seiten: 526, Verlag: 'Viking' },
  { Autor: 'Stephen King', Titel: 'It', Jahr: 1986, Seiten: 1138, Verlag: 'Viking' },
  { Autor: 'Stephen King', Titel: 'Misery', Jahr: 1987, Seiten: 310, Verlag: 'Viking' },
  { Autor: 'Stephen King', Titel: 'Joyland', Jahr: 2013, Seiten: 288, Verlag: 'Hard Case Crime' },
];

const AUDIO = [
  { Autor: 'Stephen King', Titel: 'On Writing', Jahr: 2000, Länge: 120, Verlag: 'Simon & Schuster Audio' },
  { Autor: 'Stephen King', Titel: 'Salem\'s Lot', Jahr: 2004, Länge: 180, Verlag: 'Simon & Schuster Audio' },
  { Autor: 'Stephen King', Titel: 'Bag of Bones', Jahr: 2005, Länge: 240, Verlag: 'Simon & Schuster Audio' },
];

export default function Main() {
  return (
    <main>
      <h2>Bücher</h2>
      <Table data={BOOKS} />
      <h2>Audio-Books</h2>
      <Table data={AUDIO} />
    </main>
  );
}

// Table.jsx
import React from 'react';
import TableRow from './TableRow';

export default function Table({ data }) {
  return (
    <table>
      <thead>
        <tr>
          {Object.keys(data[0]).map((key) => (
            <th key={key}>{key}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <TableRow key={index} item={item} isOdd={index % 2 !== 0} />
        ))}
      </tbody>
    </table>
  );
}

// TableRow.jsx
import React from 'react';

export default function TableRow({ item, isOdd }) {
  return (
    <tr className={isOdd ? 'odd' : ''}>
      {Object.values(item).map((value, index) => (
        <td key={index}>{value}</td>
      ))}
    </tr>
  );
}