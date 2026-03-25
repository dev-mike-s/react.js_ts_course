import TableRow from './TableRow'
import type { AudioType, BookType } from "./Main"

type Props = {
    data: (AudioType | BookType)[]
}

function Table(props: Props) {

    /* 
    props:
     - data: Array (books/audio)
    */

    const KEYS_ARRAY = Object.keys(props.data[0])

    return (
        <table>
            <thead>
                <tr>
                    {
                        KEYS_ARRAY.map((ele) => {
                            // ele = String
                            return <th>{ele}</th>
                        })
                    }
                </tr>
            </thead>
            <tbody>
                {
                    props.data.map((ele, index) => {
                        // ele = Objekt
                        return <TableRow product={ele} i={index} />
                    })
                }
            </tbody>
        </table>
    )
}

export default Table