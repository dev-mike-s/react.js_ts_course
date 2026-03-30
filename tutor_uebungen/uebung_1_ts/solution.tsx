// Lösung für Übung 1 (TypeScript)

// App.tsx
import React from 'react';
import MainComponent from './src/components/Main';

function App() {
  return (
    <>
      <h1>Bücher und mehr</h1>
      <MainComponent />
    </>
  );
}

export { App };

// Main.tsx
import TableComponent from './src/components/Table';

interface Book {
  Autor: string;
  Titel: string;
  Jahr: number;
  Seiten?: number;
  Verlag: string;
}

interface Audio {
  Autor: string;
  Titel: string;
  Jahr: number;
  Länge: number;
  Verlag: string;
}

const BOOKS: Book[] = [
  { Autor: 'Stephen King', Titel: 'Carrie', Jahr: 1974, Seiten: 199, Verlag: 'Doubleday' },
  { Autor: 'Stephen King', Titel: 'The Shining', Jahr: 1977, Seiten: 447, Verlag: 'Doubleday' },
  { Autor: 'Stephen King', Titel: 'Christine', Jahr: 1983, Seiten: 526, Verlag: 'Viking' },
  { Autor: 'Stephen King', Titel: 'It', Jahr: 1986, Seiten: 1138, Verlag: 'Viking' },
  { Autor: 'Stephen King', Titel: 'Misery', Jahr: 1987, Seiten: 310, Verlag: 'Viking' },
  { Autor: 'Stephen King', Titel: 'Joyland', Jahr: 2013, Seiten: 288, Verlag: 'Hard Case Crime' },
];

const AUDIO: Audio[] = [
  { Autor: 'Stephen King', Titel: 'On Writing', Jahr: 2000, Länge: 120, Verlag: 'Simon & Schuster Audio' },
  { Autor: 'Stephen King', Titel: 'Salem\'s Lot', Jahr: 2004, Länge: 180, Verlag: 'Simon & Schuster Audio' },
  { Autor: 'Stephen King', Titel: 'Bag of Bones', Jahr: 2005, Länge: 240, Verlag: 'Simon & Schuster Audio' },
];

function Main() {
  return (
    <main>
      <h2>Bücher</h2>
      <TableComponent data={BOOKS} />
      <h2>Audio-Books</h2>
      <TableComponent data={AUDIO} />
    </main>
  );
}

export { Main };

// Table.tsx
import TableRowComponent from './src/components/TableRow';

interface TableProps<T> {
  data: T[];
}

function Table<T extends object>({ data }: TableProps<T>) {
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
          <TableRowComponent key={index} item={item} isOdd={index % 2 !== 0} />
        ))}
      </tbody>
    </table>
  );
}

export { Table };

// TableRow.tsx
interface TableRowProps<T> {
  item: T;
  isOdd: boolean;
}

function TableRow<T extends object>({ item, isOdd }: TableRowProps<T>) {
  return (
    <tr className={isOdd ? 'odd' : ''}>
      {Object.values(item).map((value, index) => (
        <td key={index}>{value}</td>
      ))}
    </tr>
  );
}

export { TableRow };