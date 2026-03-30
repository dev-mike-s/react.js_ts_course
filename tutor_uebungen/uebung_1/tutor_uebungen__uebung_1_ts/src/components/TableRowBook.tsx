import type { BookType } from "./Main"

type Props = {
    book: BookType,
    i: number
}

function TableRowBook(props: Props) {

    /* 
    props:
     - book: Objekt
     - i: Zahl (Index)
    */

    return (
        <tr className={props.i % 2 ? "odd" : undefined}>
            <td>{props.book.Autor}</td>
            <td>{props.book.Titel}</td>
            <td>{props.book.Jahr}</td>
            <td>{props.book.Seiten}</td>
            <td>{props.book.Verlag}</td>
        </tr>
    )
}

export default TableRowBook