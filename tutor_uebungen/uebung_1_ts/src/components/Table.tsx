import TableRow from './TableRow';
import type { TableRowProps } from './TableRow';

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
        {data.map((item, index) => {
          const props: TableRowProps<T> = { item, isOdd: index % 2 !== 0 };
          return <TableRow key={index} {...props} />;
        })}
      </tbody>
    </table>
  );
}

export default Table;