import React from 'react';

interface TableRowProps<T> {
    item: T;
    isOdd: boolean;
}

const TableRow = <T extends object>({ item, isOdd }: TableRowProps<T>): React.JSX.Element => {
    return (
        <tr className={isOdd ? 'odd' : ''}>
            {Object.values(item).map((value, index) => (
                <td key={index}>{value as React.ReactNode}</td>
            ))}
        </tr>
    );
};

export default TableRow;
export type { TableRowProps };